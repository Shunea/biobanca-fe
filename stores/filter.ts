import create from "zustand";
import { devtools } from "zustand/middleware";

type Option = {
  label: string;
  value: string;
};

export type Filter = {
  fisa_medicala_nr?: number | null;
  IMSP?: Option[];
  sex?: string;
  asigurat?: string;
  loc_de_trai?: string;
  data_imbolnavirii?: { from: string; to: string }[];
  data_adresarii?: { from: string; to: string }[];
  data_internarii?: { from: string; to: string }[];
  varsta?: Option[];
  varsta_range?: { min: number; max: number }[];
  statut?: Option[];
  rp_mn?: Option[];
  trimis_de?: Option[];
  localitate?: Option[];
  spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza?: Option[];
  diagnosticul_de_trimitere?: Option[];
  diagnostic_trimitere_range?: { from: string; to: string }[];
  diagnostic_la_internare?: Option[];
  diagnostic_internare_range?: { from: string; to: string }[];
  data_externarii?: { from: string; to: string }[];
  tip_externare?: Option[];
  stare_externare?: Option[];
  capacitatea_de_munca?: Option[];
  diagnostic_principal_la_externare_deces?: Option[];
  diagnostic_principal_range?: { from: string; to: string }[];
  forma_bolii?: Option[];
  contact_cu_pacienti_cu_COVID?: Option[];
  calatorie_in_afara_tarii_in_ultimele_2_saptamani?: Option[];
  comorbiditati?: Option[];
  comorbiditati_range?: { from: string; to: string }[];
  manifestari_clinice_pe_parcursul_bolii?: Option[];
  investigatii_de_laborator_pe_parcursul_bolii?: Option[];
  modificari_imagistice_pulmonare?: Option[];
  numarul_de_teste_PCR_facute_in_timpul_bolii?: number;
  tratamentul_administrat?: Option[];
  terapia_cu_oxigen?: Option[];
  manifestari_clinice_la_externare_transfer?: Option[];
  investigatii_laborator_la?: Option[];
  investigatii_de_laborator_la_externare_transfer_deces?: Option[];
  imagistica_pulmonara_la?: Option[];
  imagistica_pulmonara_la_externare_transfer_deces?: Option[];
  total_cheltuieli?: { min: number; max: number }[];
};

type FilterStore = {
  filter: Filter;
  initialFilter: Filter;
  statisticaFilter: Filter;
  setFilter: (filter: Filter) => void;
  setStatisticaFilter: (filter: Filter) => void;
  resetFilter: () => void;
};

const initialFilter: Filter = {
  fisa_medicala_nr: null,
  IMSP: [],
  sex: "",
  asigurat: "",
  loc_de_trai: "",
  data_imbolnavirii: [
    {
      from: "",
      to: "",
    },
  ],
  data_adresarii: [
    {
      from: "",
      to: "",
    },
  ],
  data_internarii: [
    {
      from: "",
      to: "",
    },
  ],
  varsta: [],
  varsta_range: [
    {
      min: 0,
      max: null as any,
    },
  ],
  statut: [],
  rp_mn: [],
  trimis_de: [],
  spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza: [],
  diagnosticul_de_trimitere: [],
  diagnostic_trimitere_range: [
    {
      from: "",
      to: "",
    },
  ],
  diagnostic_la_internare: [],
  diagnostic_internare_range: [
    {
      from: "",
      to: "",
    },
  ],
  data_externarii: [
    {
      from: "",
      to: "",
    },
  ],
  tip_externare: [],
  stare_externare: [],
  capacitatea_de_munca: [],
  diagnostic_principal_la_externare_deces: [],
  diagnostic_principal_range: [
    {
      from: "",
      to: "",
    },
  ],
  forma_bolii: [],
  contact_cu_pacienti_cu_COVID: [],
  calatorie_in_afara_tarii_in_ultimele_2_saptamani: [],
  comorbiditati: [],
  comorbiditati_range: [
    {
      from: "",
      to: "",
    },
  ],
  manifestari_clinice_pe_parcursul_bolii: [],
  investigatii_de_laborator_pe_parcursul_bolii: [],
  modificari_imagistice_pulmonare: [],
  numarul_de_teste_PCR_facute_in_timpul_bolii: null as any,
  tratamentul_administrat: [],
  terapia_cu_oxigen: [],
  manifestari_clinice_la_externare_transfer: [],
  investigatii_laborator_la: [],
  investigatii_de_laborator_la_externare_transfer_deces: [],
  imagistica_pulmonara_la: [],
  imagistica_pulmonara_la_externare_transfer_deces: [],
  total_cheltuieli: [
    {
      min: null as any,
      max: null as any,
    },
  ],
};

export const useFilterStore = create<FilterStore>()(
  devtools((set) => ({
    filter: initialFilter,
    initialFilter,
    statisticaFilter: initialFilter,
    setFilter: (filter) => set({ filter }),
    setStatisticaFilter: (filter) => set({ statisticaFilter: filter }),
    resetFilter: () =>
      set({
        filter: initialFilter,
        statisticaFilter: initialFilter,
      }),
  }))
);
