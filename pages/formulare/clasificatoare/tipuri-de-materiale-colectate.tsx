import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { tipProbaColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
    TipProba,
  TipProbaColumns,
  TipProbaResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useTipProba from "@/hooks/queries/useTipProba";
import React from "react";

interface TipProbaProps {}

const TipProba: React.FC<TipProbaProps> = () => {
  const { status, data, error } = useTipProba();
  const createMutation = useCreateEntity<TipProba, TipProbaResult>("tipProba");
  const updateMutation = useUpdateEntity<TipProba>("tipProba");
  const deleteMutation = useDeleteEntity<TipProba, TipProbaResult>("tipProba");

  let tempData: TipProbaColumns[] = [];

  if (data) {
    tempData = data.map((tipProba) => {
      const handleDelete = () => {
        deleteMutation.mutate(tipProba);
      };

      return {
        ...tipProba,
        actiune: (
          <ClasificatorActions<TipProba>
            code
            data={tipProba}
            mutation={updateMutation}
            handleDelete={handleDelete}
          />
        ),
      };
    });
  }

  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error?.message}</div>
      ) : (
        <Layout<TipProbaColumns>
          code
          columns={tipProbaColumns}
          data={tempData}
          mutation={createMutation}
          title="Anamneza Alergologica"
        />
      )}
    </>
  );
};

export default TipProba;
