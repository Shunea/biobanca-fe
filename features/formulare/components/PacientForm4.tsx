import { InputField, SelectField } from "@/components/Form";
import { PacientStep4 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import shallow from "zustand/shallow";

export const pacient4grid1Key = "alicotata";
export const pacient4grid2Key = "nr_parti";
export const pacient4grid3Key = "cantitate_de_biospecimen_per_proba_alicotata";

interface PacientForm4Props {
  mode?: "create" | "edit";
  // inputValue:string;
}

const PacientForm4: React.FC<PacientForm4Props> = ({ mode = "create" }) => {
  const router = useRouter();
  const { pacientStep1, pacientStep4, pacient, setData, setPacient, setPartialPacient } =
    usePacientStore(
      (state) => ({
        pacientStep1:state.pacientStep1,
        pacientStep4: state.pacientStep4,
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
    watch,
    control,
    setValue,
    formState: { errors, dirtyFields, isValid },
  } = useForm<PacientStep4>({
    mode: "onChange",
    defaultValues: pacientStep4,
    values:
      mode === "edit" ? pacientFormValues(pacient)?.pacientStep4 : undefined,
  });
  const cantitate= pacientStep1.cantitate_proba;
  const watchAlicotata = watch("alicotata") === true;
  const nr_parti = watch(pacient4grid2Key);
  function calculateCantitate(cantitate, pacient4grid2Key) {
    return cantitate / pacient4grid2Key;
  }
  const biospecimen_per_aliquot = calculateCantitate(cantitate, nr_parti);


  const onSubmit: SubmitHandler<PacientStep4> = (data) => {
    if (mode === "create") {
      setData({ step: 4, data });
    } else {
      if (pacient !== null) {
        setPacient({ ...pacient, ...data });
        for (const [key, value] of Object.entries(data)) {
          if (dirtyFields[key as keyof PacientStep4]) {
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
      onSubmit={async (e) => {
        handleSubmit(onSubmit)(e);
        if (isValid) {
          if (mode === "create") {
            router.push("/formulare/pacient/5");
          } else {
            router.push("/formulare/pacient/editeaza/5");
          }
        }
      }}
    >
      <Grid container spacing={4}>
        <Grid container item xs={6} mr={8} rowSpacing={2}>
          <Grid item xs={12} >
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Alicotarea porbei <br /> 
            </Typography>
          </Grid>
          <Grid item xs={12} mt={-2}>
            <Stack direction="row" alignItems="center" >
              <Typography mt={-1} mr={1}>
                Alicotata
              </Typography>
              <InputField
                type="checkbox"
                error={errors[pacient4grid1Key]}
                registration={register(pacient4grid1Key,{
                })}
              />
              </Stack>
              <Stack direction="column" alignItems="start">
              <Grid item xs={2} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              value={!watchAlicotata ? "1" : undefined}
              label={
                pacient4grid2Key[0].toUpperCase() +
                pacient4grid2Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient4grid2Key]}
              registration={register(pacient4grid2Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
              <Grid item xs={12} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              disabled
              value={!watchAlicotata ? `${cantitate}` : `${biospecimen_per_aliquot}`}
              type="number"
              label={
                pacient4grid3Key[0].toUpperCase() +
                pacient4grid3Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient4grid3Key]}
              registration={register(pacient4grid3Key, {
                required,
              })}
              style={{ width: "23%" }}
            />
          </Grid>
              </Stack>
              </Grid>
        </Grid>

        <Grid container item xs={5}>
          <Grid item xs={6} mt={1}>
            <InputField
              readOnly
              label="numar proba"
              value={`${pacientStep1.nr_proba}`}
              error={errors[pacientStep1.nr_proba]}
              registration={register(pacient4grid1Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={6} mt={1}>
            <InputField
              readOnly
              label="tip proba"
              value={`${pacientStep1.tip_proba}`}
              error={errors[pacientStep1.tip_proba]}
              registration={register(pacient4grid1Key)}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={4} mt={1}>
            <InputField
              readOnly
              label="biospecimen prelevat"
              value={`${pacientStep1.biospecimen_prelevat}`}
              error={errors[pacientStep1.biospecimen_prelevat]}
              registration={register(pacient4grid1Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={3} mt={1}>
            <InputField
              readOnly
              label="cantitate probei"
              value={`${pacientStep1.cantitate_proba}`}
              error={errors[pacientStep1.cantitate_proba]}
              registration={register(pacient4grid1Key)}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5} mt={4}>
            <InputField
              readOnly
              label="unitate de masura"
              value={`${pacientStep1.unitate_masura}`}
              error={errors[pacientStep1.unitate_masura]}
              registration={register(pacient4grid1Key)}
              style={{ width: "75%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PacientForm4;
