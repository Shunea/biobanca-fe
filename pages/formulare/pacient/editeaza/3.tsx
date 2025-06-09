import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm3 from "@/features/formulare/components/PacientForm3";

interface FormularPacientEditeaza3Props {}

const FormularPacientEditeaza3: React.FC<
  FormularPacientEditeaza3Props
> = ({}) => {
  return (
    <FormContainer mode="edit" page={3}>
      <PacientForm3 mode="edit" />
    </FormContainer>
  );
};

export default FormularPacientEditeaza3;
