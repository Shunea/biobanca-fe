import { FormaBoliiResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getFormaBolii = async () => {
  const { data } = await axios.get<FormaBoliiResult>(`/formabolii/all`, {});
  return data;
};

const useFormaBolii = (options?: UseQueryOptions<FormaBoliiResult, Error>) => {
  return useQuery<FormaBoliiResult, Error>(
    ["formabolii"],
    () => getFormaBolii(),
    options
  );
};

export default useFormaBolii;
