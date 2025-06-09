import ClasificatorActions from "@/features/formulare/clasificatoare/ClasificatorActions";
import { sectiaColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import {
  Sectia,
  SectiaColumns,
  SectiaResult,
} from "@/features/formulare/clasificatoare/types";
import useCreateEntity from "@/hooks/mutations/useCreateEntity";
import useDeleteEntity from "@/hooks/mutations/useDeleteEntity";
import useUpdateEntity from "@/hooks/mutations/useUpdateEntity";
import useSectia from "@/hooks/queries/useSectia";
import useUser from "@/hooks/queries/useUser";

interface SectiaProps {}

const Sectia: React.FC<SectiaProps> = () => {
  const { data: response } = useUser();
  const { status, data, error } = useSectia();
  const createMutation = useCreateEntity<Sectia, SectiaResult>("sectia");
  const updateMutation = useUpdateEntity<Sectia>("sectia");
  const deleteMutation = useDeleteEntity<Sectia, SectiaResult>("sectia");

  let tempData: SectiaColumns[] = [];

  if (data) {
    tempData = data.data.result[0].map((sectie) => {
      const handleDelete = () => {
        deleteMutation.mutate(sectie);
      };

      return {
        ...sectie,
        actiune: (
          <ClasificatorActions<Sectia>
            data={sectie}
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
        <Layout<SectiaColumns>
          columns={sectiaColumns}
          data={tempData}
          mutation={createMutation}
          title="Sectia"
          onSubmit={(values) => {
            if (response) {
              createMutation.mutate({
                ...values,
                imsp_id: response.data.imsp.id,
              });
            }
          }}
        />
      )}
    </>
  );
};

export default Sectia;
