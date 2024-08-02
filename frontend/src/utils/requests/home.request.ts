import { Endpoint } from "../../constants/endpoint";
import { Api } from "../fetch";

export const HomeRequest = async (): Promise<any> => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const response = await Api({
    url: `${BASE_URL}${Endpoint.home}/services`,
    method: "GET",
  });
  return response.services;
};
