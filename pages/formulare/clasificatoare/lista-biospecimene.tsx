import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { biospecimenColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
    Biospecimen,
  BiospecimenColumns,
  BiospecimenResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useBiospecimen from "@/hooks/queries/useBiospecimen";
import React from "react";

interface BiospecimenProps {}

const Biospecimen: React.FC<BiospecimenProps> = () => {
  const { status, data, error } = useBiospecimen();
  const createMutation = useCreateEntity<Biospecimen, BiospecimenResult>("biospecimen");
  const updateMutation = useUpdateEntity<Biospecimen>("biospecimen");
  const deleteMutation = useDeleteEntity<Biospecimen, BiospecimenResult>("biospecimen");

  let tempData: BiospecimenColumns[] = [];

  if (data) {
    tempData = data.map((biospecimen) => {
      const handleDelete = () => {
        deleteMutation.mutate(biospecimen);
      };

      return {
        ...biospecimen,
        actiune: (
          <ClasificatorActions<Biospecimen>
            code
            data={biospecimen}
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
        <Layout<BiospecimenColumns>
          code
          columns={biospecimenColumns}
          data={tempData}
          mutation={createMutation}
          title="Lista biospecimenelor"
        />
      )}
    </>
  );
};

export default Biospecimen;
