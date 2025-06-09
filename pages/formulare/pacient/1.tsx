import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm1 from "@/features/formulare/components/PacientForm1";

interface FormularPacient1Props {}

const FormularPacient1: React.FC<FormularPacient1Props> = ({}) => {
  return (
    <FormContainer page={1}>
      <PacientForm1 />
    </FormContainer>
  );
};

export default FormularPacient1;
