import { GetOnePacientResult } from "@/features/formulare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getPacient = async (id: number) => {
  const { data } = await axios.get<GetOnePacientResult>(`/proba/${id}`, {});
  return data;
};

const useGetPacient = (
  id: number,
  options?: UseQueryOptions<GetOnePacientResult, Error>
) => {
  return useQuery<GetOnePacientResult, Error>(
    ["pacient", id],
    () => getPacient(id),
    options
  );
};

export default useGetPacient;
