import FormContainer from "@/features/formulare/components/FormContainer";
import PacientForm5 from "@/features/formulare/components/PacientForm5";

interface FormularPacientEditeaza5Props {}

const FormularPacientEditeaza5: React.FC<
  FormularPacientEditeaza5Props
> = ({}) => {
  return (
    <FormContainer
      boxSx={{
        pr: 4,
      }}
      mode="edit"
      page={5}
    >
      <PacientForm5 mode="edit" />
    </FormContainer>
  );
};

export default FormularPacientEditeaza5;
