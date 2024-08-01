export interface IAuthPayload {
  process: "login" | "register";
  email: string;
  password: string;
  fullname?: string;
  phone?: string;
}
