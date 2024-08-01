import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  services: [
    {
      id: 1,
      name: "Teeth Whitening",
      value: "teethWhitening",
      description:
        "Brighten your smile with our professional teeth whitening services. Safe, effective, and long-lasting results.",
      image_src: "whitening.png",
    },
    {
      id: 2,
      name: "Dental Checkup",
      value: "dentalCheckup",
      description:
        "Routine checkups to ensure your oral health is in top condition. Includes cleaning, examination, and x-rays.",
      image_src: "checkup.png",
    },
    {
      id: 3,
      name: "Orthodontics",
      value: "orthodontics",
      description:
        "Straighten your teeth with our advanced orthodontic treatments. We offer traditional braces and clear aligners.",
      image_src: "ortho.png",
    },
  ],
};

const ServicesSlice = createSlice({
  name: "SERVICES",
  initialState,
  reducers: {
    addServices: (state, action: PayloadAction<any[]>) => {
      state.services = action.payload;
    },
  },
});

export const Services = ServicesSlice.reducer;
export const { addServices } = ServicesSlice.actions;
