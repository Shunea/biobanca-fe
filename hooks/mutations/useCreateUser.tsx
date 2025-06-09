import { createUser, CreateUserDTO } from "@/features/auth/api/createUser";
import { CurrentUserResponse } from "@/features/auth/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateUser = () => {
  return useMutation<CurrentUserResponse, AxiosError, CreateUserDTO>(
    (data) => createUser(data),
    {}
  );
};
