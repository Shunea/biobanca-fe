import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm2 from "@/features/formulare/components/PacientForm2";

interface FormularPacientEditeaza2Props {}

const FormularPacientEditeaza2: React.FC<
  FormularPacientEditeaza2Props
> = ({}) => {
  return (
    <FormContainer mode="edit" page={2}>
      <PacientForm2 mode="edit" />
    </FormContainer>
  );
};

export default FormularPacientEditeaza2;
