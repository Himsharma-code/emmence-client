import Axios from "./request";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export const add = async (data: User) => {
  return await Axios.post("/user/add", data);
};
export const getAllUsers = async () => {
  return await Axios.get("/user/all");
};
