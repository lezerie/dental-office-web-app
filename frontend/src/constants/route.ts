import { IRoute } from "../interfaces/route";
import HomeComponent from "../components/home";
import LoginComponent from "../components/login";
import RegisterComponent from "../components/register";
import BookAppointmentComponent from "../components/book-appointment";
import DashboardComponent from "../components/dashboard";

export const RouteList: Array<IRoute> = [
  {
    name: "Home",
    path: "/",
    title: "Home",
    component: HomeComponent,
    protected: false,
  },
  {
    name: "Login",
    path: "/login",
    title: "Login",
    component: LoginComponent,
    protected: false,
  },
  {
    name: "Register",
    path: "/register",
    title: "Register",
    component: RegisterComponent,
    protected: false,
  },
  {
    name: "BookAppointment",
    path: "/book-appointment",
    title: "Book Appointment",
    component: BookAppointmentComponent,
    protected: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    title: "Dashboard",
    component: DashboardComponent,
    protected: true,
  },
];
