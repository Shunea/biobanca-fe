import { loadUser } from "@/features/auth/api/getUser";
import { CurrentUserResponse } from "@/features/auth/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useUser = (
  options?: UseQueryOptions<CurrentUserResponse | null, AxiosError>
) => {
  return useQuery<CurrentUserResponse | null, AxiosError>(
    ["authenticated-user"],
    () => loadUser(),
    {
      ...options,
      refetchOnWindowFocus: false,
    }
  );
};

export default useUser;
