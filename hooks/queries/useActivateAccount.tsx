import { activateAccount } from "@/features/auth/api/activateAccount";
import { UpdateResponse } from "@/features/auth/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useActivateAccount = (
  code: string,
  options?: UseQueryOptions<UpdateResponse, AxiosError, string>
) => {
  return useQuery<UpdateResponse, AxiosError, string>(
    ["activateAccount", code],
    () => activateAccount(code),
    options
  );
};

export default useActivateAccount;
