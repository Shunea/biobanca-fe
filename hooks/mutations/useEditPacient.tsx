import { ServerPacient } from "@/features/formulare/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const useEditPacient = (id: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation<
    Partial<ServerPacient>,
    AxiosError,
    Partial<ServerPacient>
  >({
    mutationFn: (data) => axios.patch(`/pacient/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["registru"]);
    },
  });
};

export default useEditPacient;
