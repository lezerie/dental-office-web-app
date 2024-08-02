import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeRequest } from "../../../utils/requests/home.request";
import { useAppDispatch } from "../../../states/hook";
import { addServices } from "../../../states/details/services.slice";
import { ServicesList } from "../../../constants/services";
import { useAppSelector } from "../../../states/hook";

export const useHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [services, setServices] = useState<any[]>(ServicesList);
  const storedToken: string = useAppSelector((state) => state.Token.token);
  console.log("HOME CHECK", storedToken);
  const handleClickBooking = () => {
    navigate("/book-appointment");
  };

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        const response = await HomeRequest();

        if (!response) {
          setServices(ServicesList);
          dispatch(addServices(ServicesList));
        } else {
          setServices(response);
          dispatch(addServices(response));
        }
      } catch (error) {
        setServices(ServicesList);
        dispatch(addServices(ServicesList));
      }
    };

    if (!services && services.length == 0) {
      fetchDataFromDatabase();
    }
  }, []);

  return {
    handleClickBooking,
    services,
  };
};
