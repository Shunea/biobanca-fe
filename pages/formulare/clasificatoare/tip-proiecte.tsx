import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { tipProiectColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  TipProiect,
  TipProiectColumns,
  TipProiectResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useTipProiect from "@/hooks/queries/useTipProiect";
import React from "react";

interface TipProiectProps {}

const TipProiect: React.FC<TipProiectProps> = () => {
  const { status, data, error } = useTipProiect();
  const createMutation = useCreateEntity<TipProiect, TipProiectResult>(
    "projects"
  );
  const updateMutation = useUpdateEntity<TipProiect>("projects");
  const deleteMutation = useDeleteEntity<TipProiect, TipProiectResult>(
    "projects"
  );

  let tempData: TipProiectColumns[] = [];

  if (data) {
    tempData = data.map((tipProiect) => {
      const handleDelete = () => {
        deleteMutation.mutate(tipProiect);
      };

      return {
        ...tipProiect,
        actiune: (
          <ClasificatorActions<TipProiect>
            data={tipProiect}
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
        <Layout<TipProiectColumns>
          columns={tipProiectColumns}
          data={tempData}
          mutation={createMutation}
          title="Tip proiect"
        />
      )}
    </>
  );
};

export default TipProiect;
