import storage from "@/utils/storage";
import { axios } from "lib/axios";
import { UserResponse } from "../types";

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("/auth/login", data);
};

export async function handleUserResponse(response: UserResponse) {
  const { access_token, user } = response.data;
  storage.setToken(access_token);
  return user;
}
