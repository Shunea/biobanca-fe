import { transformFilter } from "@/features/filtrare/transformFilter";
import { GetDynamicStatisticResult } from "@/features/statistica/types";
import { Filter } from "@/stores/filter";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getPacients = async (filter: Filter) => {
  const finalFilter = transformFilter(filter);

  const { data } = await axios.get<GetDynamicStatisticResult>(
    `/pacient/dynamic-statistic`,
    {
      params: {
        filter: finalFilter,
      },
    }
  );

  return data;
};

const usePacientsFilteredByField = (
  filter: Filter,
  options?: UseQueryOptions<GetDynamicStatisticResult, Error>
) => {
  return useQuery<GetDynamicStatisticResult, Error>(
    ["pacients-filtered", filter],
    () => getPacients(filter),
    options
  );
};

export default usePacientsFilteredByField;
