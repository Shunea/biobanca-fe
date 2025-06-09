import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import { PacientStep2 } from "@/features/formulare/types";
import useAnamnezaAlergologica from "@/hooks/queries/useAnamnezaAlergologica";
import useCIMX from "@/hooks/queries/useCIMX";
import useSectia from "@/hooks/queries/useSectia";
import useTipProiect from "@/hooks/queries/useTipProiect";
import useUser from "@/hooks/queries/useUser";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography,Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import shallow from "zustand/shallow";

export const pacient2Grid1: (keyof PacientStep2)[] = [
  // "nr_sarcini",
  "nr_nasteri",
  "nr_avorturi",
];

export const pacient2Grid4: (keyof PacientStep2)[] = [
  "ce_cantitate_fumeaza",
  "de_cati_ani_fumeaza",
];
export const pacient2Grid5: (keyof PacientStep2)[] = [
  "ce_cantitate_alcool",
  "de_cati_ani_alcool",
];
export const pacient2Grid6: (keyof PacientStep2)[] = [
  "ce_cantitate_narcotice",
  "de_cati_ani_narcotice",
];
export const stareLabels = ["satisfacatoare", "gravitate_medie", "grava"];
export const radioArray = ["", "", ""];


export const pacient2Grid8: (keyof PacientStep2)[] = [
  "TA",
  "greutate",
  "inaltime",
  "puls",
];

export const pacient2grid2Key = "nr_sarcini";
export const pacient2grid3Key = "casatorit";
export const pacient2grid4Key = "perioada_maturizarii_sexuale";
export const pacient2grid5Key = "aparitia_perioadei_de_menopauza";
export const pacient2grid6Key = "alte_deprinderi_daunatoare";
export const pacient2grid7Key = "tip_proiect";
export const pacient2grid8Key = "fumeaza";
export const pacient2grid9Key = "consum_alcool";
export const pacient2grid10Key = "subst_narc";

const profesieDisabledConditions = ["Copil", "Elev", "Pensionar"];

interface PacientForm2Props {
  mode?: "create" | "edit";
}

