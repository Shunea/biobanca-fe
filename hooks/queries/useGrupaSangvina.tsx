import { GrupaSangvinaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getGrupaSangvina = async () => {
  const { data } = await axios.get<GrupaSangvinaResult>(
    `/grupa-sangvina`,
    {}
  );
  console.log(data)
  return data;
};

const useGrupaSangvina = () => {
  return useQuery<GrupaSangvinaResult, Error>(["grupa-sangvina"], () =>
    getGrupaSangvina()
  );
};

export default useGrupaSangvina;
