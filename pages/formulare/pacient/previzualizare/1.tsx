import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import { sexOptions } from "@/features/formulare/clasificatoare/options";
import FormContainer from "@/features/formulare/components/FormContainer";
import {
  pacient1grid1Key,
  pacient1grid2Key,
  pacient1grid3Key,
  pacient1grid4Key,
  pacient1grid6Key,
  labels1,
  pacient1Grid1,
  pacient1Grid2,
  pacient1Grid3,
  pacient1Grid4,
  pacient1Grid6,
  pacient1grid13Key,
  pacient1grid14Key,
  pacient1grid15Key,
  pacient1grid10Key,
  pacient1grid11Key,
  pacient1Grid7,
  pacient1grid8Key,
  pacient1grid9Key,
  pacient1grid12Key,
  pacient1grid5Key,
  pacient1grid7Key,
} from "@/features/formulare/components/PacientForm1";
import { PacientStep1 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface FormularPacientPrevizualizare1Props {}

const FormularPacientPrevizualizare1: React.FC<
  FormularPacientPrevizualizare1Props
> = () => {
  const router = useRouter();
  const previewPacient = usePacientStore((state) => state.previewPacient);
  const { register, control } = useForm<PacientStep1>({
    values: pacientFormValues(previewPacient)?.pacientStep1,
  });

  return (
    <FormContainer
      page={1}
      submitForm={() => router.push("/formulare/pacient/previzualizare/2")}
    >
      <form>
        <fieldset disabled>
        <Grid container spacing={1} style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid container item xs={7} rowSpacing={2} ml={-8}>
          <Grid item xs={12} mb={1}>
            <Controller
              name={pacient1grid1Key}
              control={control}
              render={({ field, fieldState }) => (
                <AutoComplete
                  width={420}
                  id="imsp-autocomplete"
                  label="IMSP"
                  options={[]}
                  field={field}
                  fieldState={fieldState}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider
              variant="middle"
              sx={{ background: "#a3a3a3", ml: 0, width: "80%" }}
            />
          </Grid>

          {pacient1Grid1.map((key, index) => (
            <Grid item xs={5} key={key}>
              <InputField
                readOnly
                type="text"
                maxLength={key === "IDNP" ? 13 : undefined}
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                
                registration={register(key)}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          {pacient1Grid2.map((key, index) => (
            <Grid item xs={4} key={key}>
              <InputField
                readOnly
                type="date"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                
                registration={register(key)}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          <Grid item xs={2}>
            <InputField
              readOnly
              type="number"
              label="Varsta"
              registration={register(pacient1grid5Key)}
              style={{ width: "70%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              options={[]}
              label={
                pacient1grid3Key[0].toUpperCase() +
                pacient1grid3Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid3Key)}
              style={{ width: "70%" }}
            />
          </Grid>
          <Grid item xs={3.3} mt={1}>
            <InputField
              type="text"
              label={
                pacient1grid4Key[0].toUpperCase() +
                pacient1grid4Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid4Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3.3} mt={1}>
            <InputField
              type="text"
              label={
                pacient1grid6Key[0].toUpperCase() +
                pacient1grid6Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid6Key)}
              style={{ width: "90%" }}
            />
          </Grid>

          <Grid item xs={3.3} mt={1}>
            <SelectField
              options={[]}
              label="Loc de trai"
              registration={register("loc_de_trai")}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              options={[]}
              label={
                pacient1grid12Key[0].toUpperCase() +
                pacient1grid12Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid12Key)}
              style={{ width: "75%" }}
            />
          </Grid>
          <Grid item xs={12} mt={1} mb={1}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Adresa de reședință permanentă
            </Typography>
          </Grid>

          {pacient1Grid3.map((key, index) => (
            <Grid item xs={5} key={key}>
                <Controller
                  name={key}
                  control={control}
                  render={({ field, fieldState }) => (
                    <AutoComplete
                      width={220}
                      virtual={index === 1}
                      id={`${key}-autocomplete`}
                      label={labels1[index]}
                      options={[]}
                      field={field}
                      fieldState={fieldState}
                    />
                  )}
                />
            </Grid>
          ))}
          <Grid item xs={12} mt={1}>
            <InputField
              type="text"
              label="Strada"
              registration={register("rp_strada")}
              style={{ width: "80%" }}
            />
          </Grid>
        </Grid>

        <Grid container item xs={5}>
          <Grid item xs={12} >
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Lucreaza
              </Typography>
              <InputField
                type="checkbox"
                registration={register(pacient1grid9Key)}
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <InputField
              disabled
              type="text"
              label="Loc de munca"
              registration={register(pacient1grid2Key)}
              style={{ width: "90%" }}
            />
            </Grid>
            <Grid item xs={6}>
            <Grid item xs={12} mb={1}>
                <Controller
                  name="profesie_specializare"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="profesie_specializare-autocomplete"
                      label="profesie specializare"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
            <Grid item xs={6}>
            <Grid item xs={12} mb={1}>
                <Controller
                  name={pacient1grid7Key}
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="statut-autocomplete"
                      label="statut"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>
          </Grid>
          <Grid item xs={6} mt={1}>
            <InputField
              type="number"
              label={
                pacient1grid10Key[0].toUpperCase() +
                pacient1grid10Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid10Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}  mt={1}>
            <SelectField
              options={[]}
              label={
                pacient1grid11Key[0].toUpperCase() +
                pacient1grid11Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid11Key)}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={4} mt={1}>
            <InputField
              type="text"
              label={
                pacient1grid15Key[0].toUpperCase() +
                pacient1grid15Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid15Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3} mt={1}>
            <InputField
              type="number"
              label={
                pacient1grid14Key[0].toUpperCase() +
                pacient1grid14Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid14Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5}  mt={4}>
            <SelectField
              options={[]}
              label={
                pacient1grid13Key[0].toUpperCase() +
                pacient1grid13Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid13Key)}
              style={{ width: "75%" }}
            />
          </Grid>
          {pacient1Grid6.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                type="date"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                registration={register(key)}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          {pacient1Grid7.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField 
                readOnly={key === "persoana_receptionare"}
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "80%" }}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <SelectField
              options={[]}
              label={
                pacient1grid8Key[0].toUpperCase() +
                pacient1grid8Key.replace(/_/g, " ").slice(1)
              }
              registration={register(pacient1grid8Key)}
              style={{ width: "90%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* /////////////// */}
          <Grid container spacing={2}>
            <Grid container item xs={6} rowSpacing={2}>
              <Grid item xs={12} mb={1}>
                <Controller
                  name={pacient1grid1Key}
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      readOnly
                      id="imsp-autocomplete"
                      label="IMSP"
                      options={[]}
                      field={field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} mt={-2}>
                <InputField
                  readOnly
                  type="number"
                  label={
                    pacient1grid2Key[0].toUpperCase() +
                    pacient1grid2Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient1grid2Key, {
                    valueAsNumber: true,
                  })}
                  style={{ width: "40%", height: "27px" }}
                />
              </Grid>

              <Grid item xs={12} mt={1} mb={1}>
                <Divider
                  variant="middle"
                  sx={{ background: "#a3a3a3", ml: 0, width: "90%" }}
                />
              </Grid>

              {pacient1Grid1.map((key) => (
                <Grid item xs={12} key={key}>
                  <InputField
                    readOnly
                    type={key === "data_nasterii" ? "date" : "text"}
                    label={
                      key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)
                    }
                    registration={register(key)}
                    style={{ width: "90%" }}
                  />
                </Grid>
              ))}
              {pacient1Grid2.map((key, index) => (
                <Grid item xs={5} key={key}>
                  <InputField
                    readOnly
                    type="date"
                    label={
                      key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)
                    }
                    registration={register(key)}
                    style={{ width: "80%" }}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <InputField
                  readOnly
                  type="number"
                  label="Varsta"
                  registration={register(pacient1grid3Key)}
                  style={{ width: "60%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <SelectField
                  disabled
                  options={sexOptions}
                  label={
                    pacient1grid3Key[0].toUpperCase() +
                    pacient1grid3Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient1grid3Key)}
                  style={{ width: "75%" }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={6}>
              <Grid item xs={12} mt={1}>
                <InputField
                  readOnly
                  type="text"
                  label={
                    pacient1grid4Key[0].toUpperCase() +
                    pacient1grid4Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient1grid4Key)}
                  style={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={12} mt={1}>
                <InputField
                  readOnly
                  type="text"
                  label={
                    pacient1grid6Key[0].toUpperCase() +
                    pacient1grid6Key.replace(/_/g, " ").slice(1)
                  }
                  registration={register(pacient1grid6Key)}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <SelectField
                  disabled
                  options={[]}
                  label="Loc de trai"
                  registration={register("loc_de_trai")}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item xs={12} mt={1} mb={1}>
                <Typography
                  color="action.active"
                  fontSize={18}
                  fontWeight={600}
                >
                  Adresa de reședință permanentă
                </Typography>
              </Grid>

              {pacient1Grid3.map((key, index) => (
                <Grid item xs={12} key={key}>
                  <Controller
                    name={key}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        readOnly
                        id={`${key}-autocomplete`}
                        label={labels1[index]}
                        options={[]}
                        field={field}
                      />
                    )}
                  />
                </Grid>
              ))}

              <Grid item xs={12} mt={1}>
                <InputField
                  readOnly
                  type="text"
                  label="Strada"
                  registration={register("rp_strada")}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item xs={12} mt={1} mb={1}>
                <Typography
                  color="action.active"
                  fontSize={18}
                  fontWeight={600}
                >
                  Adresa de reședință temporară
                </Typography>
              </Grid>

              {pacient1Grid4.map((key, index) => (
                <Grid item xs={12} key={key}>
                  <Controller
                    name={key}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        readOnly
                        id={`${key}-autocomplete`}
                        label={labels1[index]}
                        options={[]}
                        field={field}
                      />
                    )}
                  />
                </Grid>
              ))}

              <Grid item xs={12} mt={1}>
                <InputField
                  readOnly
                  type="text"
                  label="Strada"
                  registration={register("rp_strada")}
                  style={{ width: "90%" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default FormularPacientPrevizualizare1;
