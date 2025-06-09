import { TransferatLaResult } from "@/features/formulare/clasificatoare/types";
import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";

const getTransferatLa = async () => {
  const { data } = await axios.get<TransferatLaResult>(
    `/transferat-la`,
    {}
  );
  console.log("🚀 ~ file: useTransferatLa.tsx:7 ~ getTransferatLa ~ data:", data)
  return data;
};

const useTransferatLa = () => {
  return useQuery<TransferatLaResult, Error>(["transferat-la"], () =>
    getTransferatLa()
  );
};

export default useTransferatLa;
