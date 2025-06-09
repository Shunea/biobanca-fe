import { logoutFn } from "@/features/auth/api/logout";
import { usePacientStore } from "@/stores/pacient";
import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useLogout = (options?: UseQueryOptions<null, AxiosError>) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const reset = usePacientStore((state) => state.reset);

  return useQuery<null, AxiosError>(["logout"], () => logoutFn(), {
    ...options,
    onSuccess: () => {
      queryClient.removeQueries(["authenticated-user"], { exact: true });
      router.push("/login");
      reset();
    },
  });
};

export default useLogout;
