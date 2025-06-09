import { Pacient } from "@/features/formulare/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const useCreatePacient = () => {
  const queryClient = useQueryClient();

  return useMutation<Pacient, AxiosError, Pacient>(
    (data) => axios.post(`/proba`, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["registru"] });
      },
    }
  );
};

export default useCreatePacient;
