import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm3 from "@/features/formulare/components/PacientForm3";

interface FormularPacient3Props {}

const FormularPacient3: React.FC<FormularPacient3Props> = ({}) => {
  return (
    <FormContainer page={3}>
      <PacientForm3 />
    </FormContainer>
  );
};

export default FormularPacient3;
