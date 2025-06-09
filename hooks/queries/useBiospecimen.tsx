import { BiospecimenResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const getBiospecimen = async () => {
  const { data } = await axios.get<BiospecimenResult>(`/biospecimen `, {});
  console.log("🚀 ~ file: useBiospecimen.tsx:10 ~ getBiospecimen ~ data:", data)
  return data;
};

const useBiospecimen = (options?: UseQueryOptions<BiospecimenResult, AxiosError>) => {
  return useQuery<BiospecimenResult, AxiosError>(["Biospecimen"], () => getBiospecimen(), options);
};

export default useBiospecimen;
