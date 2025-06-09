import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";
import { Meta } from "types";

const useDeleteMany = <
  D extends { ids: number[] },
  R extends {
    meta: Meta;
    data: {
      result: [{ id: number }[], number];
    };
  }
>(
  queryKey: string
) => {
  const queryClient = useQueryClient();

  return useMutation<R, AxiosError, D>(
    (data) => axios.patch(`/${queryKey}/deleteMany`, data),
    {
      onMutate: async (deletedIds) => {
        await queryClient.cancelQueries([queryKey]);

        const previousData = queryClient.getQueryData([queryKey]);

        queryClient.setQueryData<R>([queryKey], (old) => {
          if (old) {
            const newResult = old?.data.result[0].filter(
              (current) => !deletedIds.ids.includes(current.id)
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
      onError: (_err, _deletedIds, context: any) => {
        queryClient.setQueryData<R>([queryKey], context.previousData);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
    }
  );
};

export default useDeleteMany;
