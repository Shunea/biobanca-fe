import {
  covidOptions,
  defaultOptions,
  imagisticaExternareOptions,
  imagisticaLaOptions,
  imagisticaParcursOptions,
  investigatiiExternareOptions,
  investigatiiLaOptions,
  investigatiiParcursOptions,
  locDeTraiOptions,
  manifestariExternareOptions,
  manifestariParcursOptions,
  sexOptions,
  spitalizatOptions,
  terapiaOptions,
  varstaOptions,
} from "@/features/formulare/clasificatoare/options";
import useCapacitateaDeMunca from "@/hooks/queries/useCapacitateaDeMunca";
import useCIMX from "@/hooks/queries/useCIMX";
import useFormaBolii from "@/hooks/queries/useFormaBolii";
import useIMSP from "@/hooks/queries/useIMSP";
import useLocalitate from "@/hooks/queries/useLocalitate";
import useRaion from "@/hooks/queries/useRaion";
import useStareaLaExternare from "@/hooks/queries/useStareaLaExternare";
import useStatut from "@/hooks/queries/useStatut";
import useTipulExternarii from "@/hooks/queries/useTipulExternarii";
import useTratamentulAdministrat from "@/hooks/queries/useTratamentulAdministrat";
import useTrimisDe from "@/hooks/queries/useTrimisDe";
import { Filter, useFilterStore } from "@/stores/filter";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Dispatch, FormEvent, Fragment, SetStateAction } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { InputField } from "./Form";
import { AutoComplete } from "./Form/AutoComplete";
import { styled } from "@mui/system";

const MyDivWrap = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "10px",
});

const grid1: (keyof Filter)[] = ["sex", "asigurat", "loc_de_trai"];

const grid1Labels: string[] = ["Sex", "Tipul asigurarii", "Loc de trai"];

const grid1Placeholders: string[] = [
  "Selectează sex",
  "Selectează tipul asigurarii",
  "Selectează locul de trai",
];

const grid2: (keyof Filter)[] = ["varsta", "statut", "rp_mn", "trimis_de"];

const grid2Labels: string[] = ["Vârsta", "Statut", "Raion", "Trimis de"];

const grid2Placeholders: string[] = [
  "Selectează vârsta",
  "Selectează statutul",
  "Selectează raionul",
  "Selectează tipul",
];

const grid3: (keyof Filter)[] = [
  "localitate",
  "spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza",
  "diagnosticul_de_trimitere",
  "diagnostic_la_internare",
];

const grid3Labels: string[] = [
  "Localitate",
  "Tipul spitalizării",
  "Diagnostic de trimitere",
  "Diagnostic de internare",
];

const grid3Placeholders: string[] = [
  "Selectează localitatea",
  "Selectează tip spitalizare",
  "Selectează diagnostic de trimitere",
  "Selectează diagnostic de internare",
];

const grid4: (keyof Filter)[] = [
  "tip_externare",
  "stare_externare",
  "capacitatea_de_munca",
];

const grid4Labels: string[] = [
  "Tipul externării",
  "Starea externării",
  "Capacitatea de muncă",
];

const grid4Placeholders: string[] = [
  "Selectează tipul externării",
  "Selectează starea externării",
  "Selectează capacitatea de muncă",
];

const grid5: (keyof Filter)[] = [
  "diagnostic_principal_la_externare_deces",
  "forma_bolii",
  "contact_cu_pacienti_cu_COVID",
  "calatorie_in_afara_tarii_in_ultimele_2_saptamani",
];

const grid5Labels: string[] = [
  "Diagnostic principal la externare/deces",
  "Forma bolii",
  "Contact cu pacienți cu COVID",
  "Calatorie în afara țării în ultimele 2 săpt.",
];

const grid5Placeholders: string[] = [
  "Selectează diagnosticul principal",
  "Selectează forma bolii",
  "Selectează tipul",
  "Selectează tipul",
];

const grid6: (keyof Filter)[] = [
  "comorbiditati",
  "manifestari_clinice_pe_parcursul_bolii",
  "investigatii_de_laborator_pe_parcursul_bolii",
];

const grid6Labels: string[] = [
  "Comorbidități",
  "Manifestări clinice pe parcursul bolii",
  "Investigații de laborator",
];

