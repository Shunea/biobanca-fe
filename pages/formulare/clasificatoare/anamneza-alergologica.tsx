import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { anamnezaAlergologicaColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
    AnamnezaAlergologica,
  AnamnezaAlergologicaColumns,
  AnamnezaAlergologicaResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useAnamnezaAlergologica from "@/hooks/queries/useAnamnezaAlergologica";
import React from "react";

interface AnamnezaAlergologicaProps {}

const AnamnezaAlergologica: React.FC<AnamnezaAlergologicaProps> = () => {
  const { status, data, error } = useAnamnezaAlergologica();
  const createMutation = useCreateEntity<AnamnezaAlergologica, AnamnezaAlergologicaResult>("anamnezaAlergologica");
  const updateMutation = useUpdateEntity<AnamnezaAlergologica>("anamnezaAlergologica");
  const deleteMutation = useDeleteEntity<AnamnezaAlergologica, AnamnezaAlergologicaResult>("anamnezaAlergologica");

  let tempData: AnamnezaAlergologicaColumns[] = [];

  if (data) {
    tempData = data.map((anamnezaAlergologica) => {
      const handleDelete = () => {
        deleteMutation.mutate(anamnezaAlergologica);
      };

      return {
        ...anamnezaAlergologica,
        actiune: (
          <ClasificatorActions<AnamnezaAlergologica>
            code
            data={anamnezaAlergologica}
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
        <Layout<AnamnezaAlergologicaColumns>
          code
          columns={anamnezaAlergologicaColumns}
          data={tempData}
          mutation={createMutation}
          title="Anamneza Alergologica"
        />
      )}
    </>
  );
};

export default AnamnezaAlergologica;
