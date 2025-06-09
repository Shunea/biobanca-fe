import { BoliResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const getBoli = async () => {
  const { data } = await axios.get<BoliResult>(`/boli `, {});
  console.log("🚀 ~ file: useBoli.tsx:10 ~ getBoli ~ data:", data)
  return data;
};

const useBoli = (options?: UseQueryOptions<BoliResult, AxiosError>) => {
  return useQuery<BoliResult, AxiosError>(["Boli"], () => getBoli(), options);
};

export default useBoli;
