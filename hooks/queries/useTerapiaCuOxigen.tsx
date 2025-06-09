import { TerapiaCuOxigenResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTerapiaCuOxigen = async () => {
  const { data } = await axios.get<TerapiaCuOxigenResult>(
    `/terapiacuoxigen/all`,
    {}
  );
  return data;
};

const useTerapiaCuOxigen = (
  options?: UseQueryOptions<TerapiaCuOxigenResult, Error>
) => {
  return useQuery<TerapiaCuOxigenResult, Error>(
    ["terapiacuoxigen"],
    () => getTerapiaCuOxigen(),
    options
  );
};

export default useTerapiaCuOxigen;
