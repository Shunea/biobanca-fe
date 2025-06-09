import { TipProbaResult} from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTipProba = async () => {
  const { data } = await axios.get<TipProbaResult>(
    `/tip-proba`,
    {}
  );
  console.log( data)
  return data;
};

const useTipProba = () => {
  return useQuery<TipProbaResult, Error>(["tip-proba"], () =>
    getTipProba()
  );
};

export default useTipProba;
