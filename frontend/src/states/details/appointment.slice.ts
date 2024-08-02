import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  appointment: [{}],
};

const AppointmentSlice = createSlice({
  name: "APPOINTMENT",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<any[]>) => {
      state.appointment = action.payload;
    },
  },
});

export const Appointment = AppointmentSlice.reducer;
export const { addAppointment } = AppointmentSlice.actions;
