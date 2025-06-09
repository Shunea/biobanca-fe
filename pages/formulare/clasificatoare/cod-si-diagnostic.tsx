import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { cimxColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  CIMX,
  CIMXColumns,
  CIMXResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useCIMX from "@/hooks/queries/useCIMX";
import React from "react";

interface CimxProps {}

const Cimx: React.FC<CimxProps> = () => {
  const { status, data, error } = useCIMX();
  const createMutation = useCreateEntity<CIMX, CIMXResult>("cimx");
  const updateMutation = useUpdateEntity<CIMX>("cimx");
  const deleteMutation = useDeleteEntity<CIMX, CIMXResult>("cimx");

  let tempData: CIMXColumns[] = [];

  if (data) {
    tempData = data.map((cimx) => {
      const handleDelete = () => {
        deleteMutation.mutate(cimx);
      };

      return {
        ...cimx,
        actiune: (
          <ClasificatorActions<CIMX>
            code
            data={cimx}
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
        <Layout<CIMXColumns>
          code
          columns={cimxColumns}
          data={tempData}
          mutation={createMutation}
          title="Codul si Diagnosticul"
        />
      )}
    </>
  );
};

export default Cimx;
