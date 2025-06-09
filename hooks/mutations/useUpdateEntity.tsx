import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const useUpdateEntity = <T extends { id: number }>(
  queryKey: string
): UseMutationResult<T, AxiosError<unknown, any>, T, unknown> => {
  const queryClient = useQueryClient();

  return useMutation<T, AxiosError, T>(
    (data) => axios.patch(`/${queryKey}/${data.id}`, data),
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
    }
  );
};

export default useUpdateEntity;
