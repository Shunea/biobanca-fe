import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm4 from "@/features/formulare/components/PacientForm4";

interface FormularPacient4Props {}

const FormularPacient4: React.FC<FormularPacient4Props> = ({}) => {
  return (
    <FormContainer
      boxSx={{
        pr: 0,
      }}
      page={4}
    >
      <PacientForm4 />
    </FormContainer>
  );
};

export default FormularPacient4;
