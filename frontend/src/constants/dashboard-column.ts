import { IHeading } from "../interfaces/dashboard-column";
export const ColumnSetting: IHeading[] = [
  { field: "appointment_id", headerName: "ID", width: 70 },
  {
    field: "appointment_date",
    headerName: "Date of Appointment",
    width: 450,
  },
  {
    field: "service_name",
    headerName: "Service",
    width: 160,
  },
  {
    field: "doctor_name",
    headerName: "Doctor",
    width: 150,
  },
  { field: "status", headerName: "Status", width: 130 },
  { field: "remarks", headerName: "Additional Requests", width: 200 },
];
