import {
  handleUserResponse,
  LoginCredentialsDTO,
} from "@/features/auth/api/login";
import { AuthUser, UserResponse } from "@/features/auth/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

async function loginFn(data: LoginCredentialsDTO) {
  const response = await axios.post<LoginCredentialsDTO, UserResponse>(
    "/api/login",
    data
  );
  const user = await handleUserResponse(response);
  return user;
}

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const setUser = useCallback(
    (data: AuthUser) => queryClient.setQueryData(["authenticated-user"], data),
    [queryClient]
  );

  return useMutation<AuthUser, AxiosError, LoginCredentialsDTO>(
    (data) => loginFn(data),
    {
      onSuccess: (data) => {
        setUser(data);

        router.push("/");
      },
    }
  );
};
