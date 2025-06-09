import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { trimisDeColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  TrimisDe,
  TrimisDeColumns,
  TrimisDeResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useTrimisDe from "@/hooks/queries/useTrimisDe";
import React from "react";

interface TrimisDeProps {}

const TrimisDe: React.FC<TrimisDeProps> = () => {
  const { status, data, error } = useTrimisDe();
  const createMutation = useCreateEntity<TrimisDe, TrimisDeResult>("trimisde");
  const updateMutation = useUpdateEntity<TrimisDeColumns>("trimisde");
  const deleteMutation = useDeleteEntity<TrimisDe, TrimisDeResult>("trimisde");

  let tempData: TrimisDeColumns[] = [];

  if (data) {
    tempData = data.map((trimisDe) => {
      const handleDelete = () => {
        deleteMutation.mutate(trimisDe);
      };

      return {
        ...trimisDe,
        actiune: (
          <ClasificatorActions<TrimisDe>
            data={trimisDe}
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
        <Layout<TrimisDeColumns>
          columns={trimisDeColumns}
          data={tempData}
          mutation={createMutation}
          title="Trimis De"
        />
      )}
    </>
  );
};

export default TrimisDe;
