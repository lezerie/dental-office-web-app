import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  ToggleButton,
  TextField,
} from "@mui/material";
import NavigationBar from "../navbar";
import Footer from "../footer";
import CoverPhoto from "/dental-clinic-cover-photo.png";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function BookAppointmentPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with our professional teeth whitening services. Safe, effective, and long-lasting results.",
      imageSrc: "whitening.png",
      value: "teethWhitening",
      doctors: [
        {
          name: "Dr. John Smith",
          schedule: "MWF 9:00AM - 12:00PM",
        },
        {
          name: "Dr. Emily Brown",
          schedule: "TTH 9:00AM - 12:00PM",
        },
      ],
    },
    {
      title: "Dental Checkup",
      description:
        "Routine checkups to ensure your oral health is in top condition. Includes cleaning, examination, and x-rays.",
      imageSrc: "checkup.png",
      value: "dentalCheckup",
      doctors: [
        {
          name: "Dr. David Lee",
          schedule: "Sat-Sun 9:00AM - 12:00PM",
        },
        {
          name: "Dr. John Smith",
          schedule: "MWF 9:00AM - 12:00PM",
        },
      ],
    },
    {
      title: "Orthodontics",
      description:
        "Straighten your teeth with our advanced orthodontic treatments. We offer traditional braces and clear aligners.",
      imageSrc: "ortho.png",
      value: "orthodentics",
      doctors: [
        {
          name: "Dr. Emily Brown",
          schedule: "TTH 9:00AM - 12:00PM",
        },
        {
          name: "Dr. David Lee",
          schedule: "Sat-Sun 9:00AM - 12:00PM",
        },
      ],
    },
  ];

  const handleChangeService = (service: string) => {
    if (selectedServices.some((savedService) => service === savedService)) {
      const index = selectedServices.indexOf(service);
      setSelectedServices((prev: string[]) =>
        prev.filter((item) => item !== service)
      );
    } else {
      setSelectedServices((prev: string[]) => [...prev, service]);
    }
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showTimeSelection, setShowTimeSelection] = useState<boolean>(false);

  const disableDates = (date: Date) => {
    const disabledDates = [
      new Date(2024, 6, 1),
      new Date(2024, 6, 10),
      new Date(2024, 6, 20),
    ];
    return disabledDates.some(
      (disabledDate) => date.getTime() === disabledDate.getTime()
    );
  };

  const handleSelectDate = (value) => {
    console.log(new Date(value));
    setSelectedDate(new Date(value));
  };
  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar />
      <Box
        sx={{
          width: "100%",
          border: "1px solid #002b5a",
          color: "#002b5a",
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Book an Appointment
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            maxWidth: "770px",
            margin: "auto",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#002b5a",
              textAlign: "left",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Select a Service
          </Typography>

          <RadioGroup row sx={{ marginBottom: "60px" }}>
            {services.map((service, index) => {
              return (
                <ToggleButton
                  value={service.title}
                  onChange={() => handleChangeService(service.value)}
                  sx={{
                    marginRight: index === services.length - 1 ? 0 : "30px",
                    padding: "20px 51px",
                    borderRadius: "5px",
                    boxShadow: "0px 7px 5px 0px #002b5a",
                    textTransform: "none",
                    backgroundColor: selectedServices.some(
                      (serv) => service.value === serv
                    )
                      ? "#fda5cb"
                      : "#fffffd",
                    color: selectedServices.some(
                      (serv) => service.value === serv
                    )
                      ? "#fffffd"
                      : "#002b5a",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: selectedServices.some(
                        (serv) => service.value === serv
                      )
                        ? "#fda5cb"
                        : "#fffffd",
                      color: selectedServices.some(
                        (serv) => service.value === serv
                      )
                        ? "#fffffd"
                        : "#002b5a",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    {" "}
                    {selectedServices.some((serv) => serv === service.value) ? (
                      <CheckCircleIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                    <Typography>{service.title}</Typography>
                  </Box>
                </ToggleButton>
              );
            })}
          </RadioGroup>

          <Typography
            sx={{
              color: "#002b5a",
              textAlign: "left",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Select a Date
          </Typography>
          <Box sx={{ display: "flex", marginBottom: "45px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateCalendar"]}
                sx={{ marginRight: "50px" }}
              >
                <DateCalendar
                  referenceDate={dayjs(new Date())}
                  views={["year", "month", "day"]}
                  onChange={handleSelectDate}
                />
              </DemoContainer>
            </LocalizationProvider>
            {services[0].doctors.map((doc) => {
              return (
                <Button
                  sx={{
                    boxShadow: "0px 7px 5px 0px #002b5a",
                    textTransform: "none",
                    backgroundColor: "#fffffd",
                    color: "#002b5a",
                  }}
                >
                  {doc.name}
                </Button>
              );
            })}
          </Box>
          <Box sx={{ marginBottom: "45px" }}>
            <Typography
              sx={{
                color: "#002b5a",
                textAlign: "left",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Additional Notes
            </Typography>
            <TextField
              label=""
              id="outlined-size-normal"
              defaultValue=""
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Button
            sx={{
              boxShadow: "0px 7px 5px 0px ",
              textTransform: "none",
              backgroundColor: "#002b5a",
              color: "#fffffd",
              alignItems: "center",
            }}
          >
            Confirm appointment
          </Button>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default BookAppointmentPage;
