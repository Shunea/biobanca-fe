import IndeterminateCheckbox from "@/components/IndeterminateCheckbox";
import { Stack, Typography } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import SettingsButton from "./components/SettingsButton";
import { Registru } from "./types";

const columnHelper = createColumnHelper<Registru>();

export const pacientColumns = [
  columnHelper.display({
    id: "action",
    cell: (props) => <SettingsButton row={props.row} />,
    header: () => null,
    enableColumnFilter: false,
    size: 10,
  }),
  columnHelper.accessor("id", {
    cell: ({ row, getValue }) => (
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
          textAlign="center"
        >
          {getValue()}
        </Typography>
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </Stack>
    ),
    header: ({ table }) => (
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
        >
          Nr. înregistrare
        </Typography>
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </Stack>
    ),
    enableColumnFilter: false,
    size: 30,
  }),
  columnHelper.accessor("user", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Autor
      </Typography>
    ),
    cell: (info) => {
      const { id, prelevator } = info.row.original;
      return (
        <Typography fontSize={13} fontWeight={600} textAlign="center">
          {id > 8518 && info.getValue()
            ? info.getValue().name + " " + info.getValue().lastname
            : prelevator}
        </Typography>
      );
    },
  }),
  columnHelper.accessor("prelevator", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Nume
      </Typography>
    ),
    cell: (info) => {
      const { id } = info.row.original;
      return (
        <Typography fontSize={13} fontWeight={600} textAlign="center">
          {id > 8518 ? info.renderValue() : ""}
        </Typography>
      );
    },
  }),
  columnHelper.accessor("dataPrelevarii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        data prelevarii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {/* @ts-ignore */}
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("dataReceptionarii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        data receptionarii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {/* @ts-ignore */}
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("probeNr", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Numarul probei
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("probeType", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        tipul porbei
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("biospecimenType", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        tipul biospecimenului
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("sursaDeProvinienta", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        sursa de provinienta
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("asigurat", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Asigurat
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("domiciliu", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Domiciliu
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("lucreaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Lucreaza/ nu lucreaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("statutul", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Statutul
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("profesia", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        profesia
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("cimxClinic", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cimx Clinic
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("complicatii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        complicatii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("comorbiditati", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        Comorbidități
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="left" width={200}>
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor(
    "tumoriMaligne",
    {
      header: () => (
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
        >
          tumori maligne
        </Typography>
      ),
      cell: (info) => (
        <Typography fontSize={13} fontWeight={600} textAlign="center">
          {info.renderValue()}
        </Typography>
      ),
      enableColumnFilter: false,
    }
  ),
  columnHelper.accessor("afectiuniPsihice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        afectiuniPsihice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("diabetZaharat", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        diabet zaharat
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("cardiovasculare", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cardiovasculare
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("hepatita", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        hepatita
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("insuficientaRenala", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        insuficienta renala
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("obezitate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        obezitate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("boliAutoimune", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        boliAutoimune
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("stareaGeneralaLaExaminare", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        stareaGeneralaLaExaminare
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("taMin", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        taMin
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("taMax", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        taMax
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("pulsul", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        pulsul
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("anamnezaVietii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        anamneza vietii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("antecedentePersonaleFiziologice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        antecedente personale fiziologice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("perioadaIncepereMaturizariiSexuale", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        perioada incepere maturizarii sexuale
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="left" width={200}>
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("sarcini", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        sarcini
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("nasteri", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        nasteri
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("avorturi", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        avorturi
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("menopauza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        menopauza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("fumeaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        fumeaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("citFumeaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cit fumeaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("deCindFumeaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        de cind fumeaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("perioadaDeAbstinenta", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        perioada de abstinenta
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("consumaAlcool", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        consuma alcool
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("cantitateaAlcool", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cantitatea alcool
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("citDeDesAlcool", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cit de des consuma alcool
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor(
    "consumaNarcotici",
    {
      header: () => (
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
        >
          consuma narcotici
        </Typography>
      ),
      cell: (info) => (
        <Typography fontSize={13} fontWeight={600} textAlign="left" width={200}>
          {info.renderValue()}
        </Typography>
      ),
      enableColumnFilter: false,
    }
  ),
  columnHelper.accessor("alteDependenteDaunatoare", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alte dependente daunatoare
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center" width={200}>
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergieMedicamente", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie medicamente
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergieAlimentatie", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie alimentatie
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergieSubstanteChimice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie Substante chimice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergieIntepaturiDeInsecte", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie intepaturi de insecte
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergiePolen", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie Polen
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergieAltele", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergie Altele
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  //////////////////////////
  columnHelper.accessor(
    "antecendenteleEredoColaterale",
    {
      header: () => (
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
        >
          antecendentele eredo colaterale
        </Typography>
      ),
      cell: (info) => (
        <Typography fontSize={13} fontWeight={600} textAlign="left" width={200}>
          {info.renderValue()}
        </Typography>
      ),
      enableColumnFilter: false,
    }
  ),
  columnHelper.accessor("varstaSiStareaSanatatii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        varsta si starea sanatatii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center" width={200}>
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("parintiVarsta", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        parinti varsta
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("copiiDonatoriVarsta", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        copii donatori varsta
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alteRudeVarsta", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alte rude varsta
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("parintiStareSanatate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        parinti stare sanatate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("copiiDonatoriStareSanatate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        copii donatori stare sanatate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alteRudeStareSanatate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alte rude stare sanatate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  //////////////////////////
  columnHelper.accessor(
    "venerice",
    {
      header: () => (
        <Typography
          variant="subtitle2"
          sx={{ color: "#000000", fontWeight: "600" }}
        >
          venerice
        </Typography>
      ),
      cell: (info) => (
        <Typography fontSize={13} fontWeight={600} textAlign="left" width={200}>
          {info.renderValue()}
        </Typography>
      ),
      enableColumnFilter: false,
    }
  ),
  columnHelper.accessor("psihoNeurologice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        psiho neurologice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center" width={200}>
        {info.renderValue()}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alergice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alergice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("endocrine", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        endocrine
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("metabolice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        metabolice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alcoholism", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alcoholism
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("neoplasme", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        neoplasme
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("hemopoetice", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        hemopoetice
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("lezareaOrganelor", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        lezarea organelor
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  ///////////////////
  columnHelper.accessor("cantitateLaColectare", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cantitate la colectare
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("cantitateLaColectareUnitate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cantitate la colectare unitate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("persoanaCareColecteaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        persoana care colecteaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alicotataParti", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alicotata parti
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("alicotareUnitate", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        alicotare unitate
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  ////////////////
  columnHelper.accessor("dataEliberarii", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        data eliberarii
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("denumireProiect", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        denumirePproiect
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("conducatorProiect", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        conducator proiect
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("cantitateProiect", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        cantitate proiect
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("persoanaCareInregistreaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        persoana care inregistreaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("persoanaCareElibereaza", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        persoana care elibereaza
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("donator_id", {
    header: () => (
      <Typography
        variant="subtitle2"
        sx={{ color: "#000000", fontWeight: "600" }}
      >
        donator id
      </Typography>
    ),
    cell: (info) => (
      <Typography fontSize={13} fontWeight={600} textAlign="center">
        {info.renderValue() || "-"}
      </Typography>
    ),
    enableColumnFilter: false,
  }),
];
