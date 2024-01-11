/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export const token = localStorage.getItem("token");

export const baseUrl = "https://dummyjson.com/";
export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const LoginUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${baseUrl}auth/login`, data);
    console.log(res);
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.log(error);
  }
};

export const verifyUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}auth/me`, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logoutApi = async () => {
  await localStorage.removeItem("token");
  window.location.reload();
};
