import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pages } from "../../../constants/pages";
import { useAppSelector, useAppDispatch } from "../../../states/hook";
import { ColumnSetting } from "../../../constants/dashboard-column";
import { UserRequest } from "../../../utils/requests/user.request";
import { addAppointment } from "../../../states/details/appointment.slice";
import { useLogin } from "../../login/hooks/useLogin";

export const useDashboard = () => {
  const { ...useLoginHooks } = useLogin();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [storedAppointments, setStoredAppointments] = useState<any>();
  // const storedAppointments: any[] = useAppSelector(
  //   (state) => state.Appointment.appointment
  // );
  const storedUser: any = useAppSelector((state) => state.User.user);
  const storedToken: string = useAppSelector((state) => state.Token.token);

  console.log("DASH CHECK", storedToken);
  console.log("DASH CHECK");
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalSubtitle, setModalSubtitle] = useState<string>("");
  useEffect(() => {
    const fetch = async () => {
      const storedAppointments = await useLoginHooks.handleFetchAppointmentList(
        storedUser.id,
        storedToken
      );
      console.log("STORAGE", storedAppointments);
      setStoredAppointments(storedAppointments.appointments);
    };
    fetch();
  }, []);
  // console.log("DASH STORE", storedAppointments);
  const handleSelectedAppointment = (appointment: any) => {
    if (!isSelected) {
      setIsSelected(true);
      setSelectedAppointment(appointment.row);
    } else {
      setIsSelected(false);
      setSelectedAppointment(null);
    }
  };

  // if (storedFullname?.length !== 0) setDisplayedText(storedFullname);
  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickAdd = () => {
    navigate("/book-appointment");
  };

  const handleClickDelete = async () => {
    const response = await UserRequest({
      method: "DELETE",
      id: selectedAppointment.appointment_id,
      token: storedToken,
    });
    if (response.status === 200) {
      const tempSelectedAppointment = storedAppointments.filter(
        (appointment: any) =>
          appointment.appointment_id != parseInt(response.id)
      );
      const appointmentPlaceholder =
        await useLoginHooks.handleFetchAppointmentList(
          storedUser.id,
          storedToken
        );
      console.log("HANDLE DELETE", appointmentPlaceholder);
      setStoredAppointments(appointmentPlaceholder.appointments);
      dispatch(addAppointment(tempSelectedAppointment));
      setIsSelected(false);

      setModalTitle("Appointment Deleted Successfully!");
      setModalSubtitle(
        "Your appointment has been deleted. We hope to see you again soon. If you need to reschedule, please visit our booking page."
      );
      setIsModalOpen(true);
    } else {
      setModalTitle("Oops! Something Went Wrong");
      setModalSubtitle(
        "We encountered an error while trying to delete your appointment. Please try again later. If the problem persists, contact our support team for assistance."
      );
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalTitle("");
    setModalSubtitle("");
    setIsModalOpen(false);
    switch (modalTitle) {
      case "Appointment Deleted Successfully!":
        navigate("/dashboard");
        break;
      case "Oopps! Something Went Wrong":
        navigate("/book-appointment");
        break;
    }
  };

  return {
    Pages,
    ColumnSetting,
    storedAppointments,
    handleClickHome,
    handleClickLogin,
    selectedAppointment,
    handleSelectedAppointment,
    handleClickAdd,
    handleClickDelete,
    isModalOpen,
    modalTitle,
    modalSubtitle,
    handleModalClose,
  };
};
