import { InputField, SelectField } from "@/components/Form";
import FormContainer from "@/features/formulare/components/FormContainer";
import {
  pacient5Grid1,
  pacient5grid1Key,
  pacient5grid2Key,
  pacient5grid3Key,
  pacient5grid4Key,
  pacient5grid5Key,
} from "@/features/formulare/components/PacientForm5";
import { PacientStep5 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormularPacientPrevizualizare5Props {}

const FormularPacientPrevizualizare5: React.FC<
  FormularPacientPrevizualizare5Props
> = ({}) => {
  const router = useRouter();
  const previewPacient = usePacientStore((state) => state.previewPacient);
  const { register } = useForm<PacientStep5>({
    values: pacientFormValues(previewPacient)?.pacientStep5,
  });

  return (
    <FormContainer
      boxSx={{
        pr: 3,
      }}
      page={5}
      submitForm={() => console.log("termina previzualizarea")}
    >
      <form>
        <fieldset disabled>
        <Grid container spacing={12}>
        <Grid container item xs={6} columnSpacing={-7} rowSpacing={2}>
          <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Locatia probei
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputField
              type="number"
              label="Frigiderul"
              min={0}
              registration={register(pacient5grid5Key, {
                valueAsNumber: true,
              })}
              style={{ width: "100%" }}
            />{" "}
          </Grid>
          {pacient5Grid1.map((key) => (
            <Grid item xs={6} mt={-2} key={key}>
              <InputField
                type="number"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key, {
                  valueAsNumber: true,
                })}
                style={{ width: "95%"}}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
                <SelectField
                  disabled
                  options={[]}
                  label={pacient5grid1Key}
                  registration={register(pacient5grid1Key)}
                  style={{ width: "85%" }}
                />
              </Grid>
        </Grid>

        <Grid container item xs={6} mt={5}>
        <Grid item xs={12}>
                <SelectField
                  disabled
                  options={[]}
                  label={pacient5grid2Key}
                  registration={register(pacient5grid2Key)}
                  style={{ width: "85%" }}
                />
              </Grid>
        <Grid item xs={12}>
            <InputField
              type="number"
              label="Numarul probei"
              min={0}
              registration={register(pacient5grid4Key, {
                valueAsNumber: true,
              })}
              style={{ width: "100%" }}
            />{" "}
          </Grid>
        <Grid item xs={12}>
            <InputField
              type="text"
              label="Numarul cutiei"
              min={0}
              registration={register(pacient5grid3Key, {
                valueAsNumber: true,
              })}
              style={{ width: "100%" }}
            />{" "}
          </Grid>
        </Grid>
      </Grid>
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default FormularPacientPrevizualizare5;
