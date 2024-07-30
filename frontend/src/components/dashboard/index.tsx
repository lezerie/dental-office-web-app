import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import NavigationBar from "../navbar";
import Footer from "../footer";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function DashboardPage() {
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "date",
      headerName: "Date of Appointment",
      type: "date",
      width: 155,
    },
    {
      field: "service",
      headerName: "Service",
      width: 160,
    },
    {
      field: "doctor",
      headerName: "Doctor",
      width: 150,
    },
    { field: "status", headerName: "Status", width: 130 },
    { field: "remarks", headerName: "Additional Requests", width: 500 },
  ];
  const rows = [
    {
      id: 1,
      date: new Date(2021, 0, 19),
      service: "Dental Checkup",
      doctor: "Dr. John Smith",
      status: "Completed",
    },
    {
      id: 2,
      date: new Date(2022, 6, 13),
      service: "Teeth Whitening",
      doctor: "Dr. John Smith",
      status: "Completed",
    },
    {
      id: 3,
      date: new Date(2024, 4, 10),
      service: "Orthodontics",
      doctor: "Dr. Emily Brown",
      status: "Completed",
      remarks: "For braces",
    },
    {
      id: 4,
      date: new Date(2024, 5, 10),
      service: "Orthodontics",
      doctor: "Dr. Emily Brown",
      status: "Completed",
      remarks: "Braces adjustment",
    },

    {
      id: 5,
      date: new Date(2024, 6, 10),
      service: "Orthodontics",
      doctor: "Dr. Emily Brown",
      status: "Completed",
      remarks: "Monthly braces adjustment",
    },
    {
      id: 6,
      date: new Date(2024, 7, 10),
      service: "Orthodontics",
      doctor: "Dr. Emily Brown",
      status: "Completed",
      remarks: "Monthly adjustment of braces",
    },
    {
      id: 7,
      date: new Date(2024, 8, 10),
      service: "Orthodontics",
      doctor: "Dr. Emily Brown",
      status: "Booked",
      remarks: "Braces monthly adjustment",
    },
  ];

  const handleSelectedAppointment = (appointment: any) => {
    console.log("SELECTED APPOINTMENT", appointment);
    setSelectedAppointment(appointment.row);
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
          Your Dashboard
        </Typography>
        <Box>
          <Button>Add</Button>
          <Button disabled={!(selectedAppointment?.status === "Booked")}>
            Cancel
          </Button>
        </Box>
        <Box sx={{ height: 400, padding: "0px 100px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            onCellClick={handleSelectedAppointment}
          />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default DashboardPage;
