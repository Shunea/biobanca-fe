import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm4 from "@/features/formulare/components/PacientForm4";

interface FormularPacientEditeaza4Props {}

const FormularPacientEditeaza4: React.FC<
  FormularPacientEditeaza4Props
> = ({}) => {
  return (
    <FormContainer mode="edit" page={4}>
      <PacientForm4 mode="edit" />
    </FormContainer>
  );
};

export default FormularPacientEditeaza4;
