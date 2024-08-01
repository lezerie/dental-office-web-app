import { useNavigate } from "react-router-dom";
import { useState, useEffect, MouseEvent } from "react";
import { BookingScheduleRequest } from "../../../utils/requests/booking.schedule.request";
import { BookingAppointmentRequest } from "../../../utils/requests/booking.appointment.request";
import { useAppSelector } from "../../../states/hook";
import { ServicesList } from "../../../constants/services";
import { EquivalentDay } from "../../../constants/day";
import {
  IAppointmentList,
  IScheduleList,
} from "../../../interfaces/booking.response";
import { SelectChangeEvent } from "@mui/material";
import { Book } from "@mui/icons-material";

export const useBookAppointment = () => {
  const navigate = useNavigate();
  const minDate = new Date();
  const storedToken: string = useAppSelector((state) => state.Token.token);
  const storedUser: any = useAppSelector((state) => state.User.user);
  console.log("BOOK CHECK", storedToken);
  const storedServices: any[] = useAppSelector(
    (state) => state.Services.services
  );
  const [overallDetails, setOverallDetails] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableDoctors, setAvailableDoctors] = useState<string[]>([""]);
  const [inputRemarks, setInputRemarks] = useState<string>("");
  const [selectedDoctorAppointment, setSelectedDoctorAppointment] =
    useState<IAppointmentList[]>();
  const [filteredDayScheduleList, setFilteredDayScheduleList] =
    useState<IScheduleList[]>();
  const [filteredDoctorScheduleList, setFilteredDoctorScheduleList] =
    useState<IScheduleList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalSubtitle, setModalSubtitle] = useState<string>("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const stringDate = new Intl.DateTimeFormat("en-us", options).format(
      selectedDate
    );
    const dateToday = new Intl.DateTimeFormat("en-us", options).format(
      new Date()
    );
    const detailsArray: string[] = [
      selectedService,
      stringDate == dateToday ? "" : stringDate,
      selectedDay,
      selectedDoctor,
      selectedTime,
    ];
    setOverallDetails(detailsArray.filter((str) => str.length > 0));
  }, [
    selectedService,
    selectedDate,
    selectedDay,
    selectedDoctor,
    selectedTime,
  ]);

  useEffect(() => {
    handleClickDoctor(selectedDoctor);
  }, [selectedDate]);

  const handleSelectDate = async (value: any) => {
    const dateValue = new Date(value);
    const dayValue = EquivalentDay[dateValue.getDay()];
    setSelectedDate(dateValue);
    setSelectedDay(dayValue);
    setIsLoading(true);
    const response = await BookingScheduleRequest({
      method: "GET",
      process: "schedules",
      schedule_day: dayValue,
    });

    const schedules = response.schedules;
    setFilteredDayScheduleList(schedules);
    const doctorNamesSet = new Set(
      schedules.map((schedule: any) => schedule.doctor_name)
    );
    const uniqueDoctorNames = Array.from(doctorNamesSet);
    setAvailableDoctors(uniqueDoctorNames);
    setIsLoading(false);
  };

  const handleChangeService = (
    e: MouseEvent<HTMLElement>,
    newService: string
  ) => {
    setSelectedService(newService);
  };

  const filterSchedulesByDoctor = (doctorName: string) => {
    const output = filteredDayScheduleList?.filter(
      (schedule) => schedule.doctor_name === doctorName
    );
    setFilteredDoctorScheduleList(output);
  };

  const formatDate = (date: Date) => {
    const pad = (num: number) => String(num).padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Months are zero-based
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleClickDoctor = async (doctor: string) => {
    setIsLoading(true);
    setSelectedDoctor(doctor);

    filterSchedulesByDoctor(doctor);

    const response = await BookingAppointmentRequest({
      method: "GET",
      process: "appointments",
      doctor_fullname: doctor,
      appointment_date: formatDate(selectedDate),
    });
    if (response.status === 200) {
      const appointments = response.appointments;
      setSelectedDoctorAppointment(appointments);
    }
    setIsLoading(false);
  };

  const handleClickTime = (e: SelectChangeEvent) => {
    setSelectedTime(e.target.value);
  };

  const handleClickConfirm = async () => {
    if (storedUser.id) {
      console.log("CLICKE!!");
      setIsLoading(true);
      const response = await BookingAppointmentRequest({
        method: "POST",
        process: "appointments",
        doctor_fullname: selectedDoctor,
        appointment_date: formatDate(selectedDate),
        data: {
          schedule_id: filteredDayScheduleList?.find(
            (item) => item.doctor_name === selectedDoctor
          )?.id,
          service_id: ServicesList.find((item) => item.name === selectedService)
            ?.id,
          remarks: inputRemarks,
          client_id: storedUser.id,
          appointment_date: formatDate(selectedDate),
        },
        headers: {
          "Content-Type": "application/json",
          authorization: storedToken,
        },
      });
      setIsLoading(false);
      if (response.status == 200 || response.status == 201) {
        setModalTitle("Appointment Booked Successfully!");
        setModalSubtitle(`Thank you for booking your appointment with us. Here are the details:
          Service: ${selectedService}
          Doctor: ${selectedDoctor}
          Date and Time: ${new Date(selectedDate)}
          We look forward to seeing you!`);
        setIsModalOpen(true);
      } else {
        setModalTitle("Error Booking Appointment");
        setModalSubtitle(
          "We encountered an error while trying to book your appointment. Please try again later. If the problem persists, contact our support team for assistance."
        );
        setIsModalOpen(true);
      }
    } else {
      setModalTitle("Please Log In to Continue");
      setModalSubtitle(
        "To access this feature, please log in to your account. Don't have an account yet? Sign up to enjoy benefits like easy appointment booking and personalized services."
      );
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalTitle("");
    setModalSubtitle("");
    setIsModalOpen(false);
    switch (modalTitle) {
      case "Please Log In to Continue":
        navigate("/");
        break;
      case "Appointment Booked Successfully!":
        navigate("/dashboard");
        break;
      case "Oopps! Something Went Wrong":
        navigate("/book-appointment");
        break;
    }
  };
  const handleModalConfirm = () => {
    setModalTitle("");
    setModalSubtitle("");
    setIsModalOpen(false);
    switch (modalTitle) {
      case "Please Log In to Continue":
        navigate("/login");
        break;
      case "Appointment Booked Successfully!":
        navigate("/dashboard");
        break;
      case "Oopps! Something Went Wrong":
        navigate("/");
        break;
    }
  };
  return {
    storedServices,
    ServicesList,
    selectedService,
    selectedDoctor,
    handleChangeService,
    handleSelectDate,
    handleClickDoctor,
    handleClickTime,
    isLoading,
    selectedDate,
    selectedDay,
    selectedTime,
    availableDoctors,
    filteredDoctorScheduleList,
    MenuProps,
    overallDetails,
    handleClickConfirm,
    selectedDoctorAppointment,
    setInputRemarks,
    isModalOpen,
    modalTitle,
    modalSubtitle,
    handleModalClose,
    handleModalConfirm,
  };
};
