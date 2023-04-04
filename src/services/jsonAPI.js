import axios from "axios";
import { API_URL } from "../constants/url";

export const getUsersAPI = () => {
  return axios.get(API_URL.USERS);
};
