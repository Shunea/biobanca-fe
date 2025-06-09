import {
  updateAccount,
  UpdateUserDTO,
} from "@/features/auth/api/updateAccount";
import { UpdateResponse } from "@/features/auth/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useUpdateAccount = () => {
  return useMutation<UpdateResponse, AxiosError, UpdateUserDTO>((data) =>
    updateAccount(data)
  );
};