const PacientForm2: React.FC<PacientForm2Props> = ({ mode = "create" }) => {
  const router = useRouter();
  const {
    pacientStep1,
    pacientStep2,
    pacient,
    setData,
    setPacient,
    setPartialPacient,
  } = usePacientStore(
    (state) => ({
      pacientStep1: state.pacientStep1,
      pacientStep2: state.pacientStep2,
      pacient: state.pacient,
      setData: state.setData,
      setPacient: state.setPacient,
      setPartialPacient: state.setPartialPacient,
    }),
    shallow
  );
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, dirtyFields, isValid },
  } = useForm<PacientStep2>({
    mode: "onChange",
    defaultValues: pacientStep2,
    values:
      mode === "edit" ? pacientFormValues(pacient)?.pacientStep2 : undefined,
  });
  const sex = pacientStep1.sex;
  const fumeazaDisabled = watch(pacient2grid8Key) === true;
  const consumAlcoolDisabled = watch(pacient2grid9Key) === true;
  const substNarcDisabled = watch(pacient2grid10Key) === true;
  
  const { data } = useUser();

  const { status: cimxStatus, data: cimxData } = useCIMX();
  const cimxOptions = cimxData?.map((cimx) => ({
    value: cimx.code,
    label: cimx.nume_cod,
  }));

  const { status: anamnezaAlergologicaStatus, data: anamnezaAlergologicaData } = useAnamnezaAlergologica();
  const anamnezaAlergologicaOptions = anamnezaAlergologicaData?.map((anamnezaAlergologica) => ({
    value: anamnezaAlergologica.name,
    label: anamnezaAlergologica.name,
  }));

  const { status: tipProiectStatus, data: tipProiectData } = useTipProiect();
  const tipProiectOptions = tipProiectData?.map((tipProiect) => ({
    value: tipProiect.denumire,
    label: tipProiect.denumire,
  }));


  const onSubmit: SubmitHandler<PacientStep2> = (data) => {
    if (mode === "create") {
      setData({ step: 2, data });
    } else {
      if (pacient !== null) {
        setPacient({ ...pacient, ...data });
        for (const [key, value] of Object.entries(data)) {
          if (dirtyFields[key as keyof PacientStep2]) {
            setPartialPacient({ [key]: value });
          }
        }
      }
    }
  };

  const required = mode === "create" && "Acest câmp este obligatoriu";

  return (
    <form
      id="pacient"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        if (isValid) {
          if (mode === "create") {
            router.push("/formulare/pacient/3");
          } else {
            router.push("/formulare/pacient/editeaza/3");
          }
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid container item xs={6} rowSpacing={3}>
          <Grid item xs={12}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="cod_si_diagnostic"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="cod_si_diagnostic-autocomplete"
                    label="Codul si Diagnosticul"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          <Grid item xs={12}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="boli_autoimune"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="boli_autoimune-autocomplete"
                    label="Boli autoimune"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          <Grid item xs={12}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="comorbiditati"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="comorbiditati-autocomplete"
                    label="Comorbiditati"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
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
                error={errors[pacient2grid3Key]}
                registration={register(pacient2grid3Key)}
              />
            </Stack>
          </Grid>
          <Grid item xs={3} mt={3}>
            <InputField
              type="number"
              label="Perioada maturizarii sexuale"
              error={errors[pacient2grid4Key]}
              registration={register(pacient2grid4Key, {
                required:
                  mode === "create" &&  "Acest câmp este obligatoriu",
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3}>
            <InputField
              type="number"
              disabled={sex === 'Masculin'}
              label="Apariția perioadei de menopauză (femei)"
              error={errors[pacient2grid5Key]}
              registration={register(pacient2grid5Key, {
                required:
                  mode === "create" &&   "Acest câmp este obligatoriu",
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3} mt={9}>
            <InputField
              type="number"
              disabled={sex === 'Masculin'}
              label="Nr sarcini"
              error={errors[pacient2grid2Key]}
              registration={register(pacient2grid2Key, {
                required:
                  mode === "create" &&  "Acest câmp este obligatoriu",
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          {pacient2Grid1.map((key) => (
            <Grid  item xs={4} key={key}>
              <InputField
                disabled={sex === 'Masculin'}
                className={mode === "create" ? "required" : ""}
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required,
                })}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
          <Grid item xs={12} mt={-2} mb={-3}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Anamneza alergologica
            </Typography>
          </Grid>
          <Grid item xs={6}>
              <Controller
                name="anamneza_alergologica"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                  width={200}
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="anamneza_alergologica-autocomplete"
                    label="Anamneza Alergologica"
                    options={anamnezaAlergologicaStatus === "success" ? anamnezaAlergologicaOptions! : []}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              required={mode === "create"}
              options={tipProiectStatus === "success" ? tipProiectOptions! : []}
              label={
                pacient2grid7Key[0].toUpperCase() +
                pacient2grid7Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient2grid7Key]}
              registration={register(pacient2grid7Key, {
                required,
              })}
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
                Fumeaza (pachete / zi)
              </Typography>
              <InputField
                type="checkbox"
                error={errors[pacient2grid8Key]}
                registration={register(pacient2grid8Key)}
              />
              
              {pacient2Grid4.map((key) => (
            <Grid item xs={8} key={key} ml={3}>
              <InputField
                disabled={!fumeazaDisabled}
                className={mode === "create" ? "required" : ""}
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required,
                })}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Consum alcool (litri / zi)
              </Typography>
              <InputField
                type="checkbox"
                error={errors[pacient2grid9Key]}
                registration={register(pacient2grid9Key)}
              />
              {pacient2Grid5.map((key) => (
            <Grid item xs={7} key={key} ml={4}>
              <InputField
                disabled={!consumAlcoolDisabled}
                className={mode === "create" ? "required" : ""}
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required,
                })}
                style={{ width: "70%"}}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={-1.5}>
                Substante narcotice (miligrame / zi)
              </Typography>
              <InputField
                type="checkbox"
                error={errors[pacient2grid10Key]}
                registration={register(pacient2grid10Key)}
              />
              {pacient2Grid6.map((key) => (
            <Grid item xs={10} key={key} ml={2}>
              <InputField
                disabled={!substNarcDisabled}
                className={mode === "create" ? "required" : ""}
                type="number"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required,
                })}
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
              error={errors[pacient2grid6Key]}
              registration={register(pacient2grid6Key, {
                required:
                  mode === "create" &&  "Acest câmp este obligatoriu",
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          {/* anamneza_alergologica */}
          <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Stare generala la examinare
            </Typography>
          </Grid>
           <Grid item xs={12} mt={-1}>
            <Stack direction="row" spacing={4}>
              {radioArray.map((_key, index) => (
                <Stack direction="row" alignItems="center" key={index}>
                  <Typography mt={-1.3} mr={1}>
                    {stareLabels[index]}
                  </Typography>

                  <InputField
                    type="radio"
                    value={stareLabels[index]}
                    error={errors["stare_generala"]}
                    registration={register("stare_generala")}
                  />
                </Stack>
              ))}
            </Stack>
          </Grid>
          {pacient2Grid8.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                type="number"
                label={ key === "greutate" ? "Greutate(kg)" : key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                error={errors[key]}
                registration={register(key)}
                style={{ width: "85%", height: "27px" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </form>
  );
};

export default PacientForm2;
