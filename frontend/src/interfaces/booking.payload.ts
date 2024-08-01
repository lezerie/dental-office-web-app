export interface IBookingAppointmentData {
  schedule_id?: number;
  service_id?: number;
  remarks?: string;
  client_id?: number;
  appointment_date: string;
}

export interface IBookingAppointmentPayload {
  method: "GET" | "POST";
  process: "appointments" | "schedules";
  doctor_fullname: string;
  appointment_date: string;
  data?: IBookingAppointmentData;
  token?: string;
  id?: number;
  client_id?: number;
  authorization?: string;
  headers?: any;
}

export interface IBookingSchedulePayload {
  method: "GET" | "POST";
  process: "appointments" | "schedules";
  schedule_day: string;
}
