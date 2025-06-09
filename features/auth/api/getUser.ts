import storage from "@/utils/storage";
// import { axios } from "lib/axios";
import axios from "axios";
import { CurrentUserResponse } from "../types";

export const getUser = (): Promise<CurrentUserResponse> => {
  return axios.get("/api/user");
  // return axios.get("/auth/user");
};

export async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}
