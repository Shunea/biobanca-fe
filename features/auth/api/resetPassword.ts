import { axios } from "lib/axios";

export type ResetPasswordDTO = {
  code: string;
  password: string;
};

export const resetPassword = async (data: ResetPasswordDTO): Promise<void> => {
  return await axios.put(`/user/change-password/${data.code}`, {
    password: data.password,
  });
};
