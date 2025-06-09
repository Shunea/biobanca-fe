import { forgotPassword } from "@/features/auth/api/forgotPassword";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useForgotPassword = (
  email: string,
  options?: UseQueryOptions<void, AxiosError, string>
) => {
  const router = useRouter();

  return useQuery<void, AxiosError, string>(
    ["forgot-password"],
    () => forgotPassword(email),
    {
      ...options,
      onSuccess: () => {
        router.push("/login");
      },
    }
  );
};

export default useForgotPassword;
