import { Box, Tooltip, Typography } from "@mui/material";
import { Modal, ModalDialog, ModalClose, DialogTitle, Button } from "@mui/joy";
import NavigationBar from "../navbar";
import Footer from "../footer";
import { DataGrid } from "@mui/x-data-grid";
import { useDashboard } from "./hooks/useDashboard";

function DashboardComponent() {
  const { ...hooks } = useDashboard();

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
        <Box
          sx={{
            width: "100%",
            paddingLeft: "100px",
            marginBottom: "20px",
          }}
        >
          <Button onClick={hooks.handleClickAdd}>Add</Button>
          <Button
            onClick={hooks.handleClickDelete}
            disabled={!(hooks.selectedAppointment?.status === "Booked")}
            color="danger"
            sx={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
        </Box>
        <Box sx={{ height: 400, padding: "0px 100px" }}>
          <DataGrid
            rows={hooks.storedAppointments}
            columns={hooks.ColumnSetting}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            onCellClick={hooks.handleSelectedAppointment}
            sx={{ maxWidth: "200vh" }}
          />
        </Box>
        <Modal open={hooks.isModalOpen} onClose={hooks.handleModalClose}>
          <ModalDialog role="alertdialog" variant="outlined">
            <ModalClose />
            <DialogTitle component="h2">{hooks.modalTitle}</DialogTitle>
            <Typography component="h2">{hooks.modalSubtitle}</Typography>

            <Button
              variant="plain"
              color="neutral"
              onClick={hooks.handleModalClose}
            >
              OK
            </Button>
          </ModalDialog>
        </Modal>
        <Footer />
      </Box>
    </Box>
  );
}

export default DashboardComponent;
