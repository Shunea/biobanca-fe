import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import FormContainer from "@/features/formulare/components/FormContainer";
import {
  pacient4grid1Key,
  pacient4grid2Key,
  pacient4grid3Key,
  pacient4grid4Key,
} from "@/features/formulare/components/PacientForm4";
import { PacientStep4 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface FormularPacientPrevizualizare4Props {}

const FormularPacientPrevizualizare4: React.FC<
  FormularPacientPrevizualizare4Props
> = ({}) => {
  const router = useRouter();
  const previewPacient = usePacientStore((state) => state.previewPacient);
  const { register, control } = useForm<PacientStep4>({
    values: pacientFormValues(previewPacient)?.pacientStep4,
  });

  return (
    <FormContainer
      boxSx={{
        pr: 0,
      }}
      page={4}
      submitForm={() => router.push("/formulare/pacient/previzualizare/5")}
    >
      <form>
        <fieldset disabled>
        <Grid container spacing={4}>
        <Grid container item xs={6} mr={8} rowSpacing={2}>
          <Grid item xs={12} >
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Alicotarea porbei <br />
            </Typography>
          </Grid>
          <Grid item xs={6}>
                <Stack direction="row">
                  Alicotata
                  <Stack direction="row" ml={1} mt={-1.5}>
                    <InputField
                      type="checkbox"
                      registration={register(pacient4grid1Key)}
                    />
                  </Stack>
                </Stack>
          </Grid>
          <Grid item xs={12} mt={-2}>
                <InputField
                  readOnly
                  type="number"
                  label={
                    pacient4grid2Key[0].toUpperCase() +
                    pacient4grid2Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient4grid2Key, {
                    valueAsNumber: true,
                  })}
                  style={{ width: "40%", height: "27px" }}
                />
              </Grid>
          <Grid item xs={12} mt={-2}>
                <InputField
                  readOnly
                  type="number"
                  label={
                    pacient4grid4Key[0].toUpperCase() +
                    pacient4grid4Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient4grid4Key, {
                    valueAsNumber: true,
                  })}
                  style={{ width: "40%", height: "27px" }}
                />
              </Grid>
          <Grid item xs={12} mt={-2}>
                <InputField
                  readOnly
                  type="number"
                  label={
                    pacient4grid3Key[0].toUpperCase() +
                    pacient4grid3Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient4grid3Key, {
                    valueAsNumber: true,
                  })}
                  style={{ width: "40%", height: "27px" }}
                />
              </Grid>
        </Grid>
      </Grid>


        
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default FormularPacientPrevizualizare4;
