import { TratamentulAdministratResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTratamentulAdministrat = async () => {
  const { data } = await axios.get<TratamentulAdministratResult>(
    `/tratamentadministrat/all`,
    {}
  );
  return data;
};

const useTratamentulAdministrat = (
  options?: UseQueryOptions<TratamentulAdministratResult, Error>
) => {
  return useQuery<TratamentulAdministratResult, Error>(
    ["tratamentadministrat"],
    () => getTratamentulAdministrat(),
    options
  );
};

export default useTratamentulAdministrat;
