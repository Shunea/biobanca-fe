import { GetPacientsResult } from "@/features/formulare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getPacients = async () => {
  const { data } = await axios.get<GetPacientsResult>(`/proba`, {});
  console.log(data)
  return data;
};

const useGetPacients = (
  options?: UseQueryOptions<GetPacientsResult, Error>
) => {
  return useQuery<GetPacientsResult, Error>(
    ["proba"],
    () => getPacients(),
    options
  );
};

export default useGetPacients;
