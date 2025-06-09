import { GetOnePacientResult } from "@/features/formulare/types";
import { PaginatedRegistruResult } from "@/features/registru/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "lib/axios";

const useDeletePacient = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => axios.delete(`/pacient/${id}`), {
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries(["pacient", deletedId]);
      await queryClient.cancelQueries(["registru"]);

      const previousPacient = queryClient.getQueryData<GetOnePacientResult>([
        "pacient",
        deletedId,
      ]);
      const previousRegistru =
        queryClient.getQueryData<PaginatedRegistruResult>(["registru"]);

      queryClient.setQueryData<GetOnePacientResult>(
        ["pacient", deletedId],
        (old) => {
          if (old) {
            return old;
          }
        }
      );

      queryClient.setQueryData<PaginatedRegistruResult>(["registru"], (old) => {
        if (old) {
          return old;
        }
      });

      return { previousPacient, previousRegistru };
    },
    onError: (_err, deletedId, context: any) => {
      queryClient.setQueryData<GetOnePacientResult>(
        ["pacient", deletedId],
        context.previousPacient
      );
      queryClient.setQueryData<PaginatedRegistruResult>(
        ["registru"],
        context.previousRegistru
      );
    },
    onSettled: (_data, _error, variables: number) => {
      queryClient.invalidateQueries({ queryKey: ["pacient", variables] });
      queryClient.invalidateQueries({ queryKey: ["registru"] });
    },
  });
};

export default useDeletePacient;
