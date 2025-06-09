import { AnamnezaAlergologicaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const getCIMX = async () => {
  const { data } = await axios.get<AnamnezaAlergologicaResult>(`/anamneza-alergologica `, {});
  console.log("🚀 ~ file: useAnamnezaAlergologica.tsx:9 ~ getCIMX ~ data:", data)
  return data;
};

const useCIMX = (options?: UseQueryOptions<AnamnezaAlergologicaResult, AxiosError>) => {
  return useQuery<AnamnezaAlergologicaResult, AxiosError>(["anamnezaAlergologica"], () => getCIMX(), options);
};

export default useCIMX;
