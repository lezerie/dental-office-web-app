import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { EmailRegex } from "../../../constants/regex-validations";
import { AuthRequest } from "../../../utils/requests/auth.request";
import { useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";

export const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputFullName, setInputFullName] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [hasCompleteValidInput, setHasCompleteValidInput] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChangeInputFullName = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("FULLNAME", e.target.value);
    setInputFullName(e.target.value);
  };

  const handleChangeInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPhone(e.target.value);
  };

  const handleChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  const handleClickCreateAccount = async () => {
    setIsLoading(true);
    const response = await AuthRequest({
      process: "register",
      full_name: inputFullName,
      phone: inputPhone,
      email: inputEmail,
      password: inputPassword,
    });

    setIsLoading(false);
    if (response.status === 200 || response.status === 201) {
      dispatch(addUser(response.user));
      dispatch(addToken(response.token));
      console.log("Navigate to dashboard from register");
      navigate("/");
    } else {
      console.log("ERROR", response);
      setErrorMessage(response.message);
    }
  };

  useEffect(() => {
    if (
      inputEmail.length !== 0 &&
      inputPassword.length !== 0 &&
      inputFullName.length !== 0 &&
      inputPhone.length !== 0 &&
      EmailRegex.test(inputEmail)
    ) {
      setHasCompleteValidInput(true);
    } else {
      setHasCompleteValidInput(false);
    }
  }, [inputEmail, inputPassword, inputFullName, inputPhone]);
  return {
    EmailRegex,
    isLoading,
    inputFullName,
    handleChangeInputFullName,
    inputPhone,
    handleChangeInputPhone,
    inputEmail,
    handleChangeInputEmail,
    inputPassword,
    handleChangeInputPassword,
    hasCompleteValidInput,
    handleClickCreateAccount,
    errorMessage,
  };
};
