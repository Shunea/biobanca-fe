import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm5 from "@/features/formulare/components/PacientForm5";

interface FormularPacient5Props {}

const FormularPacient5: React.FC<FormularPacient5Props> = ({}) => {
  return (
    <FormContainer
      boxSx={{
        pr: 4,
      }}
      page={5}
    >
      <PacientForm5 />
    </FormContainer>
  );
};

export default FormularPacient5;
