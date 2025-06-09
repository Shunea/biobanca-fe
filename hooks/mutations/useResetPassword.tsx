import {
  resetPassword,
  ResetPasswordDTO,
} from "@/features/auth/api/resetPassword";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation<void, AxiosError, ResetPasswordDTO>(
    (data) => resetPassword(data),
    {
      onSuccess: () => {
        router.push("/login");
      },
    }
  );
};
