import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import { sexOptions,stareOptions } from "@/features/formulare/clasificatoare/options";
import { PacientStep3 } from "@/features/formulare/types";
import useCIMX from "@/hooks/queries/useCIMX";
import useStareaLaExternare from "@/hooks/queries/useStareaLaExternare";
import { usePacientStore } from "@/stores/pacient";
import { pacientFormValues } from "@/utils/pacientFormValues";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import shallow from "zustand/shallow";
import Image from "next/image";


export const pacient3Grid1: (keyof PacientStep3)[] = [
  "venerice",
  "psiho_neurologice",
  "alergice",
  "endocrine",
  "boli_schimb_substante",
  "alcoolism",
  "neoplasme",
  "boli_hematopoetice",
];
export const pacient3Grid2: (keyof PacientStep3)[] = [
  "cauza_decesului_parinti",
];
export const pacient3Grid3: (keyof PacientStep3)[] = [
  "cauza_decesului_copii",
];
export const pacient3Grid4: (keyof PacientStep3)[] = [
  "cauza_decesului_rude",
];

export const pacient3grid1Key  = "Lezarea_organelor_şi_sistemelor_în_care_au_fost_depistate_dereglări_patologice_la_bolnavul_examinat";
export const pacient3grid2Key  = "relatii_in_familie";
export const pacient3grid6Key  = "stare_parinti";
export const pacient3grid7Key  = "stare_copii";
export const pacient3grid8Key  = "stare_rude";
export const pacient3grid9Key  = "varsta_parinti";
export const pacient3grid10Key = "varsta_copii";
export const pacient3grid11Key = "varsta_rude";
export const pacient3grid12Key = "rude";
export const pacient3grid13Key = "sex_boli_parinti";
export const pacient3grid14Key = "sex_boli_copii";
export const pacient3grid15Key = "sex_parinti";
export const pacient3grid16Key = "sex_copii";

interface PacientForm3Props {
  mode?: "create" | "edit";
}

