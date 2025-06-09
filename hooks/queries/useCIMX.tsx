import { CIMXResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const getCIMX = async () => {
  const { data } = await axios.get<CIMXResult>(`/cimx`, {});
  return data;
};

const useCIMX = (options?: UseQueryOptions<CIMXResult, AxiosError>) => {
  return useQuery<CIMXResult, AxiosError>(["cimx"], () => getCIMX(), options);
};

export default useCIMX;
