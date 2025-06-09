import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { cormColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  Corm,
  CormColumns,
  CormResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useCorm from "@/hooks/queries/useCorm";
import React from "react";

interface CormProps {}

const Corm: React.FC<CormProps> = () => {
  const { status, data, error } = useCorm();
  const createMutation = useCreateEntity<Corm, CormResult>("corm");
  const updateMutation = useUpdateEntity<Corm>("corm");
  const deleteMutation = useDeleteEntity<Corm, CormResult>("corm");

  let tempData: CormColumns[] = [];

  if (data) {
    tempData = data.data.result[0].map((corm) => {
      const handleDelete = () => {
        deleteMutation.mutate(corm);
      };

      return {
        ...corm,
        actiune: (
          <ClasificatorActions<Corm>
            code
            data={corm}
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
        <Layout<CormColumns>
          code
          columns={cormColumns}
          data={tempData}
          mutation={createMutation}
          title="Corm"
        />
      )}
    </>
  );
};

export default Corm;
