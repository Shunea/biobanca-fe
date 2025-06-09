import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import {
  locDeTraiOptions,
  sexOptions,
  rhOptions
} from "@/features/formulare/clasificatoare/options";
import { PacientStep1 } from "@/features/formulare/types";
import useCorm from "@/hooks/queries/useCorm";
import useGrupaSangvina from "@/hooks/queries/useGrupaSangvina";
import useIMSP from "@/hooks/queries/useIMSP";
import useLocalitate from "@/hooks/queries/useLocalitate";
import useRaion from "@/hooks/queries/useRaion";
import useStatut from "@/hooks/queries/useStatut";
import useTipProba from "@/hooks/queries/useTipProba";
import useTransferatLa from "@/hooks/queries/useTransferatLa";
import useUnitatateMasura from "@/hooks/queries/useUnitatiMasura";
import { usePacientStore } from "@/stores/pacient";
import { calculateAge } from "@/utils/calculateAge";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Divider, Grid, Stack, styled, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import shallow from "zustand/shallow";
import React, { useState } from "react";
import useUser from "@/hooks/queries/useUser";
import useBiospecimen from "@/hooks/queries/useBiospecimen";


export const pacient1Grid1: (keyof PacientStep1)[] = [
  "nume",
  "prenume",
  "patronimicul",
  "IDNP",
];
export const pacient1Grid2: (keyof PacientStep1)[] = ["data_nasterii"];

export const pacient1Grid3: (keyof PacientStep1)[] = ["rp_mn", "rp_localitate"];

export const pacient1Grid6: (keyof PacientStep1)[] = ["data_receptionare","data_prelevarii"];
export const pacient1Grid7: (keyof PacientStep1)[] = ["persoana_receptionare","persoana_prelevarii"];

export const labels1 = ["Municipiul / Raionul", "Localitatea"];

export const pacient1grid1Key = "imsp_id";
export const pacient1grid2Key = "loc_de_munca";
export const pacient1grid3Key = "sex";
export const pacient1grid4Key = "cetatenie";
export const pacient1grid5Key = "varsta";
export const pacient1grid6Key = "etnie";
export const pacient1grid8Key = "sursa_provenienta_proba";
export const pacient1grid9Key = "lucreaza";
export const pacient1grid10Key = "nr_proba";
export const pacient1grid11Key = "tip_proba";
export const pacient1grid12Key = "grupa_sangvina";
export const pacient1grid16Key = "rh";
export const pacient1grid13Key = "unitate_masura";
export const pacient1grid14Key = "cantitate_proba";
export const pacient1grid15Key = "biospecimen_prelevat";

interface PacientForm1Props {
  mode?: "create" | "edit";
}

