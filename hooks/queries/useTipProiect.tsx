import { TipProiectResult} from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTipProiect = async () => {
  const { data } = await axios.get<TipProiectResult>(
    `/projects`,
    {}
  );
  console.log( data)
  return data;
};

const useTipProiect = () => {
  return useQuery<TipProiectResult, Error>(["projects"], () =>
    getTipProiect()
  );
};

export default useTipProiect;
