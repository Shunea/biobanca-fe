import { TipulExternariiResult } from "@/features/formulare/clasificatoare/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTipulExternarii = async () => {
  const { data } = await axios.get<TipulExternariiResult>(
    `/tipulexternarii/all`,
    {}
  );
  return data;
};

const useTipulExternarii = (
  options?: UseQueryOptions<TipulExternariiResult, Error>
) => {
  return useQuery<TipulExternariiResult, Error>(
    ["tipulexternarii"],
    () => getTipulExternarii(),
    options
  );
};

export default useTipulExternarii;
