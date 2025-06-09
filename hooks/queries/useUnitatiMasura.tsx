import { UnitateMasuraResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getUnitatateMasura = async () => {
  const { data } = await axios.get<UnitateMasuraResult>(
    `/unitati-masura`,
    {}
  );
  console.log(data)
  return data;
};

const useUnitatateMasura = () => {
  return useQuery<UnitateMasuraResult, Error>(["unitati-masura"], () =>
    getUnitatateMasura()
  );
};

export default useUnitatateMasura;
