import { SectiaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axios } from "lib/axios";

const getSectia = async () => {
  const { data } = await axios.get<SectiaResult>("/sectia", {});
  return data;
};

const useSectia = (options?: UseQueryOptions<SectiaResult, AxiosError>) => {
  return useQuery<SectiaResult, AxiosError>(
    ["sectia"],
    () => getSectia(),
    options
  );
};

export default useSectia;
