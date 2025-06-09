import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { grupaSangvinaColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  GrupaSangvina,
  GrupaSangvinaColumns,
  GrupaSangvinaResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useGrupaSangvina from "@/hooks/queries/useGrupaSangvina";
import React from "react";

interface GrupaSangvinaProps {}

const GrupaSangvina: React.FC<GrupaSangvinaProps> = () => {
  const { status, data, error } = useGrupaSangvina();
  const createMutation = useCreateEntity<GrupaSangvina, GrupaSangvinaResult>(
    "grupa-sangvina"
  );
  const updateMutation = useUpdateEntity<GrupaSangvina>("grupa-sangvina");
  const deleteMutation = useDeleteEntity<GrupaSangvina, GrupaSangvinaResult>(
    "grupa-sangvina"
  );

  let tempData: GrupaSangvinaColumns[] = [];

  if (data) {
    tempData = data?.data.result[0].map((grupaSangvina) => {
      const handleDelete = () => {
        deleteMutation.mutate(grupaSangvina);
      };

      return {
        ...grupaSangvina,
        actiune: (
          <ClasificatorActions<GrupaSangvina>
            data={grupaSangvina}
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
        <Layout<GrupaSangvinaColumns>
          columns={grupaSangvinaColumns}
          data={tempData}
          mutation={createMutation}
          title="Grupa Sangvina"
        />
      )}
    </>
  );
};

export default GrupaSangvina;
