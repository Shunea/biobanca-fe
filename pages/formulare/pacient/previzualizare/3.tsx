import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import { covidOptions } from "@/features/formulare/clasificatoare/options";
import FormContainer from "@/features/formulare/components/FormContainer";
import {
  pacient3Grid1,
  pacient3grid10Key,
  pacient3grid11Key,
  pacient3grid12Key,
  pacient3grid13Key,
  pacient3grid14Key,
  pacient3grid16Key,
  pacient3grid1Key,
  pacient3Grid2,
  pacient3grid2Key,
  pacient3grid4Key,
  pacient3grid5Key,
  pacient3grid6Key,
  pacient3grid7Key,
  pacient3grid8Key,
  pacient3grid9Key,
} from "@/features/formulare/components/PacientForm3";
import { PacientStep3 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface FormularPacientPrevizualizare3Props {}

const FormularPacientPrevizualizare3: React.FC<
  FormularPacientPrevizualizare3Props
> = ({}) => {
  const router = useRouter();
  const previewPacient = usePacientStore((state) => state.previewPacient);
  const { register, control } = useForm<PacientStep3>({
    values: pacientFormValues(previewPacient)?.pacientStep3,
  });

  return (
    <FormContainer
      page={3}
      submitForm={() => router.push("/formulare/pacient/previzualizare/4")}
    >
      <form>
        <fieldset disabled>
        <Grid container spacing={2}>
        <Grid container item xs={6} ml={-7} mr={5}  columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
            Vârsta şi starea sănătăţii (sau cauza morţii):
            </Typography>
          </Grid>
          <Grid item xs={12} mt={-2}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Parintilor:
              </Typography>
              <Grid item xs={3.5}>
            <InputField
              type="number"
              label="Varsta"
              registration={register(pacient3grid9Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              options={[]}
              label="Sexul"
              registration={register(pacient3grid16Key)}
              style={{ width: "90%" }}
            />
          </Grid>
            <Grid item xs={6}>
            <SelectField
              options={[]}
              label="Starea de sanatate"
              registration={register(pacient3grid6Key)}
              style={{ width: "75%" }}
            />
          </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} mt={-2}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Copiilor:
              </Typography>
              <Grid item xs={3.5} ml={1}>
            <InputField
              type="number"
              label="Varsta"
              registration={register(pacient3grid10Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              options={[]}
              label="Sexul"
              registration={register(pacient3grid16Key)}
              style={{ width: "90%" }}
            />
          </Grid>
              <Grid item xs={6} >
            <SelectField
              options={[]}
              label="Starea de sanatate"
              registration={register(pacient3grid7Key)}
              style={{ width: "75%" }}
            />
          </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} mt={-2}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Alte rude:
              </Typography>
              <Grid item xs={6} mt={1}>
            <InputField
              type="text"
              label={pacient3grid12Key}
              registration={register(pacient3grid12Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3.5} mt={1}>
            <InputField
              type="number"
              label="Varsta"
              registration={register(pacient3grid11Key)}
              style={{ width: "90%" }}
            />
          </Grid>
            </Stack>
            <Stack direction="row">
              <Grid item xs={6} mt={1}>
            <SelectField
              options={[]}
              label="Starea de sanatate la rude"
              registration={register(pacient3grid8Key)}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={6} mt={1}>
            <InputField
              type="text"
              label={
                pacient3grid2Key[0].toUpperCase() +
                pacient3grid2Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient3grid2Key)}
              style={{ width: "83%" }}
            />
          </Grid>
            </Stack>
          </Grid>
          
        </Grid>

        <Grid container item xs={6}>
        <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
             Au suferit părinţii sau rudele apropiate de boli 
            </Typography>
          </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Parintilor:
              </Typography>
              <Grid item xs={6}>
              <Grid item xs={12}>
                <Controller
                  name={pacient3grid13Key}
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="boli_parinti-autocomplete"
                      label="boli parinti"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
          <Grid item xs={5}>
            <SelectField
              options={[]}
              label="Sexul parintilor"
              registration={register(pacient3grid13Key)}
              style={{ width: "80%" }}
            />
          </Grid>
          {pacient3Grid2.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                disabled
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "80%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12} >
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Copiilor:
              </Typography>
              <Grid item xs={6} ml={1}>
              <Grid item xs={12}>
                <Controller
                  name={pacient3grid4Key}
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="boli_copii-autocomplete"
                      label="boli bolii"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
          <Grid item xs={5}>
            <SelectField
              options={[]}
              label="Sexul copiilor"
              registration={register(pacient3grid14Key)}
              style={{ width: "80%" }}
            />
          </Grid>
          {pacient3Grid2.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                disabled
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "80%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Alte rude:
              </Typography>
              <Grid item xs={6} ml={1}>
              <Grid item xs={12}>
                <Controller
                  name={pacient3grid5Key}
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="boli_rude-autocomplete"
                      label="Boli rude"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
          {pacient3Grid2.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                disabled
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "85%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
            Antecedentele eredo-colaterale 
            </Typography>
          </Grid>
          {pacient3Grid1.map((key) => (
            <Grid item xs={4} mt={1} key={key} >
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
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
              Lezarea organelor şi sistemelor, în care au fost depistate dereglări patologice la bolnavul examinat
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient3grid1Key)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>          
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default FormularPacientPrevizualizare3;
