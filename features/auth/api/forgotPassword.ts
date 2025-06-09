import { axios } from "lib/axios";

export const forgotPassword = async (email: string): Promise<void> => {
  return axios.get("/user/forgot-password", {
    params: {
      username: email,
    },
  });
};
