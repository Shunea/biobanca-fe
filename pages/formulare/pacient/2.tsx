import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm2 from "@/features/formulare/components/PacientForm2";

interface FormularPacient2Props {}

const FormularPacient2: React.FC<FormularPacient2Props> = ({}) => {
  return (
    <FormContainer page={2}>
      <PacientForm2 />
    </FormContainer>
  );
};

export default FormularPacient2;
