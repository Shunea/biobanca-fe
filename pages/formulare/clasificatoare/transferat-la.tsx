import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { transferatLaColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  TransferatLa,
  TransferatLaColumns,
  TransferatLaResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useTransferatLa from "@/hooks/queries/useTransferatLa";
import React from "react";

interface TransferatLaProps {}

const TransferatLa: React.FC<TransferatLaProps> = () => {
  const { status, data, error } = useTransferatLa();
  const createMutation = useCreateEntity<TransferatLa, TransferatLaResult>(
    "transferat-la"
  );
  const updateMutation = useUpdateEntity<TransferatLa>("transferat-la");
  const deleteMutation = useDeleteEntity<TransferatLa, TransferatLaResult>(
    "transferat-la"
  );

  let tempData: TransferatLaColumns[] = [];

  if (data) {
    tempData = data?.data.result[0].map((transferatLa) => {
      const handleDelete = () => {
        deleteMutation.mutate(transferatLa);
      };

      return {
        ...transferatLa,
        actiune: (
          <ClasificatorActions<TransferatLa>
            data={transferatLa}
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
        <Layout<TransferatLaColumns>
          columns={transferatLaColumns}
          data={tempData}
          mutation={createMutation}
          title="Transferat La"
        />
      )}
    </>
  );
};

export default TransferatLa;
