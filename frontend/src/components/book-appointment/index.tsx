import { useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  TextField,
  ToggleButtonGroup,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import NavigationBar from "../navbar";
import Footer from "../footer";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useBookAppointment } from "./hooks/useBookAppointment";
import { IAppointmentList } from "../../interfaces/booking.response";
import { Modal, ModalDialog, ModalClose, DialogTitle, Button } from "@mui/joy";

function BookAppointmentComponent() {
  const { ...hooks } = useBookAppointment();

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
          }}
        >
          Book an Appointment
        </Typography>
        <Typography
          sx={{
            color: "#002b5a",
            marginBottom: "15px",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Book your appointment with us at least one day in advance for the best
          care and convenience.
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
            Select service
          </Typography>

          <ToggleButtonGroup
            value={hooks.selectedService}
            exclusive
            onChange={hooks.handleChangeService}
            sx={{ marginBottom: "20px" }}
          >
            {hooks.storedServices == null ? (
              <></>
            ) : (
              hooks.storedServices.map((service, index) => {
                return (
                  <ToggleButton
                    value={service.name}
                    sx={{
                      marginRight:
                        index === hooks.storedServices.length - 1 ? 0 : "30px",
                      padding: "20px 51px",
                      borderRadius: "5px",
                      boxShadow: "0px 7px 5px 0px #002b5a",
                      textTransform: "none",
                      backgroundColor:
                        hooks.selectedService === service.name
                          ? "pink"
                          : "#fffffd",
                      color:
                        hooks.selectedService === service.name
                          ? "#fffffd"
                          : "#002b5a",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor:
                          hooks.selectedService === service.name
                            ? "#fda5cb"
                            : "#fffffd",
                        color:
                          hooks.selectedService === service.name
                            ? "#fffffd"
                            : "#002b5a",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      {" "}
                      {hooks.selectedService === service.name ? (
                        <CheckCircleIcon />
                      ) : (
                        <RadioButtonUncheckedIcon />
                      )}
                      <Typography>{service.name}</Typography>
                    </Box>
                  </ToggleButton>
                );
              })
            )}
          </ToggleButtonGroup>

          <Typography
            sx={{
              color: "#002b5a",
              textAlign: "left",
              fontWeight: 600,
            }}
          >
            Select date
          </Typography>
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateCalendar"]}>
                  <DateCalendar
                    referenceDate={dayjs(hooks.selectedDate)}
                    views={["year", "month", "day"]}
                    onChange={hooks.handleSelectDate}
                    minDate={dayjs(new Date()).add(1, "day")}
                    maxDate={dayjs(new Date()).add(1, "month")}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {hooks.isLoading ? (
                <CircularProgress color="secondary" sx={{ padding: "15%" }} />
              ) : hooks.selectedDay.length ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "50px",
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
                      Select doctor
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        // maxWidth: "1000px",
                      }}
                    >
                      {hooks.availableDoctors.map((doc, index) => {
                        return (
                          <Button
                            onClick={() => hooks.handleClickDoctor(doc)}
                            sx={{
                              marginRight:
                                index === hooks.availableDoctors.length - 1
                                  ? 0
                                  : "30px",
                              boxShadow: "0px 7px 5px 0px #002b5a",
                              textTransform: "none",
                              backgroundColor:
                                hooks.selectedDoctor === doc
                                  ? "#fda5cb"
                                  : "#fffffd",
                              color: "#002b5a",
                              width: "100px",
                              "&:hover": {
                                backgroundColor:
                                  hooks.selectedDoctor === doc
                                    ? "#fda5cb"
                                    : "#fffffd",
                              },
                            }}
                          >
                            {doc}
                          </Button>
                        );
                      })}
                    </Box>
                  </Box>
                  {hooks.selectedDoctor.length !== 0 &&
                  hooks.filteredDoctorScheduleList ? (
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel>Select time</InputLabel>
                      <Select
                        value={hooks.selectedTime}
                        label="Select time"
                        onChange={hooks.handleClickTime}
                      >
                        {hooks.filteredDoctorScheduleList.map((sched) => (
                          <MenuItem
                            value={sched.schedule_time}
                            disabled={
                              hooks.selectedDoctorAppointment &&
                              hooks.selectedDoctorAppointment.some(
                                (item: IAppointmentList) =>
                                  item.schedule_time === sched.schedule_time
                              )
                            }
                          >
                            <em>{sched.schedule_time}</em>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : null}
                </Box>
              ) : (
                <></>
              )}
            </Box>
            {hooks.overallDetails.every((str) => str.length > 0) ? (
              <Typography
                sx={{
                  color: "#002b5a",
                  textAlign: "left",
                }}
              >
                {`Appointment Details: ${hooks.overallDetails.join(", ")}`}
              </Typography>
            ) : null}
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
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
              onChange={(e) => {
                hooks.setInputRemarks(e.target.value);
              }}
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Button
            disabled={hooks.overallDetails.length < 5}
            sx={{
              boxShadow: "0px 7px 5px 0px ",
              backgroundColor: "#002b5a",
              color: "#fffffd",
              alignItems: "center",
              "&.Mui-disabled": {
                backgroundColor: "#cccccc",
                color: "#666666",
                opacity: 0.6,
              },
            }}
            onClick={hooks.handleClickConfirm}
          >
            Confirm appointment
          </Button>
          <Modal open={hooks.isModalOpen} onClose={hooks.handleModalClose}>
            <ModalDialog role="alertdialog" variant="outlined">
              <ModalClose />
              <DialogTitle component="h2">{hooks.modalTitle}</DialogTitle>
              <Typography component="h2">{hooks.modalSubtitle}</Typography>

              <Button
                variant="plain"
                color="neutral"
                onClick={hooks.handleModalConfirm}
              >
                OK
              </Button>
            </ModalDialog>
          </Modal>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default BookAppointmentComponent;
