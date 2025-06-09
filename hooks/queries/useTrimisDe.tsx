import { TrimisDeResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTrimisDe = async () => {
  const { data } = await axios.get<TrimisDeResult>(`/trimisde`, {});
  return data;
};

const useTrimisDe = (options?: UseQueryOptions<TrimisDeResult, Error>) => {
  return useQuery<TrimisDeResult, Error>(
    ["trimisde"],
    () => getTrimisDe(),
    options
  );
};

export default useTrimisDe;
