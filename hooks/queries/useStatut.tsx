import { StatutResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getStatut = async () => {
  const { data } = await axios.get<StatutResult>(`/statut`, {});
  return data;
};

const useStatut = (options?: UseQueryOptions<StatutResult, Error>) => {
  return useQuery<StatutResult, Error>(["statut"], () => getStatut(), options);
};

export default useStatut;
