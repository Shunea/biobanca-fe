import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { raionColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  Raion,
  RaionColumns,
  RaionResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useRaion from "@/hooks/queries/useRaion";
import React from "react";

interface RaionProps {}

const Raion: React.FC<RaionProps> = () => {
  const { status, data, error } = useRaion();
  const createMutation = useCreateEntity<Raion, RaionResult>("raion");
  const updateMutation = useUpdateEntity<Raion>("raion");
  const deleteMutation = useDeleteEntity<Raion, RaionResult>("raion");

  let tempData: RaionColumns[] = [];
  if (data) {
    tempData = data?.map((raion) => {
      const handleDelete = () => {
        deleteMutation.mutate(raion);
      };
      return {
        ...raion,
        actiune: (
          <ClasificatorActions<Raion>
            data={raion}
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
        <Layout<RaionColumns>
          columns={raionColumns}
          data={tempData}
          mutation={createMutation}
          title="Raion"
        />
      )}
    </>
  );
};

export default Raion;
