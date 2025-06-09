import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IMSPResult } from "@/features/formulare/clasificatoare/types";
import { axios } from "lib/axios";

const getIMSPs = async () => {
  const { data } = await axios.get<IMSPResult>(`/imsp`, {});
  return data;
};

const useIMSP = (options?: UseQueryOptions<IMSPResult, Error>) => {
  return useQuery<IMSPResult, Error>(["imsp"], () => getIMSPs(), options);
};

export default useIMSP;
