import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { statutColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  Statut,
  StatutColumns,
  StatutResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useStatut from "@/hooks/queries/useStatut";

interface StatutulProps {}

const Statutul: React.FC<StatutulProps> = () => {
  const { status, data, error } = useStatut();
  const createMutation = useCreateEntity<Statut, StatutResult>("statut");
  const updateMutation = useUpdateEntity<StatutColumns>("statut");
  const deleteMutation = useDeleteEntity<Statut, StatutResult>("statut");

  let tempData: StatutColumns[] = [];

  if (data) {
    tempData = data.map((statut) => {
      const handleDelete = () => {
        deleteMutation.mutate(statut);
      };

      return {
        ...statut,
        actiune: (
          <ClasificatorActions<Statut>
            data={statut}
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
        <Layout<StatutColumns>
          columns={statutColumns}
          data={tempData}
          mutation={createMutation}
          title="Statutul"
        />
      )}
    </>
  );
};

export default Statutul;
