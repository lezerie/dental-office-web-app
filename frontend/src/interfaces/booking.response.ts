export interface IScheduleList {
  id: number;
  doctor_id: number;
  schedule_day: string;
  schedule_time: string;
  doctor_name: string;
}

export interface IAppointmentList {
  id: number;
  doctor_id: number;
  schedule_id: number;
  client_id: number;
  service_id: number;
  appointment_date: Date;
  schedule_time: string;
  status: "Completed" | "Booked";
  remarks: string;
  doctor_name: string;
  service_name: string;
  service_value: string;
}

export interface IScheduleResponse {
  schedules: IScheduleList[];
  status: number;
}

export interface IAppointmentResponse {
  appointments: IAppointmentList[];
  status: number;
}