const PacientForm3: React.FC<PacientForm3Props> = ({ mode = "create" }) => {
  const router = useRouter();
  const { pacientStep3, pacient, setData, setPacient, setPartialPacient } =
    usePacientStore(
      (state) => ({
        pacientStep2: state.pacientStep2,
        pacientStep3: state.pacientStep3,
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
    control,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useForm<PacientStep3>({
    mode: "onChange",
    defaultValues: pacientStep3,
    values:
      mode === "edit" ? pacientFormValues(pacient)?.pacientStep3 : undefined,
  });
  const watchStareParintiDecedat = watch("stare_parinti") === "decedat";
  const watchStareCopiiDecedat = watch("stare_copii") === "decedat";
  const watchStareRudeDecedat = watch("stare_rude") === "decedat";

  const { status: cimxStatus, data: cimxData } = useCIMX();
  const cimxOptions = cimxData?.map((cimx) => ({
    value: cimx.code,
    label: cimx.nume_cod,
  }));

  const onSubmit: SubmitHandler<PacientStep3> = (data) => {
    if (mode === "create") {
      setData({ step: 3, data });
    } else {
      if (pacient !== null) {
        setPacient({ ...pacient, ...data });
        for (const [key, value] of Object.entries(data)) {
          if (dirtyFields[key as keyof PacientStep3]) {
            setPartialPacient({ [key]: value });
          }
        }
      }
    }
  };
  // const [fields, setFields] = useState<Field[]>([]);
  //   const [fields, setFields] = useState([{ id: 1, parent: 1, groupId:1 }]);
  // const [numGroups, setNumGroups] = useState(1);

  // const addField = () => {
  //   const newId = fields.length + 1;
  //   const parent = Math.floor(fields.length / 2) + 1;
  //   const groupId = numGroups;
  //   // setFields([...fields, { id: newId, parent, groupId, varsta: 0, sex: "", stare: "" }]);
  //       setFields([...fields, { id: newId, parent, groupId }]);
  //   setNumGroups(numGroups + 1);
  // };

  // const removeField = (id: number) => {
  //   const newFields = fields.filter((field) => field.id !== id);
  //   setFields(newFields);
  // };

  // const handleFieldChange = (id: number, key: keyof Field, value: any) => {
  //   const index = fields.findIndex((field) => field.id === id);
  //   const updatedFields = [...fields];
  //   updatedFields[index][key] = value;
  //   setFields(updatedFields);
  // };

  const [fields, setFields] = useState([{ id: 1, parent: 1, groupId:1 }]);
  const [fieldsCopil, setFieldsCopil] = useState([{ id: 1, child: 1 }]);
  const [fieldsRude, setFieldsRude] = useState([{ id: 1, ruda: 1 }]);
  const [numGroups, setNumGroups] = useState(1);


  const addField = () => {
    const newId = fields.length + 1;
    const parent = Math.floor((fields.length) / 1) + 1;
    const groupId = numGroups + 1;
    setFields([...fields, { id: newId, parent, groupId }]);
    setNumGroups(numGroups + 1);
  };
  const addFieldCopil = () => {
    const newId = fieldsCopil.length + 1;
    const child = Math.floor(fieldsCopil.length + 1);
    setFieldsCopil([...fieldsCopil, { id: newId, child }]);
  };
  const addFieldRude = () => {
    const newId = fieldsRude.length + 1;
    const ruda = Math.floor(fieldsRude.length + 1);
    setFieldsRude([...fieldsRude, { id: newId, ruda }]);
  };

  const removeField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };
  const removeFieldCopil = (id: number) => {
    setFieldsCopil(fieldsCopil.filter((field) => field.id !== id));
  };
  const removeFieldRude = (id: number) => {
    setFieldsRude(fieldsRude.filter((field) => field.id !== id));
  };

  const required = mode === "create" && "Acest câmp este obligatoriu";

  return (
    <form
      id="pacient"
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        if (isValid) {
          if (mode === "create") {
            router.push("/formulare/pacient/4");
          } else {
            router.push("/formulare/pacient/editeaza/4");
          }
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid container item xs={6} ml={-7} mr={5}  columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
            Vârsta şi starea sănătăţii (sau cauza morţii):  <br />
            <Button sx={{color:"#000"}}
                onClick={addField}
              ><Typography fontSize={15} mr={2}>
                 add parinte
              </Typography>
                <Image
              src="/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
              </Button>
            <Button sx={{color:"#000"}}
                onClick={addFieldCopil}
              ><Typography fontSize={15} mr={2}>
                 add copil
              </Typography><Image
              src="/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
              </Button>
            <Button sx={{color:"#000"}}
                onClick={addFieldRude}
              ><Typography fontSize={15} mr={2}>
              add rude
           </Typography>
           <Image
              src="/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
              </Button>
            </Typography>
          </Grid>
          {fields.map((field) => (
          <Grid container spacing={2} key={field.id}>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Typography  mt={-1} mr={1} ml={2}>
                Parinte: {field.parent}
              </Typography>
              <Grid item xs={3}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              label="Varsta"
              error={errors[pacient3grid9Key]}
              registration={register(pacient3grid9Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              required={mode === "create"}
              options={sexOptions}
              label="Sexul"
              error={errors[pacient3grid15Key]}
              registration={register(pacient3grid15Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
            <Grid item xs={6}>
            <SelectField
              options={stareOptions}
              label="Starea"
              registration={register(pacient3grid6Key)}
              style={{ width: "75%" }}
            />
          </Grid>
          <Grid item xs={1} ml={-5}>
          <Button sx={{paddingTop:"25px"}}
                 onClick={() => removeField(field.id)}>
          <Image
              src="/minus.svg"
              alt="minus"
              width={25}
              height={25}
            />
          </Button>
          </Grid>
            </Stack>
          </Grid>
          </Grid>
          ))}
           {fieldsCopil.map((field) => (
          <Grid item xs={12} key={field.id}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Copil: {field.child}
              </Typography>
              <Grid item xs={3.5} ml={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              label="Varsta"
              error={errors[pacient3grid10Key]}
              registration={register(pacient3grid10Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={5}>
            <SelectField
              required={mode === "create"}
              options={sexOptions}
              label="Sexul"
              error={errors[pacient3grid16Key]}
              registration={register(pacient3grid16Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
              <Grid item xs={6} >
            <SelectField
              options={stareOptions}
              label="Starea de sanatate"
              registration={register(pacient3grid7Key)}
              style={{ width: "75%" }}
            />
          </Grid>
          <Grid item xs={1} ml={-5}>
          <Button sx={{paddingTop:"25px"}}
                 onClick={() => removeFieldCopil(field.id)}>
          <Image
              src="/minus.svg"
              alt="minus"
              width={25}
              height={25}
            />
          </Button>
          </Grid>
            </Stack>
          </Grid>
           ))}
            {fieldsRude.map((field) => (
          <Grid item xs={12} key={field.id}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Alte rude: {field.ruda}
              </Typography>
              <Grid item xs={4} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="number"
              label="Varsta"
              error={errors[pacient3grid11Key]}
              registration={register(pacient3grid11Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
              <Grid item xs={6} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="text"
              label={
                pacient3grid12Key[0].toUpperCase() +
                pacient3grid12Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient3grid12Key]}
              registration={register(pacient3grid12Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={7} mt={1}>
            <SelectField
              options={stareOptions}
              label="Starea de sanatate"
              registration={register(pacient3grid8Key)}
              style={{ width: "75%" }}
            />
          </Grid>
          <Grid item xs={1} ml={-5}>
          <Button sx={{paddingTop:"25px"}}
                 onClick={() => removeFieldRude(field.id)}>
          <Image
              src="/minus.svg"
              alt="minus"
              width={25}
              height={25}
            />
          </Button>
          </Grid>
            </Stack>
          </Grid>
            ))}
            <Grid item xs={12} mt={1}>
            <InputField
              className={mode === "create" ? "required" : ""}
              type="text"
              label={
                pacient3grid2Key[0].toUpperCase() +
                pacient3grid2Key.replace(/_/g, " ").slice(1)
              }
              error={errors[pacient3grid2Key]}
              registration={register(pacient3grid2Key, {
                required,
              })}
              style={{ width: "90%" }}
            />
            
          </Grid>
        </Grid>

        <Grid container item xs={6}>
        <Grid item xs={12}>
            <Typography color="action.active" fontSize={18} fontWeight={600}>
             Au suferit părinţii sau rudele apropiate de boli 
            </Typography>
          </Grid>
          {fields.map((field) => (
        <Grid item xs={12}  key={field.id}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1} >
                Parinte: {field.parent}
              </Typography>
              <Grid item xs={6}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="boli_parinti"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    width={220}
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="boli_parinti-autocomplete"
                    label="Boli parinti"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          {pacient3Grid2.map((key, index) => (
            <Grid item xs={5} key={key}>
              <InputField
                disabled={!watchStareParintiDecedat}
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "85%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          ))}
          {fieldsCopil.map((field) => (
          <Grid item xs={12} key={field.id}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1}>
                Copil: {field.child}
              </Typography>
              <Grid item xs={6} ml={2}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="boli_copii"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    width={220}
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="boli_copii-autocomplete"
                    label="Boli copii"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          {pacient3Grid3.map((key, index) => (
            <Grid item xs={5} key={key}>
              <InputField
                disabled={!watchStareCopiiDecedat}
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "85%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          ))}
          {fieldsRude.map((field) => (
        <Grid item xs={12}  key={field.id}>
            <Stack direction="row" alignItems="center">
              <Typography mt={-1} mr={1.5}>
                Alte rude: {field.ruda}
              </Typography>
              <Grid item xs={6} ml={-2}>
            {cimxStatus === "success" && cimxOptions ? (
              <Controller
                name="boli_rude"
                control={control}
                rules={{ required }}
                render={({ field, fieldState }) => (
                  <AutoComplete
                    width={220}
                    required={mode === "create"}
                    multiselect
                    virtual
                    id="boli_rude-autocomplete"
                    label="Boli rude"
                    options={cimxOptions}
                    field={field}
                    fieldState={fieldState}
                  />
                )}
              />
            ) : null}
          </Grid>
          {pacient3Grid4.map((key, index) => (
            <Grid item xs={5} key={key}>
              <InputField
                disabled={!watchStareRudeDecedat}
                type="text"
                label={key[0].toUpperCase() + key.replace(/_/g, " ").slice(1)}
                registration={register(key)}
                style={{ width: "85%" }}
              />
            </Grid>
          ))}
            </Stack>
          </Grid>
          ))}
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
                    error={errors[key]}
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
                error={errors[pacient3grid1Key]}
                registration={register(pacient3grid1Key)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PacientForm3;
