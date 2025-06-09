import { TipulInternariiResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTipulInternarii = async () => {
  const { data } = await axios.get<TipulInternariiResult>(
    `/tipul-internarii/all`,
    {}
  );
  return data;
};

const useTipulInternarii = () => {
  return useQuery<TipulInternariiResult, Error>(["tipul-internarii"], () =>
    getTipulInternarii()
  );
};

export default useTipulInternarii;
