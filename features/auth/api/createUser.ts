import { axios } from "lib/axios";
import { CurrentUserResponse } from "../types";

export type CreateUserDTO = {
  username: string;
  password?: string;
  imsp: number;
  rol: string;
  active?: boolean;
};

export const createUser = async (
  data: CreateUserDTO
): Promise<CurrentUserResponse> => {
  return axios.post("/user/admin/create-user", data);
};
