import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Pages } from "../../../constants/pages";
import { useAppSelector, useAppDispatch } from "../../../states/hook";
import { addUser } from "../../../states/details/user.slice";
import { addToken } from "../../../states/details/token.slice";

export const useNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [displayedText, setDisplayedText] = useState<string>("Login");
  const storedUser: any = useAppSelector((state) => state.User.user);
  console.log("NAVBAR CHECK", storedUser);
  const handleClickHome = (page: any) => {
    setSelectedPage(page.name);
    navigate(page.route);
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickLogout = () => {
    dispatch(addUser({}));
    dispatch(addToken(""));
    navigate("/login");
  };

  const handleClickUser = () => {
    navigate("/dashboard");
  };
  return {
    Pages,
    storedUser,
    displayedText,
    selectedPage,
    handleClickHome,
    handleClickLogin,
    handleClickLogout,
    handleClickUser,
  };
};
