import { useQuery } from "@tanstack/react-query";
import { Meta } from "types";
import { axios } from "lib/axios";

type PacientWithField = {
  id: number;
  [key: string]: string | number;
};

type PacientWithFieldResult = {
  meta: Meta;
  data: {
    result: PacientWithField[];
  };
};

const getPacientsByField = async (field: string) => {
  const { data } = await axios.get<PacientWithFieldResult>(
    `/proba/${field}`,
    {}
  );
  return data;
};

const usePacientsByField = (field: string) => {
  return useQuery<PacientWithFieldResult, Error>(
    ["pacient", field],
    () => getPacientsByField(field),
    {}
  );
};

export default usePacientsByField;
