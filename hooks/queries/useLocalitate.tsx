import { LocalitateResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getLocalitati = async () => {
  const { data } = await axios.get<LocalitateResult>(`/localitate`, {});
  console.log(data)
  return data;
};

const useLocalitate = (options?: UseQueryOptions<LocalitateResult, Error>) => {
  return useQuery<LocalitateResult, Error>(
    ["localitate"],
    () => getLocalitati(),
    options
  );
};

export default useLocalitate;
