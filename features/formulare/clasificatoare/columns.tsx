import IndeterminateCheckbox from "@/components/IndeterminateCheckbox";
import { Stack, Typography } from "@mui/material";
import {
  AccessorFn,
  CellContext,
  ColumnDef,
  ColumnHelper,
  createColumnHelper,
  DeepKeys,
  HeaderContext,
} from "@tanstack/react-table";
import {
  Asigurat,
  CapacitateaDeMuncaColumns,
  Cetatenie,
  CIMXColumns,
  CormColumns,
  Etnie,
  FormaBoliiColumns,
  GrupaSangvinaColumns,
  IMSPColumns,
  LocalitateColumns,
  Lucreaza,
  RaionColumns,
  SectiaColumns,
  Sex,
  StareaLaExternareColumns,
  Statut,
  TemperaturaMaximaColumns,
  TerapiaCuOxigenColumns,
  TipulExternariiColumns,
  TipulInternariiColumns,
  TransferatLaColumns,
  TratamentulAdministratColumns,
  TrimisDeColumns,
  AnamnezaAlergologicaColumns,
  BiospecimenColumns,
  TipProbaColumns,
  TipProiectColumns
} from "./types";

type ColumnTypographyProps = {
  info?: CellContext<any, any>;
  children?: React.ReactNode;
};

const ColumnTypography: React.FC<ColumnTypographyProps> = ({
  info,
  children,
}) => (
  <Typography
    variant="subtitle2"
    textAlign="center"
    sx={{ color: "#000000", fontWeight: "600" }}
  >
    {info ? info.getValue() : children}
  </Typography>
);

function columnCreator<T extends object>(
  columnHelper: ColumnHelper<T>,
  accessor: DeepKeys<T>,
  header: string,
  size: number
): ColumnDef<T, any> {
  return columnHelper.accessor<DeepKeys<T> | AccessorFn<T, unknown>, any>(
    accessor,
    {
      id: accessor as string,
      cell: (info) => <ColumnTypography info={info} />,
      header: () => <ColumnTypography>{header}</ColumnTypography>,
      size,
    }
  );
}

const columnHelperAsigurat = createColumnHelper<Asigurat>();
const columnHelperCetatenie = createColumnHelper<Cetatenie>();
const columnHelperEtnie = createColumnHelper<Etnie>();
const columnHelperLucreaza = createColumnHelper<Lucreaza>();
const columnHelperSex = createColumnHelper<Sex>();
const columnHelperStatut = createColumnHelper<Statut>();
const columnHelperIMSP = createColumnHelper<IMSPColumns>();
const columnHelperSectia = createColumnHelper<SectiaColumns>();
const columnHelperCorm = createColumnHelper<CormColumns>();
const columnHelperTipProba = createColumnHelper<TipProbaColumns>();
const columnHelperTipProiect = createColumnHelper<TipProiectColumns>();
const columnHelperCapacitateaDeMunca =
  createColumnHelper<CapacitateaDeMuncaColumns>();
const columnHelperCIMX = createColumnHelper<CIMXColumns>();
const columnHelperBiospecimen = createColumnHelper<BiospecimenColumns>();
const columnHelperAnamnezaAlergologica = createColumnHelper<AnamnezaAlergologicaColumns>();
const columnHelperFormaBolii = createColumnHelper<FormaBoliiColumns>();
const columnHelperGrupaSangvina = createColumnHelper<GrupaSangvinaColumns>();
const columnHelperTransferatLa = createColumnHelper<TransferatLaColumns>();
const columnHelperRaion = createColumnHelper<RaionColumns>();
const columnHelperLocalitate = createColumnHelper<LocalitateColumns>();
const columnHelperStareLaExternare =
  createColumnHelper<StareaLaExternareColumns>();
const columnHelperTemperaturaMaxima =
  createColumnHelper<TemperaturaMaximaColumns>();
const columnHelperTerapiaCuOxigen =
  createColumnHelper<TerapiaCuOxigenColumns>();
