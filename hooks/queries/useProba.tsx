import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { PaginatedRegistruResult } from "@/features/registru/types";
import { Filter } from "@/stores/filter";
import { transformFilter } from "@/features/filtrare/transformFilter";
import { axios } from "lib/axios";

const getProba = async (
  // limit: number = 15,
  // page: number,
  // filter: Filter
) => {
  // const finalFilter = transformFilter(filter);

  const { data } = await axios.get<PaginatedRegistruResult>(
    "/proba",
    {
      // params: {
      //   limit,
      //   page,
      //   filter: finalFilter,
      // },
    }
  );
  console.log(data)
  return data;
};

const useProba = (
  // limit: number,
  // page: number,
  // filter: Filter,
  options?: UseQueryOptions<PaginatedRegistruResult, Error>
) => {
  return useQuery<PaginatedRegistruResult, Error>(
    // ["proba", limit, page, filter],
    ["proba"],
    // () => getProba(limit, page, filter),
    () => getProba(),
     options
    // {
    //   ...options,
    //   keepPreviousData: true,
    // }
  );
};

export default useProba;
