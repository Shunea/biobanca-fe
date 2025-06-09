import { axios } from "lib/axios";
import { UpdateResponse } from "../types";

export const activateAccount = async (
  code: string
): Promise<UpdateResponse> => {
  return axios.get(`/user/activate-account/${code}`);
};
