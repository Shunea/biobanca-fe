import { StareaLaExternareResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getStareaLaExternare = async () => {
  const { data } = await axios.get<StareaLaExternareResult>(
    `/starealaexternare/all`,
    {}
  );
  return data;
};

const useStareaLaExternare = (
  options?: UseQueryOptions<StareaLaExternareResult, Error>
) => {
  return useQuery<StareaLaExternareResult, Error>(
    ["starealaexternare"],
    () => getStareaLaExternare(),
    options
  );
};

export default useStareaLaExternare;
