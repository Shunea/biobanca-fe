import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { imspColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  IMSP,
  IMSPColumns,
  IMSPResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useIMSP from "@/hooks/queries/useIMSP";
import React from "react";

interface IMSPProps {}

const IMSP: React.FC<IMSPProps> = () => {
  const { status, data, error } = useIMSP();
  const createMutation = useCreateEntity<IMSP, IMSPResult>("imsp");
  const updateMutation = useUpdateEntity<IMSP>("imsp");
  const deleteMutation = useDeleteEntity<IMSP, IMSPResult>("imsp");

  let tempData: IMSPColumns[] = [];

  if (data) {
    tempData = data.map((imsp) => {
      console.log(tempData)
      const handleDelete = () => {
        deleteMutation.mutate(imsp);
      };

      return {
        ...imsp,
        actiune: (
          <ClasificatorActions<IMSP>
            code
            data={imsp}
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
        <Layout<IMSPColumns>
          code
          columns={imspColumns}
          data={tempData}
          mutation={createMutation}
          title="IMSP"
        />
      )}
    </>
  );
};

export default IMSP;
