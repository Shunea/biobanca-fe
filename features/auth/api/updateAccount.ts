import { axios } from "lib/axios";
import { UpdateResponse } from "../types";

export type UpdateUserDTO = {
  id: string;
  name?: string;
  lastname?: string;
  username?: string;
  phone?: string;
  active: boolean;
  rol?: string;
  imsp?: number;
  password?: string;
  oldPassword?: string;
};

export const updateAccount = async (
  data: UpdateUserDTO
): Promise<UpdateResponse> => {
  return axios.put("/user/update-account", data);
};