const columnHelperTipulExternarii =
  createColumnHelper<TipulExternariiColumns>();
const columnHelperTipulInternarii =
  createColumnHelper<TipulInternariiColumns>();
const columnHelperTratamentulAdministrat =
  createColumnHelper<TratamentulAdministratColumns>();
const columnHelperTrimisDe = createColumnHelper<TrimisDeColumns>();

const id = {
  accessorKey: "id",
  cell: (info: CellContext<any, any>) => (
    <Stack direction="row" spacing={2}>
      <ColumnTypography>{info.row.index + 1}</ColumnTypography>
      <IndeterminateCheckbox
        {...{
          checked: info.row.getIsSelected(),
          indeterminate: info.row.getIsSomeSelected(),
          onChange: info.row.getToggleSelectedHandler(),
        }}
      />
    </Stack>
  ),
  header: ({ table }: HeaderContext<any, any>) => (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <ColumnTypography>Nr.</ColumnTypography>
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
  size: 50,
  enableColumnFilter: false,
};

const actiune = {
  accessorKey: "actiune",
  cell: (info: CellContext<any, any>) => <>{info.getValue()}</>,
  header: () => <ColumnTypography>Acțiune</ColumnTypography>,
  size: 50,
  enableColumnFilter: false,
};

export const asiguratColumns: ColumnDef<Asigurat>[] = [
  id,
  columnCreator(columnHelperAsigurat, "asigurat", "Asigurat", 300),
  actiune,
];

export const cetatenieColumns: ColumnDef<Cetatenie>[] = [
  id,
  columnCreator(columnHelperCetatenie, "cetatenie", "Țara", 200),
  actiune,
];

export const etnieColumns: ColumnDef<Etnie>[] = [
  id,
  columnCreator(columnHelperEtnie, "etnie", "Etnie", 300),
  actiune,
];

export const lucreazaColumns: ColumnDef<Lucreaza>[] = [
  id,
  columnCreator(columnHelperLucreaza, "lucreaza", "Lucreaza", 300),
  actiune,
];

export const sexColumns: ColumnDef<Sex>[] = [
  id,
  columnCreator(columnHelperSex, "sex", "Sex", 300),
  actiune,
];

export const statutColumns: ColumnDef<Statut>[] = [
  id,
  columnCreator(columnHelperStatut, "name", "Statut", 300),
  actiune,
];

export const imspColumns: ColumnDef<IMSPColumns>[] = [
  id,
  columnCreator(columnHelperIMSP, "code", "Cod IMSP", 200),
  columnCreator(columnHelperIMSP, "name", "IMSP", 300),
  actiune,
];

export const sectiaColumns: ColumnDef<SectiaColumns>[] = [
  id,
  columnCreator(columnHelperSectia, "name", "Sectia", 300),
  actiune,
];

export const cormColumns: ColumnDef<CormColumns>[] = [
  id,
  columnCreator(columnHelperCorm, "code", "Cod Corm", 200),
  columnCreator(columnHelperCorm, "name", "Corm", 300),
  actiune,
];

export const capacitateDeMuncaColumns: ColumnDef<CapacitateaDeMuncaColumns>[] =
  [
    id,
    columnCreator(
      columnHelperCapacitateaDeMunca,
      "name",
      "Capacitatea de Munca",
      300
    ),
    actiune,
  ];

export const cimxColumns: ColumnDef<CIMXColumns>[] = [
  id,
  columnCreator(columnHelperCIMX, "code", "Cod CIMX", 200),
  columnCreator(columnHelperCIMX, "name", "CIMX", 300),
  actiune,
];
export const anamnezaAlergologicaColumns: ColumnDef<AnamnezaAlergologicaColumns>[] = [
  id,
  columnCreator(columnHelperAnamnezaAlergologica, "name", "Anamneza alergologica", 300),
  actiune,
];
export const tipProbaColumns: ColumnDef<TipProbaColumns>[] = [
  id,
  columnCreator(columnHelperTipProba, "name", "Tip Proba", 300),
  actiune,
];
export const biospecimenColumns: ColumnDef<BiospecimenColumns>[] = [
  id,
  columnCreator(columnHelperBiospecimen, "name", "Biospecimen", 300),
  actiune,
];

export const formaBoliiColumns: ColumnDef<FormaBoliiColumns>[] = [
  id,
  columnCreator(columnHelperFormaBolii, "name", "Forma Bolii", 300),
  actiune,
];

export const grupaSangvinaColumns: ColumnDef<GrupaSangvinaColumns>[] = [
  id,
  columnCreator(columnHelperGrupaSangvina, "name", "Grupa Sangvina", 300),
  actiune,
];

export const transferatLaColumns: ColumnDef<TransferatLaColumns>[] = [
  id,
  columnCreator(columnHelperTransferatLa, "name", "transferat La", 300),
  actiune,
];

export const tipProiectColumns: ColumnDef<TipProiectColumns>[] = [
  id,
  columnCreator(columnHelperTipProiect, "tip", "Tip proiect", 300),
  columnCreator(columnHelperTipProiect, "denumire", "Denumire", 300),
  columnCreator(columnHelperTipProiect, "dataDeInceput", "Data de inceput", 300),
  columnCreator(columnHelperTipProiect, "conducator", "Conducator", 300),
  columnCreator(columnHelperTipProiect, "scopul", "Scopul", 300),
  columnCreator(columnHelperTipProiect, "obiectivele", "Obiectivele", 300),
  columnCreator(columnHelperTipProiect, "aprobareComitet", "Aprobare Comitet", 300),
  columnCreator(columnHelperTipProiect, "dataDeFinzalizare", "Data de finalizare", 300),
  columnCreator(columnHelperTipProiect, "rezumat", "Rezumat", 300),
  actiune,
];

export const raionColumns: ColumnDef<RaionColumns>[] = [
  id,
  columnCreator(columnHelperRaion, "name", "Raion", 300),
  actiune,
];

export const localitateColumns: ColumnDef<LocalitateColumns>[] = [
  id,
  columnCreator(columnHelperLocalitate, "code", "Cod", 200),
  columnCreator(columnHelperLocalitate, "name", "Localitate", 300),
  actiune,
];

export const stareLaExternareColumns: ColumnDef<StareaLaExternareColumns>[] = [
  id,
  columnCreator(
    columnHelperStareLaExternare,
    "name",
    "Stare la Externare",
    300
  ),
  actiune,
];

export const temperaturaMaximaColumns: ColumnDef<TemperaturaMaximaColumns>[] = [
  id,
  columnCreator(
    columnHelperTemperaturaMaxima,
    "name",
    "TemperaturaMaxima",
    300
  ),
  actiune,
];

export const terapiaCuOxigenColumns: ColumnDef<TerapiaCuOxigenColumns>[] = [
  id,
  columnCreator(columnHelperTerapiaCuOxigen, "name", "TerapiaCuOxigen", 300),
  actiune,
];

export const tipulExternariiColumns: ColumnDef<TipulExternariiColumns>[] = [
  id,
  columnCreator(columnHelperTipulExternarii, "name", "Tipul Externarii", 300),
  actiune,
];

export const tipulInternariiColumns: ColumnDef<TipulInternariiColumns>[] = [
  id,
  columnCreator(columnHelperTipulInternarii, "name", "Tipul Internarii", 300),
  actiune,
];

export const tratamentulAdministratColumns: ColumnDef<TratamentulAdministratColumns>[] =
  [
    id,
    columnCreator(
      columnHelperTratamentulAdministrat,
      "name",
      "Tratamentul Administrat",
      300
    ),
    actiune,
  ];

export const trimisDeColumns: ColumnDef<TrimisDeColumns>[] = [
  id,
  columnCreator(columnHelperTrimisDe, "name", "Trimis de", 300),
  actiune,
];