const PacientForm1: React.FC<PacientForm1Props> = ({ mode = "create" }) => {
  const router = useRouter();
  const { isSuccess, data } = useUser();
  const user = data?.data;
  // const [inputValue, setInputValue] = useState("");
  const { pacientStep1, pacient, setData, setPacient, setPartialPacient } =
    usePacientStore(
      (state) => ({
        pacientStep1: state.pacientStep1,
        pacient: state.pacient,
        setData: state.setData,
        setPacient: state.setPacient,
        setPartialPacient: state.setPartialPacient,
      }),
      shallow
    );
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    formState: { errors, dirtyFields, isValid },
  } = useForm<PacientStep1>({
    mode: "onChange",
    defaultValues: pacientStep1,
    values:
      mode === "edit" ? pacientFormValues(pacient)?.pacientStep1 : undefined,
  });
  const [{ minDate, maxDate }, setMinMaxDate] = useState<{
    minDate: string;
    maxDate: string;
  }>({
    minDate: "",
    maxDate: "",
  });
  const { status: imspStatus, data: imspData } = useIMSP();
  const imspOptions = imspData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { status: unitateMasuraStatus, data: unitateMasuraData } = useUnitatateMasura();
  const unitateMasuraOptions = unitateMasuraData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const { status: biospecimenStatus, data: biospecimenData } = useBiospecimen();
  const biospecimenOptions = biospecimenData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { status: transferatLaStatus, data: transferatLaData } = useTransferatLa();
  const transferatLaOptions = transferatLaData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { status: tipProbaStatus, data: tipProbaData } = useTipProba();
  const tipProbaOptions = tipProbaData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { status: raionStatus, data: raionData } = useRaion();
  const raionOptions = raionData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));


  const { status: localitateStatus, data: localitateData } = useLocalitate();
  const localitateOptions = localitateData?.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  const { status: grupaSangvinaStatus, data: grupaSangvinaData } = useGrupaSangvina();
  const grupaSangvinaOptions = grupaSangvinaData?.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  const { status: statutStatus, data: statutData } = useStatut();
  const statutOptions = statutData?.map((item) => ({
    value: item.name,
    label: item.name,
  }));
  const { status: cormStatus, data: cormData } = useCorm();
  const cormOptions = cormData?.map((corm) => ({
    value: corm.name,
    label: corm.name,
  }));

  const onSubmit: SubmitHandler<PacientStep1> = (data) => {
    if (mode === "create") {
      // @ts-ignore
      const IMSP = data.imsp_id.label;
      setData({ step: 1, data: { ...data, IMSP } });
    } else {
      if (pacient !== null) {
        setPacient({ ...pacient, ...data });
        for (const [key, value] of Object.entries(data)) {
          if (dirtyFields[key as keyof PacientStep1]) {
            setPartialPacient({ [key]: value });
          }
        }
      }
    }
  };

  const required = mode === "create" && "Acest câmp este obligatoriu";
  const lucreazaDisabled = watch(pacient1grid9Key) === true;


  return (
    <form
      noValidate
      id="pacient"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        if (isValid) {
          if (mode === "create") {
            router.push("/formulare/pacient/2");
          } else {
            router.push("/formulare/pacient/editeaza/2");
          }
        }
      }}
    >
      <Grid container spacing={1} style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid container item xs={7} rowSpacing={2} ml={-8}>
          <Grid item xs={12} mb={1}>
            <Controller
              name={pacient1grid1Key}
              control={control}
              rules={{ required }}
              render={({ field, fieldState }) => (
                <AutoComplete
                  width={420}
                  required={mode === "create"}
                  id="imsp-autocomplete"
                  label="IMSP"
                  options={imspStatus === "success" ? imspOptions! : []}
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
                className={mode === "create" && index !== 2 ? "required" : ""}
                readOnly={mode === "edit" && key !== "data_nasterii"}
                type="text"
                maxLength={key === "IDNP" ? 13 : undefined}
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required:
                    mode === "create" &&
                    index !== 2 &&
                    "Acest câmp este obligatoriu",
                  validate: (value) => {
                    if (key === "IDNP" && mode === "create") {
                      if (typeof value === "string" && value.length !== 13) {
                        return "IDNP trebuie sa aiba 13 cifre";
                      }
                      if (isNaN(Number(value))) {
                        return "IDNP trebuie sa aiba doar cifre";
                      }
                    }
                  },
                })}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          {pacient1Grid2.map((key, index) => (
            <Grid item xs={4} key={key}>
              <InputField
                readOnly={mode === "edit"}
                type="date"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                error={errors[key]}
                registration={register(key, {
                  required:
                    mode === "create" &&
                    index === 0 &&
                    "Acest câmp este obligatoriu",

                  onChange: (e) => {
                    if (key === "data_nasterii") {
                      setValue(pacient1grid5Key, calculateAge(e.target.value));
                    }
                  },
                })}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          <Grid item xs={2}>
            <InputField
              readOnly
              type="number"
              label="Varsta"
              error={errors[pacient1grid5Key]}
              registration={register(pacient1grid5Key, {
                valueAsNumber: true,
              })}
              style={{ width: "70%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              required={mode === "create"}
              options={sexOptions}
              label={
                pacient1grid3Key[0].toUpperCase() +
                pacient1grid3Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid3Key]}
              registration={register(pacient1grid3Key, {
                required,
              })}
              style={{ width: "70%" }}
            />
          </Grid>
          <Grid item xs={3.3} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="text"
              label={
                pacient1grid4Key[0].toUpperCase() +
                pacient1grid4Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid4Key]}
              registration={register(pacient1grid4Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3.3} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="text"
              label={
                pacient1grid6Key[0].toUpperCase() +
                pacient1grid6Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid6Key]}
              registration={register(pacient1grid6Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>

          <Grid item xs={3.3} mt={1}>
            <SelectField
              required={mode === "create"}
              options={locDeTraiOptions}
              label="Loc de trai"
              error={errors["loc_de_trai"]}
              registration={register("loc_de_trai", {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6} mr={-5.5}>
            <SelectField
              required={mode === "create"}
              options={grupaSangvinaStatus === "success" ? grupaSangvinaOptions! : []}
              label={
                pacient1grid12Key[0].toUpperCase() +
                pacient1grid12Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid12Key]}
              registration={register(pacient1grid12Key, {
                required,
              })}
              style={{ width: "75%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              required={mode === "create"}
              options={rhOptions}
              label={
                pacient1grid16Key[0].toUpperCase() +
                pacient1grid16Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid16Key]}
              registration={register(pacient1grid16Key, {
                required,
              })}
              style={{ width: "74%" }}
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
                  rules={{ required }}
                  render={({ field, fieldState }) => (
                    <AutoComplete
                      width={220}
                      required={mode === "create"}
                      virtual={index === 1}
                      id={`${key}-autocomplete`}
                      label={labels1[index]}
                      options={
                        index === 0
                          ? raionStatus === "success"
                            ? raionOptions!
                            : []
                          : localitateStatus === "success"
                          ? localitateOptions!
                          : []
                      }
                      field={field}
                      fieldState={fieldState}
                    />
                  )}
                />
            </Grid>
          ))}
          <Grid item xs={12} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="text"
              label="Strada"
              error={errors["rp_strada"]}
              registration={register("rp_strada", {
                required,
              })}
              style={{ width: "80%" }}
            />
          </Grid>
        </Grid>

        <Grid container item xs={5}>
        <Grid item xs={12} mt={1} mb={1}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Activitatea de munca
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Lucreaza
              </Typography>
              <InputField
                type="checkbox"
                error={errors[pacient1grid9Key]}
                registration={register(pacient1grid9Key)}
              />
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <InputField
              className={
                mode === "create" && !lucreazaDisabled ? "required" : ""
              }
              disabled={!lucreazaDisabled}
              type="text"
              label="Loc de munca"
              error={errors[pacient1grid2Key]}
              registration={register(pacient1grid2Key)}
              style={{ width: "90%" }}
            />
            </Grid>
            <Grid item xs={6}>
            {cormStatus === "success" && cormOptions ? (
              <Controller
                name="profesie_specializare"
                control={control}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    width={180}
                    virtual
                    id="profesie-specializare-autocomplete"
                    label="Profesie specializare"
                    options={cormOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
            <Grid item xs={6}>
            {statutStatus === "success" && statutOptions ? (
              <Controller
                name="statut"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    width={160}
                    required={mode === "create"}
                    id="statut-autocomplete"
                    label="Statut"
                    options={statutOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          <Grid item xs={6} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              label={
                pacient1grid10Key[0].toUpperCase() +
                pacient1grid10Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid10Key]}
              registration={register(pacient1grid10Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6}  mt={1}>
            <SelectField
              required={mode === "create"}
              options={tipProbaStatus === "success" ? tipProbaOptions! : []}
              label={
                pacient1grid11Key[0].toUpperCase() +
                pacient1grid11Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid11Key]}
              registration={register(pacient1grid11Key, {
                required,
              })}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={4}  mt={1}>
            <SelectField
              required={mode === "create"}
              options={biospecimenStatus === "success" ? biospecimenOptions! : []}
              label={
                pacient1grid15Key[0].toUpperCase() +
                pacient1grid15Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid15Key]}
              registration={register(pacient1grid15Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              label={
                pacient1grid14Key[0].toUpperCase() +
                pacient1grid14Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid14Key]}
              registration={register(pacient1grid14Key, {
                required,
              })}
              style={{ width: "90%" }}             
            />
          </Grid>
          <Grid item xs={5}  mt={4}>
            <SelectField
              required={mode === "create"}
              options={unitateMasuraStatus === "success" ? unitateMasuraOptions! : []}
              label={
                pacient1grid13Key[0].toUpperCase() +
                pacient1grid13Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid13Key]}
              registration={register(pacient1grid13Key, {
                required,
              })}
              style={{ width: "75%" }}
            />
          </Grid>
          {pacient1Grid6.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField
                className={mode === "create" ? "required" : ""}
                type="date"
                label={key[0].toUpperCase() + key.replaceAll("_", " ").slice(1)}
                max={
                  index !== 1
                    ? maxDate &&
                      new Date(new Date(maxDate).getTime() - 86400000)
                        .toISOString()
                        .split("T")[0]
                    : undefined
                }
                error={errors[key]}
                registration={register(key, {
                  required,
                  onChange: (e) => {
                    if (key === "data_receptionare") {
                      const dataReceptionare = e.target.value;
                      setValue(key, dataReceptionare);

                      setMinMaxDate({
                        minDate: dataReceptionare,
                        maxDate: new Date(
                          new Date(dataReceptionare).getTime() + 86400000
                        )
                          .toISOString()
                          .split("T")[0],
                      });
                    }
                  },
                })}
                style={{ width: "90%" }}
              />
            </Grid>
          ))}
          {isSuccess && user && (
          <>
          {pacient1Grid7.map((key, index) => (
            <Grid item xs={6} key={key}>
              <InputField 
                readOnly={key === "persoana_receptionare"}
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                value={key === "persoana_receptionare" ? (user.name + " " + user.lastname) : undefined}
                error={errors[key]}
                registration={register(key)}
                style={{ width: "80%" }}
              />
            </Grid>
          ))}
          </>
          )}
          <Grid item xs={12}>
            <SelectField
              required={mode === "create"}
              options={transferatLaStatus === "success" ? transferatLaOptions! : []}
              label={
                pacient1grid8Key[0].toUpperCase() +
                pacient1grid8Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient1grid8Key]}
              registration={register(pacient1grid8Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PacientForm1;