const grid6Placeholders: string[] = [
  "Selectează comorbiditățile",
  "Selectează manifestările clinice",
  "Selectează investigațiile de laborator",
];

const grid7: (keyof Filter)[] = [
  "modificari_imagistice_pulmonare",
  "numarul_de_teste_PCR_facute_in_timpul_bolii",
  "tratamentul_administrat",
];

const grid7Labels: string[] = [
  "Modificări imagistice pulmonare",
  "Numărul de teste PCR făcute în timpul bolii",
  "Tratamentul administrat",
];

const grid7Placeholders: string[] = [
  "Selectează modificările imagistice pulmonare",
  "Selectează numărul de teste PCR",
  "Selectează tratamentul administrat",
];

interface FilterDialogProps {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  statistica?: boolean;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  openDialog,
  setOpenDialog,
  statistica,
}) => {
  const {
    filter,
    initialFilter,
    statisticaFilter,
    setFilter,
    setStatisticaFilter,
    resetFilter,
  } = useFilterStore();
  const { register, handleSubmit, reset, watch, control } = useForm<Filter>({
    defaultValues: initialFilter,
    values: statistica ? statisticaFilter : filter,
  });
  const { fields: dataImbolnaviriiFields } = useFieldArray<Filter>({
    control,
    name: "data_imbolnavirii",
  });
  const { fields: dataAdresariiFields } = useFieldArray<Filter>({
    control,
    name: "data_adresarii",
  });
  const { fields: dataInternariiFields } = useFieldArray<Filter>({
    control,
    name: "data_internarii",
  });
  const { fields: dataExternariiFields } = useFieldArray<Filter>({
    control,
    name: "data_externarii",
  });
  const { fields: diagnosticTrimitereFields } = useFieldArray<Filter>({
    control,
    name: "diagnostic_trimitere_range",
  });
  const { fields: diagnosticInternareFields } = useFieldArray<Filter>({
    control,
    name: "diagnostic_internare_range",
  });
  const { fields: diagnosticPrincipalFields } = useFieldArray<Filter>({
    control,
    name: "diagnostic_principal_range",
  });
  const { fields: comorbiditatiFields } = useFieldArray<Filter>({
    control,
    name: "comorbiditati_range",
  });
  const { fields: varstaFields } = useFieldArray<Filter>({
    control,
    name: "varsta_range",
  });
  const { fields: cheltuieliFields } = useFieldArray<Filter>({
    control,
    name: "total_cheltuieli",
  });

  const { status: imspStatus, data: imspData } = useIMSP({
    enabled: openDialog,
  });
  const imspOptions = imspData?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  const { status: capacitateaDeMuncaStatus, data: capacitateaDeMuncaData } =
    useCapacitateaDeMunca({
      enabled: openDialog,
    });
  const capacitateaDeMuncaOptions = capacitateaDeMuncaData?.map(
    (item) => ({
      value: item.name,
      label: item.name,
    })
  );

  const { status: cimxStatus, data: cimxData } = useCIMX({
    enabled: openDialog,
  });
  const cimxOptions = cimxData?.map((cimx) => ({
    value: cimx.code,
    label: cimx.nume_cod,
  }));

  const { status: formaboliiStatus, data: formaboliiData } = useFormaBolii({
    enabled: openDialog,
  });
  // const formaboliiOptions = formaboliiData?.map(
  //   (formabolii) => ({
  //     value: formabolii.name,
  //     label: formabolii.name,
  //   })
  // );

  const { status: localitateStatus, data: localitateData } = useLocalitate({
    enabled: openDialog,
  });
  const localitateOptions = localitateData?.map((item) => ({
    value: item.name,
    label: item.name,
  }));

  // const { status: raionStatus, data: raionData } = useRaion({
  //   enabled: openDialog,
  // });
  // const raionOptions = raionData?.map((item) => ({
  //   value: item.name,
  //   label: item.name,
  // }));

  const { status: statutStatus, data: statutData } = useStatut({
    enabled: openDialog,
  });
  const statutOptions = statutData?.map((statut) => ({
    value: statut.name,
    label: statut.name,
  }));

  const { status: stareaLaExternareStatus, data: stareaLaExternareData } =
    useStareaLaExternare({
      enabled: openDialog,
    });
  const stareaLaExternareOptions = stareaLaExternareData?.map(
    (stareaLaExternare) => ({
      value: stareaLaExternare.name,
      label: stareaLaExternare.name,
    })
  );

  const { status: tipulExternariiStatus, data: tipulExternariiData } =
    useTipulExternarii({
      enabled: openDialog,
    });
  const tipulExternariiOptions = tipulExternariiData?.map(
    (tipulExternarii) => ({
      value: tipulExternarii.name,
      label: tipulExternarii.name,
    })
  );

  const { status: trimisDeStatus, data: trimisDeData } = useTrimisDe({
    enabled: openDialog,
  });
  const trimisDeOptions = trimisDeData?.map((trimisDe) => ({
    value: trimisDe.name,
    label: trimisDe.name,
  }));

  const { status: tratamentStatus, data: tratamentData } =
    useTratamentulAdministrat({
      enabled: openDialog,
    });
  const tratamentOptions = tratamentData?.map((tratament) => ({
    value: tratament.name,
    label: tratament.name,
  }));

  const watchVarsta = watch("varsta");
  const watchVarstaDisabled = watchVarsta && watchVarsta.length > 0;
  const watchVarstaRange = watch("varsta_range");
  const watchVarstaRangeDisabled =
    watchVarstaRange && !!(watchVarstaRange[0].min || watchVarstaRange[0].max);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit((data) => {
      if (statistica) {
        setStatisticaFilter(data);
      } else {
        setFilter(data);
      }
      handleClose();
    })(e);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog fullWidth maxWidth="xl" open={openDialog} onClose={handleClose}>
      <Stack
        direction="row"
        justifyContent="end"
        sx={{
          maxHeight: "39px",
          mr: "12px",
          mt: -1,
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        <Typography color="#a3a3a3" fontSize={32} fontWeight={600}>
          x
        </Typography>
      </Stack>

      <DialogTitle
        sx={{
          color: "#45CEC6",
          fontSize: "24px",
          fontWeight: 600,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        SELECTEAZĂ FILTRE
      </DialogTitle>
      <DialogContent sx={{ px: 6, py: 2 }}>
        <form noValidate id="filter-form" onSubmit={(e) => onSubmit(e)}>
          <Stack spacing={2} mb={2}>
            <InputField
              min={0}
              type="number"
              label="Număr fisa medicală"
              registration={register("fisa_medicala_nr", {
                valueAsNumber: true,
              })}
              style={{ width: "20%", height: "27px" }}
            />
          </Stack>

          <Stack>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              IMSP / Sex / Tip de asigurare / Tip loc de trai
            </Typography>
            <MyDivWrap>
              <div>
                <Controller
                  name="IMSP"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id="imsp-autocomplete"
                      label="IMSP"
                      placeholder="Selectează IMSP"
                      options={imspStatus === "success" ? imspOptions! : []}
                      field={field}
                      width={300}
                    />
                  )}
                />
              </div>

              {grid1.map((item, index) => (
                <div key={item}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        multiselect
                        id={item}
                        label={grid1Labels[index]}
                        placeholder={grid1Placeholders[index]}
                        options={
                          index === 0
                            ? sexOptions
                            : index === 1
                            ? [
                                {
                                  value: "Asigurat",
                                  label: "Asigurat",
                                },
                                {
                                  value: "Neasigurat",
                                  label: "Neasigurat",
                                },
                              ]
                            : locDeTraiOptions
                        }
                        field={field}
                        width={300}
                      />
                    )}
                  />
                </div>
              ))}
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Data îmbolnăvirii / Data adresării / Data internării
            </Typography>
            <MyDivWrap>
              <div>
                <Typography textAlign="center">Data îmbolnăvirii</Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                  {dataImbolnaviriiFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(
                          `data_imbolnavirii.${index}.from`
                        )}
                      />

                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_imbolnavirii.${index}.to`)}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>

              <div>
                <Typography textAlign="center">Data adresării</Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                  {dataAdresariiFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_adresarii.${index}.from`)}
                      />

                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_adresarii.${index}.to`)}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>

              <div>
                <Typography textAlign="center">Data internării</Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                  {dataInternariiFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_internarii.${index}.from`)}
                      />

                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_internarii.${index}.to`)}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Vârsta / Statut / Raion / Trimis de
            </Typography>
            <MyDivWrap>
              {grid2.map((item, index) => (
                <div key={item} style={{ position: "relative" }}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        disabled={index === 0 && watchVarstaRangeDisabled}
                        multiselect
                        id={`${item}-autocomplete`}
                        label={grid2Labels[index]}
                        placeholder={grid2Placeholders[index]}
                        options={
                          index === 0
                            ? varstaOptions
                            : index === 1
                            ? statutStatus === "success"
                              ? statutOptions!
                              : []
                            // : index === 2
                            // ? raionStatus === "success"
                            //   ? raionOptions!
                            //   : []
                            : index === 3
                            ? trimisDeStatus === "success"
                              ? trimisDeOptions!
                              : []
                            : []
                        }
                        field={field}
                        width={275}
                      />
                    )}
                  />
                </div>
              ))}

              <div>
                <Typography textAlign="center">Vârsta</Typography>

                <Stack direction="row" spacing={2}>
                  {varstaFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        disabled={watchVarstaDisabled}
                        type="number"
                        min={1}
                        placeholder="de la X ani"
                        registration={register(`varsta_range.${index}.min`, {
                          valueAsNumber: true,
                        })}
                      />

                      <InputField
                        disabled={watchVarstaDisabled}
                        type="number"
                        min={1}
                        placeholder="până la X ani"
                        registration={register(`varsta_range.${index}.max`, {
                          valueAsNumber: true,
                        })}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Localitatea / Tipul spitalizării / Diagnostic de trimitere /
              Diagnostic de internare
            </Typography>
            <MyDivWrap>
              {grid3.map((item, index) => (
                <div key={item} style={{ position: "relative" }}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        multiselect
                        virtual={index !== 0}
                        id={`${item}-autocomplete`}
                        label={grid3Labels[index]}
                        placeholder={grid3Placeholders[index]}
                        options={
                          index === 0
                            ? localitateStatus === "success"
                              ? localitateOptions!
                              : []
                            : index === 1
                            ? spitalizatOptions
                            : cimxStatus === "success"
                            ? cimxOptions!
                            : []
                        }
                        field={field}
                        width={index > 1 ? 425 : 190}
                      />
                    )}
                  />
                </div>
              ))}

              <Grid item xs={4} />

              <Grid item xs={0.8} />

              <Grid item xs={2.5}>
                <Typography textAlign="center">Caută Diagnostic</Typography>

                <Stack direction="row" spacing={2}>
                  {diagnosticTrimitereFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="text"
                        placeholder="De la A****"
                        registration={register(
                          `diagnostic_trimitere_range.${index}.from`
                        )}
                      />

                      <InputField
                        type="text"
                        placeholder="Până la Z***"
                        registration={register(
                          `diagnostic_trimitere_range.${index}.to`
                        )}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={1.5} />

              <Grid item xs={2.5}>
                <Typography textAlign="center">Caută Diagnostic</Typography>

                <Stack direction="row" spacing={2}>
                  {diagnosticInternareFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="text"
                        placeholder="De la A****"
                        registration={register(
                          `diagnostic_internare_range.${index}.from`
                        )}
                      />

                      <InputField
                        type="text"
                        placeholder="Până la Z***"
                        registration={register(
                          `diagnostic_internare_range.${index}.to`
                        )}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </Grid>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Data externării / Tip externare / Stare externare / Capacitatea de
              muncă
            </Typography>
            <MyDivWrap>
              <div>
                <Typography textAlign="center">Data externării</Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                  {dataExternariiFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_externarii.${index}.from`)}
                      />

                      <InputField
                        type="date"
                        placeholder="zz/ll/aaaa"
                        registration={register(`data_externarii.${index}.to`)}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>

              {grid4.map((item, index) => (
                <div key={item} style={{ position: "relative" }}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        multiselect
                        id={`${item}-autocomplete`}
                        label={grid4Labels[index]}
                        placeholder={grid4Placeholders[index]}
                        options={
                          index === 0
                            ? tipulExternariiStatus === "success"
                              ? tipulExternariiOptions!
                              : []
                            : index === 1
                            ? stareaLaExternareStatus === "success"
                              ? stareaLaExternareOptions!
                              : []
                            : index === 2
                            ? capacitateaDeMuncaStatus === "success"
                              ? capacitateaDeMuncaOptions!
                              : []
                            : []
                        }
                        field={field}
                        width={275}
                      />
                    )}
                  />
                </div>
              ))}
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Diagnostic final / Forma bolii / Contact cu alți pacienți cu
              Covid-19 / Călătorie în afara țării în ultimele 2 săptămâni
            </Typography>
            <MyDivWrap>
              {grid5.map((item, index) => (
                <div key={item} style={{ position: "relative" }}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        multiselect
                        virtual={index === 0}
                        id={`${item}-autocomplete`}
                        label={grid5Labels[index]}
                        placeholder={grid5Placeholders[index]}
                        options={
                          index === 0
                            ? cimxStatus === "success"
                              ? cimxOptions!
                              : []
                            // : index === 1
                            // ? formaboliiStatus === "success"   //schimbat in ce trebuie
                            //   ? formaboliiOptions!// schimbat in ce trebuie
                            //   : []
                            : index === 2
                            ? covidOptions
                            : defaultOptions
                        }
                        field={field}
                        width={310}
                      />
                    )}
                  />
                </div>
              ))}

              <div>
                <Typography textAlign="center">Caută Diagnostic</Typography>

                <Stack direction="row" spacing={2}>
                  {diagnosticPrincipalFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="text"
                        placeholder="De la A****"
                        registration={register(
                          `diagnostic_principal_range.${index}.from`
                        )}
                      />

                      <InputField
                        type="text"
                        placeholder="Până la Z***"
                        registration={register(
                          `diagnostic_principal_range.${index}.to`
                        )}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Comorbidități / Manifestări clinice pe parcursul bolii /
              Investigații de laborator
            </Typography>
            <MyDivWrap>
              {grid6.map((item, index) => (
                <div key={item} style={{ position: "relative" }}>
                  <Controller
                    name={item}
                    control={control}
                    render={({ field }) => (
                      <AutoComplete
                        multiselect
                        virtual={index === 0}
                        id={`${item}-autocomplete`}
                        label={grid6Labels[index]}
                        placeholder={grid6Placeholders[index]}
                        options={
                          index === 0
                            ? cimxStatus === "success"
                              ? cimxOptions!
                              : []
                            : index === 1
                            ? manifestariParcursOptions
                            : investigatiiParcursOptions
                        }
                        field={field}
                        width={430}
                      />
                    )}
                  />
                </div>
              ))}

              <div>
                <Typography textAlign="center">Caută Comorbidități</Typography>

                <Stack direction="row" spacing={2}>
                  {comorbiditatiFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="text"
                        placeholder="De la A****"
                        registration={register(
                          `comorbiditati_range.${index}.from`
                        )}
                      />

                      <InputField
                        type="text"
                        placeholder="Până la Z***"
                        registration={register(
                          `comorbiditati_range.${index}.to`
                        )}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Modificări imagistice pulmonare/ Câte teste PCR-uri au fost
              făcute/ Tratamentul administrat
            </Typography>
            <MyDivWrap>
              {grid7.map((item, index) => (
                <Fragment key={item}>
                  {" "}
                  {index !== 1 ? (
                    <div style={{ position: "relative" }}>
                      <Controller
                        name={item}
                        control={control}
                        render={({ field }) => (
                          <AutoComplete
                            multiselect
                            id={`${item}-autocomplete`}
                            label={grid7Labels[index]}
                            placeholder={grid7Placeholders[index]}
                            options={
                              index === 2
                                ? tratamentStatus === "success"
                                  ? tratamentOptions!
                                  : []
                                : imagisticaParcursOptions
                            }
                            field={field}
                            width={420}
                          />
                        )}
                      />
                    </div>
                  ) : (
                    <>
                      <Grid item xs={1} />
                      <div>
                        <InputField
                          type="number"
                          label="Câte teste PCR-uri au fost"
                          placeholder="Număr"
                          registration={register(item, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <Grid item xs={1} />
                    </>
                  )}
                </Fragment>
              ))}
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Terapia cu oxigen / Manifestări clinice la externare /
              Investigații de laborator la:
            </Typography>
            <MyDivWrap>
              <div style={{ position: "relative" }}>
                <Controller
                  name="terapia_cu_oxigen"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`terapia-cu-oxigen-autocomplete`}
                      label="Terapia cu oxigen"
                      placeholder="Selectează terapia"
                      options={terapiaOptions}
                      field={field}
                      width={315}
                    />
                  )}
                />
              </div>

              <div style={{ position: "relative" }}>
                <Controller
                  name="manifestari_clinice_la_externare_transfer"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`manifestari-clinice-externare-autocomplete`}
                      label="Manifestări clinice la externare"
                      placeholder="Selectează manifestari"
                      options={manifestariExternareOptions}
                      field={field}
                      width={315}
                    />
                  )}
                />
              </div>

              <Grid item xs={0.5} />

              <div style={{ position: "relative" }}>
                <Controller
                  name="investigatii_laborator_la"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`investigatii-la-autocomplete`}
                      label="Investigații de laborator la:"
                      placeholder="Selectează tip "
                      options={investigatiiLaOptions}
                      field={field}
                      width={240}
                    />
                  )}
                />
              </div>

              <div style={{ position: "relative" }}>
                <Controller
                  name="investigatii_de_laborator_la_externare_transfer_deces"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`investigatii-de-laborator-autocomplete`}
                      label="‎"
                      placeholder="Selectează tip investigații "
                      options={investigatiiExternareOptions}
                      field={field}
                      width={320}
                    />
                  )}
                />
              </div>
            </MyDivWrap>
          </Stack>

          <Stack mt={8}>
            <Typography
              color="action.active"
              fontSize={18}
              fontWeight={600}
              mb={1}
            >
              Imagistica pulmonară la: / Cheltuieli
            </Typography>
            <MyDivWrap>
              <div style={{ position: "relative" }}>
                <Controller
                  name="imagistica_pulmonara_la"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`imagistica-la-autocomplete`}
                      label="Imagistica pulmonară la:"
                      placeholder="Selectează tip "
                      options={imagisticaLaOptions}
                      field={field}
                      width={200}
                    />
                  )}
                />
              </div>
              <div style={{ position: "relative" }}>
                <Controller
                  name="imagistica_pulmonara_la_externare_transfer_deces"
                  control={control}
                  render={({ field }) => (
                    <AutoComplete
                      multiselect
                      id={`imagistica-la-externare-autocomplete`}
                      label="‎"
                      placeholder="Selectează tip imagistica"
                      options={imagisticaExternareOptions}
                      field={field}
                      width={430}
                    />
                  )}
                />
              </div>

              <Grid item xs={1} />

              <div>
                <Typography textAlign="center">Cheltuieli</Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                  {cheltuieliFields.map((field, index) => (
                    <Fragment key={field.id}>
                      <InputField
                        type="number"
                        step={0.01}
                        placeholder="de la X lei"
                        registration={register(
                          `total_cheltuieli.${index}.min`,
                          {
                            valueAsNumber: true,
                          }
                        )}
                      />

                      <InputField
                        type="number"
                        step={0.01}
                        placeholder="pana la Y lei"
                        registration={register(
                          `total_cheltuieli.${index}.max`,
                          {
                            valueAsNumber: true,
                          }
                        )}
                      />
                    </Fragment>
                  ))}
                </Stack>
              </div>
            </MyDivWrap>
          </Stack>
        </form>
      </DialogContent>

      <Divider variant="middle" sx={{ mx: "65px", mb: 4 }} />

      <DialogActions sx={{ justifyContent: "center", mb: 3 }}>
        <Stack direction="row" spacing={2}>
          <button form="filter-form" type="submit">
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                background: "#fff",
                borderRadius: "3px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                height: "51px",
                px: 1,
                cursor: "pointer",
              }}
            >
              <Image src="/filter.svg" alt="filtru" width={24} height={24} />
              <Typography fontSize={13} fontWeight={400} sx={{ ml: 1 }}>
                Aplică {<br />} filtrare
              </Typography>
            </Stack>
          </button>

          <button
            type="button"
            onClick={() => {
              reset(initialFilter);
              resetFilter();
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                background: "#fff",
                borderRadius: "3px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                height: "51px",
                ml: "16px !important",
                px: 1,
                cursor: "pointer",
              }}
            >
              <Image src="/delete.svg" alt="sterge" width={24} height={24} />
              <Typography fontSize={13} fontWeight={400} sx={{ ml: 1 }}>
                Șterge {<br />}
                filtrare
              </Typography>
            </Stack>
          </button>
        </Stack>
      </DialogActions>
      <Box
        sx={{
          background: "#45CEC6",
          borderRadius: "5px",
          mt: 1,
          width: "100%",
          height: "13px",
        }}
      />
    </Dialog>
  );
};

export default FilterDialog;
