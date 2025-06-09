import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm1 from "@/features/formulare/components/PacientForm1";

interface FormularPacientEditeaza1Props {}

const FormularPacientEditeaza1: React.FC<
  FormularPacientEditeaza1Props
> = ({}) => {
  return (
    <FormContainer mode="edit" page={1}>
      <PacientForm1 mode="edit" />
    </FormContainer>
  );
};

export default FormularPacientEditeaza1;
