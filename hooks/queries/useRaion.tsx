import { RaionResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getRaion = async () => {
  const { data } = await axios.get<RaionResult>(`/raion`, {});
  console.log(data)
  return data;
};

const useRaion = (options?: UseQueryOptions<RaionResult, Error>) => {
  return useQuery<RaionResult, Error>(["raion"], () => getRaion(), options);
};

export default useRaion;
