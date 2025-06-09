import { CapacitateaDeMuncaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getCapacitateaDeMunca = async () => {
  const { data } = await axios.get<CapacitateaDeMuncaResult>(
    `/capacitateademunca/all`,
    {}
  );
  return data;
};

const useCapacitateaDeMunca = (
  options?: UseQueryOptions<CapacitateaDeMuncaResult, Error>
) => {
  return useQuery<CapacitateaDeMuncaResult, Error>(
    ["capacitateademunca"],
    () => getCapacitateaDeMunca(),
    options
  );
};

export default useCapacitateaDeMunca;
