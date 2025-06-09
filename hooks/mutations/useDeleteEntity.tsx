import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";
import { Meta } from "types";

const useDeleteEntity = <
  T extends { id: number },
  R extends {
    meta: Meta;
    data: {
      result: [T[], number];
    };
  }
>(
  queryKey: string
) => {
  const queryClient = useQueryClient();

  return useMutation<T, AxiosError, T>(
    (data) => axios.delete(`/${queryKey}/${data.id}`),
    {
      onMutate: async (deletedObj) => {
        await queryClient.cancelQueries([queryKey]);

        const previousData = queryClient.getQueryData([queryKey]);

        queryClient.setQueryData<R>([queryKey], (old) => {
          if (old) {
            const newResult = old?.data.result[0].filter(
              (current) => current.id !== deletedObj.id
            );
            return {
              ...old,
              data: {
                result: [newResult, newResult?.length],
              },
            };
          }
        });

        return { previousData };
      },
      onError: (_err, _deletedObj, context: any) => {
        queryClient.setQueryData<R>([queryKey], context.previousData);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
    }
  );
};

export default useDeleteEntity;
