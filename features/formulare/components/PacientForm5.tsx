import { InputField, SelectField } from "@/components/Form";
import { PacientStep5 } from "@/features/formulare/types";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import shallow from "zustand/shallow";
import { ZonaProbaOptions, DimensiuneCutieOptions } from "../clasificatoare/options";
import useCreatePacient from "@/hooks/mutations/useCreatePacient";
import useEditPacient from "@/hooks/mutations/useEditPacient";
import Image from "next/image";

import {
  Box,
  Button,
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import FormContainer from "./FormContainer";

export const pacient5Grid1: (keyof PacientStep5)[] = [
  "rand",
  "coloana",
];

export const pacient5grid1Key = "zona_probei";
export const pacient5grid2Key = "dimensiune_proba";
export const pacient5grid3Key = "nr_cutie";
export const pacient5grid4Key = "nr_proba";
export const pacient5grid5Key = "frigider";

interface PacientForm5Props {
  mode?: "create" | "edit";
}

const PacientForm5: React.FC<PacientForm5Props> = ({ mode = "create" }) => {
  const router = useRouter();
  const { 
    pacientStep1,
    pacientStep2,
    pacientStep3,
    pacientStep4,
    pacientStep5, pacient, setData, setPacient,reset, setPartialPacient } =
    usePacientStore(
      // (state)=>({
      //   pacientStep4:state.pacientStep4
      // }),
      // shallow
    );
  const { register, handleSubmit, formState:{errors,dirtyFields,isValid}, } = useForm<PacientStep5>({
    defaultValues: pacientStep5,
    values:
      mode === "edit" ? pacientFormValues(pacient)?.pacientStep5 : undefined,
  });
  const required = mode === "create" && "Acest câmp este obligatoriu";
  const createPacient = useCreatePacient();
  const editPacient = useEditPacient(pacient?.id);
  const parti = pacientStep4.nr_parti;
  const onSubmit: SubmitHandler<PacientStep5> = (data) => {
    if (mode === "create") {
      setData({ step: 5, data });
      createPacient.mutate(
        {
          ...pacientStep1,
          ...pacientStep2,
          ...pacientStep3,
          ...pacientStep4,
          ...data,
        },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    } else {
      if (pacient !== null) {
        setPacient({ ...pacient, ...data });
        for (const [key, value] of Object.entries(data)) {
          if (dirtyFields[key as keyof PacientStep5]) {
            setPartialPacient({ [key]: value });
          }
        }
        editPacient.mutate(
          {
            ...setPartialPacient,
          },
          {
            onSuccess: () => {
              reset();
            },
          }
        );
      }
    }
  };


  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
    const [fields, setFields] = useState([{ id: 1, parent: 1, groupId:1 }]);
    const [numGroups, setNumGroups] = useState(1);
    const addField = () => {
    const newId = fields.length + 1;
    const parent = Math.floor((fields.length) / 1) + 1;
    const groupId = numGroups + 1;
    setFields([...fields, { id: newId, parent, groupId }]);
    setNumGroups(numGroups + 1);
  };
  const removeField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <>
    <form
      id="pacient"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        handleClickOpen();
      }}
    >
      <Grid container spacing={12}>
      
       {fields.map((field) => (
        <>
        <Grid container item xs={6} columnSpacing={-7} rowSpacing={2} key={field.id}>
          <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
              Locatia probei {field.parent}
              <Button sx={{color:"#000"}}
                onClick={addField} >
                <Image
              src="/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
              </Button>
              <Button 
                 onClick={() => removeField(field.id)}>
          <Image
              src="/minus.svg"
              alt="minus"
              width={25}
              height={25}
            />
          </Button>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputField
              type="number"
              label="Frigiderul"
              min={0}
              error={errors[pacient5grid5Key]}
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
          <Grid item xs={12} mt={-2}>
            <SelectField
              required={mode === "create"}
              options={ZonaProbaOptions} 
              label="Zona probei"
              error={errors[pacient5grid1Key]}
              registration={register(pacient5grid1Key, {
                required,
              })}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      {/*   ))}
       {fields.map((field) => ( */}
        <Grid container item xs={6} mt={5} key={field.id}>
        <Grid item xs={12}>
            <SelectField
              required={mode === "create"}
              options={DimensiuneCutieOptions} 
              label="Dimensiunea cutiei"
              error={errors[pacient5grid2Key]}
              registration={register(pacient5grid2Key, {
                required,
              })}
              style={{ width: "100%" }}
            />
          </Grid>
        <Grid item xs={12}>
            <InputField
              type="number"
              label="Numarul probei"
              min={0}
              error={errors[pacient5grid4Key]}
              registration={register(pacient5grid4Key, {
                valueAsNumber: true,
              })}
              style={{ width: "100%" }}
            />{" "}
          </Grid>
        <Grid item xs={12}>
            <InputField
              type="number"
              label="Numarul cutiei"
              min={0}
              error={errors[pacient5grid3Key]}
              registration={register(pacient5grid3Key, {
                valueAsNumber: true,
              })}
              style={{ width: "100%" }}
            />{" "}
          </Grid>
        </Grid>
        </>
        ))}
      </Grid>
    </form>
    <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle
          sx={{
            color:
              createPacient.isError || editPacient.isError
                ? "#FF5E5E"
                : "#45CEC6",
            fontSize: "24px",
            fontWeight: 600,
            mt: 3,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {mode === "create" && !createPacient.isError
            ? "Pacientul a fost adăugat cu succes!"
            : mode === "create" && createPacient.isError
            ? "Eroare la adăugarea pacientului"
            : "Pacientul a fost editat cu succes!"}
        </DialogTitle>
        <Divider variant="middle" sx={{ mx: "65px" }} />
        <DialogActions sx={{ justifyContent: "center", mb: 3 }}>
          <MuiButton
            disableRipple
            color="primary"
            sx={{
              background:
                createPacient.isError || editPacient.isError
                  ? "#FF5E5E"
                  : "#45CEC6",
              p: "10px 60px",
              "&:hover": {
                background:
                  createPacient.isError || editPacient.isError
                    ? "#FF5E5E"
                    : "#45CEC6",
              },
            }}
            onClick={() => {
              if (
                (mode === "create" && !createPacient.isError) ||
                (mode === "edit" && !editPacient.isError)
              ) {
                router.push("/registru");
                handleClose();
              } else {
                handleClose();
              }
            }}
          >
            {createPacient.isError || editPacient.isError
              ? "Închide"
              : "Treci la registrul pacienților"}
          </MuiButton>
        </DialogActions>
        <Box
          sx={{
            background:
              createPacient.isError || editPacient.isError
                ? "#FF5E5E"
                : "#45CEC6",
            borderRadius: "5px",
            mt: 1,
            width: "100%",
            height: "13px",
          }}
        />
      </Dialog>
    </>
  );
};

export default PacientForm5;
