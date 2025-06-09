import { CormResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getCorm = async () => {
  const { data } = await axios.get<CormResult>(`/corm`, {});
  return data;
};

const useCorm = () => {
  return useQuery<CormResult, Error>(["corm"], () => getCorm());
};

export default useCorm;
