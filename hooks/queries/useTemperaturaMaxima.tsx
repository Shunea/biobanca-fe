import { TemperaturaMaximaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTemperaturaMaxima = async () => {
  const { data } = await axios.get<TemperaturaMaximaResult>(
    `/temperatura/all`,
    {}
  );
  return data;
};

const useTemperaturaMaxima = () => {
  return useQuery<TemperaturaMaximaResult, Error>(["temperatura"], () =>
    getTemperaturaMaxima()
  );
};

export default useTemperaturaMaxima;
