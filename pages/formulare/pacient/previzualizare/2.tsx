import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import FormContainer from "@/features/formulare/components/FormContainer";
import {
  pacient2grid3Key,
  pacient2grid4Key,
  pacient2Grid1,
  pacient2Grid3,
  pacient2grid5Key,
  pacient2grid7Key,
  pacient2grid8Key,
  pacient2Grid4,
  pacient2Grid5,
  pacient2grid9Key,
  pacient2Grid6,
  pacient2grid10Key,
  pacient2grid6Key,
  pacient2Grid7,
  pacient2Grid8,
} from "@/features/formulare/components/PacientForm2";
import { PacientStep2 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface FormularPacientPrevizualizare2Props {}

const FormularPacientPrevizualizare2: React.FC<
  FormularPacientPrevizualizare2Props
> = ({}) => {
  const router = useRouter();
  const previewPacient = usePacientStore((state) => state.previewPacient);
  const { register, control } = useForm<PacientStep2>({
    values: pacientFormValues(previewPacient)?.pacientStep2,
  });

  return (
    <FormContainer
      page={2}
      submitForm={() => router.push("/formulare/pacient/previzualizare/3")}
    >
      <form>
        <fieldset disabled>
        <Grid container spacing={2}>
        <Grid container item xs={6} rowSpacing={3}>
          <Grid item xs={12}>
          <Grid item xs={12} mb={1}>
                <Controller
                  name="cod_si_diagnostic"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="cod_si_diagnostic-autocomplete"
                      label="codul si diagnostic"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
          <Grid item xs={12}>
              <Controller
                name="boli_autoimune"
                control={control}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    readOnly
                    virtual
                    id="boli_autoimune-autocomplete"
                    label="Boli autoimune"
                    options={[]}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
          </Grid>
          <Grid item xs={12}>
              <Controller
                name="comorbiditati"
                control={control}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    readOnly
                    virtual
                    id="comorbiditati-autocomplete"
                    label="Comorbiditati"
                    options={[]}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
          </Grid>

          <Grid item xs={12} mb={-3}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Antecedente personale fiziologice
            </Typography>
          </Grid>
          <Grid item xs={12} mb={-5}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Casatorit
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient2grid3Key)}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputField
              type="number"
              label="perioada maturizarii sexuale"
              registration={register(pacient2grid4Key)}
              style={{ width: "90%" }}
            />
          </Grid>

          {pacient2Grid1.map((key) => (
            <Grid item xs={4} key={key}>
              <InputField
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                registration={register(key)}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <InputField
              type="number"
              label="Apariția perioadei de menopauză (femei)"
              registration={register(pacient2grid5Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={12} mt={-2} mb={-3}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Anamneza alergologica
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Controller
                name="anamneza_alergologica"
                control={control}
                render={({ field, fieldState }) => (
                  <AutoComplete
                  width={200}
                    readOnly
                    virtual
                    id="anamneza_alergologica-autocomplete"
                    label="Anamneza Alergologica"
                    options={[]}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              options={[]}
              label={
                pacient2grid7Key[0].toUpperCase() +
                pacient2grid7Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient2grid7Key)}
              style={{ width: "80%" }}
            />
          </Grid>
        </Grid>

        <Grid container item xs={6} rowSpacing={2}>
        <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Deprinderi nocive
            </Typography>
          </Grid>
          <Grid item xs={12} mt={-2}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Fumeaza
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient2grid8Key)}
              />
              {pacient2Grid4.map((key) => (
            <Grid item xs={7} key={key} ml={3}>
              <InputField
                disabled
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                registration={register(key)}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Consum alcool
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient2grid9Key)}
              />
              {pacient2Grid5.map((key) => (
            <Grid item xs={7} key={key} ml={4}>
              <InputField
                disabled
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                registration={register(key)}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={-1.5}>
                Substante narcotice
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient2grid10Key)}
              />
              {pacient2Grid6.map((key) => (
            <Grid item xs={7} key={key} ml={2}>
              <InputField
                disabled
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                registration={register(key)}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputField
              type="text"
              label="alte deprinderi daunatoare"
              registration={register(pacient2grid6Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          {/* anamneza_alergologica */}
          <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Stare generala la examinare
            </Typography>
          </Grid>
          {pacient2Grid7.map((key) => (
            <Grid item xs={4} mt={-1} key={key} >
              <Stack direction="row">
                {key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                <Stack direction="row" ml={1} mt={-1.5}>
                  <InputField
                   style={{marginRight:"50px" ,width:"20px"}}
                    type="checkbox"
                    registration={register(key)}
                  />
                </Stack>
              </Stack>
            </Grid>
          ))}
          {pacient2Grid8.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                type="number"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "85%", height: "27px" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default FormularPacientPrevizualizare2;
