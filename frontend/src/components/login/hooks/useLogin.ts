import { useNavigate } from "react-router-dom";
import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import { EmailRegex } from "../../../constants/regex-validations";
import { useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";
import { addAppointment } from "../../../states/details/appointment.slice";
import { AuthRequest } from "../../../utils/requests/auth.request";
import { UserRequest } from "../../../utils/requests/user.request";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [hasCompleteValidInput, setHasCompleteValidInput] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (
      inputEmail.length !== 0 &&
      inputPassword.length !== 0 &&
      EmailRegex.test(inputEmail)
    ) {
      setHasCompleteValidInput(true);
    } else {
      setHasCompleteValidInput(false);
    }
  }, [inputEmail, inputPassword]);

  const handleClickLogin = async () => {
    setIsLoading(true);
    const response = await AuthRequest({
      process: "login",
      email: inputEmail,
      password: inputPassword,
    });

    if (response.status === 200 || response.status === 201) {
      console.log("USER", response.token);
      dispatch(addUser(response.user));
      dispatch(addToken(response.token));
      // const appointmentList = await UserRequest({
      //   method: "GET",
      //   id: response.user.id,
      //   token: response.token,
      // });
      //   id: response.user.id,
      const appointmentList = await handleFetchAppointmentList(
        response.user.id,
        response.token
      );
      console.log("TEST", appointmentList);
      if (appointmentList.status == 200) {
        // for (let i = 0; i < appointmentList.appointments.length; i++) {
        //   appointmentList.appointments[i]["id"] = i;
        //   appointmentList.appointments[i]["appointment_date"] = new Date(
        //     appointmentList.appointments[i]["appointment_date"]
        //   );
        // }

        dispatch(addAppointment(appointmentList.appointments));
        setIsLoading(false);
        navigate("/");
      }
    } else {
      setIsLoading(false);
      setErrorMessage(response.message);
    }
  };

  const handleFetchAppointmentList = async (id, token) => {
    const appointmentList = await UserRequest({
      method: "GET",
      id: id,
      token: token,
    });
    if (appointmentList.status == 200) {
      for (let i = 0; i < appointmentList.appointments.length; i++) {
        appointmentList.appointments[i]["id"] = i;
        appointmentList.appointments[i]["appointment_date"] = new Date(
          appointmentList.appointments[i]["appointment_date"]
        );
      }
    }

    console.log("appointmetn list await", {
      status: appointmentList.status,
      appointments: appointmentList.appointments,
    });
    return {
      status: appointmentList.status,
      appointments: appointmentList.appointments,
    };
  };

  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  return {
    isLoading,
    inputEmail,
    inputPassword,
    hasCompleteValidInput,
    handleChangeInputEmail,
    handleChangeInputPassword,
    handleClickLogin,
    errorMessage,
    handleFetchAppointmentList,
  };
};
