import {
  PacientStep1,
  PacientStep2,
  PacientStep3,
  PacientStep4,
  PacientStep5,
  ServerPacient,
} from "@/features/formulare/types";
import create from "zustand";
import { devtools } from "zustand/middleware";

const stepVariant = {
  1: "pacientStep1",
  2: "pacientStep2",
  3: "pacientStep3",
  4: "pacientStep4",
  5: "pacientStep5",
};

type setDataType =
  | { step: 1; data: PacientStep1 }
  | { step: 2; data: PacientStep2 }
  | { step: 3; data: PacientStep3 }
  | { step: 4; data: PacientStep4 }
  | { step: 5; data: PacientStep5 };

interface PacientStore extends PacientStoreState, PacientStoreActions {}

type PacientStoreState = {
  pacientStep1: PacientStep1;
  pacientStep2: PacientStep2;
  pacientStep3: PacientStep3;
  pacientStep4: PacientStep4;
  pacientStep5: PacientStep5;
  pacient: ServerPacient | null;
  previewPacient: ServerPacient | null;
  partialPacient: Partial<ServerPacient> | null;
};

type PacientStoreActions = {
  setData: ({ step, data }: setDataType) => void;
  setPacient: (pacient: ServerPacient) => void;
  setPreviewPacient: (pacient: ServerPacient) => void;
  setPartialPacient: (pacient: Partial<ServerPacient>) => void;
  reset: () => void;
};

const initialState: PacientStoreState = {
  pacientStep1: {
    rh:"",
    IMSP: "",
    imsp_id: null as any,
    loc_de_munca: "",
    nume: "",
    prenume: "",
    patronimicul: "",
    IDNP: "",
    data_nasterii: "",
    varsta: 0,
    sex: "",
    statut:"",
    cetatenie: "",
    etnie: "",
    loc_de_trai: "",
    rp_mn: "",
    rp_localitate: "",
    rp_strada: "",
    nr_proba: 0,
    tip_proba:"",
    biospecimen_prelevat:"",
    data_prelevarii:"",
    persoana_prelevarii:"",
    data_receptionare:"",
    persoana_receptionare:"",
    sursa_provenienta_proba:"",
    lucreaza: false,
    profesie_specializare: "",
    grupa_sangvina:"",
    cantitate_proba:0,
    unitate_masura:"",
  },
  pacientStep2: {
    stare_generala:"",
    cod_si_diagnostic: "",
    boli_autoimune:"",
    casatorit: false,
    fumeaza:false,
    consum_alcool:false,
    subst_narc:false,
    ce_cantitate_fumeaza:0,
    de_cati_ani_fumeaza:0,
    ce_cantitate_alcool:0,
    de_cati_ani_alcool:0,
    ce_cantitate_narcotice:0,
    de_cati_ani_narcotice:0,
    perioada_maturizarii_sexuale: "",
    nr_sarcini: "",
    nr_nasteri: "",
    nr_avorturi: "",
    aparitia_perioadei_de_menopauza:"",
    alte_deprinderi_daunatoare:"",
    comorbiditati: "",
    anamneza_alergologica:"",
    TA: "",
    inaltime: 0,
    greutate: 0,
    puls: 0,
    tip_proiect:"",
  },
  pacientStep3: {
    Lezarea_organelor_şi_sistemelor_în_care_au_fost_depistate_dereglări_patologice_la_bolnavul_examinat: false,
    venerice:false,
    psiho_neurologice:false,
    alergice:false,
    endocrine:false,
    boli_schimb_substante:false,
    alcoolism:false,
    neoplasme:false,
    boli_hematopoetice:false,
    cauza_decesului_parinti:"",
    cauza_decesului_copii:"",
    cauza_decesului_rude:"",
    varsta_parinti:0,
    varsta_copii:0,
    varsta_rude:0,
    stare_parinti:"",
    stare_copii:"",
    stare_rude:"",
    boli_parinti:"",
    boli_copii:"",
    boli_rude:"",
    rude:"",
    relatii_in_familie:"",
    sex_boli_copii:"",
    sex_boli_parinti:"",
    sex_parinti:"",
    sex_copii:"",
  },
  pacientStep4: {
    cantitate_de_biospecimen_per_proba_alicotata: 0,
    nr_parti: 0,
    alicotata: false,
    cantitate_proba:0
  },
  pacientStep5: {
    zona_probei: "",
    dimensiune_proba: "",
    frigider: 0,
    rand: 0,
    coloana: 0,
    nr_proba: 0,
    nr_cutie: 0,
  },
  pacient: null,
  partialPacient: null,
  previewPacient: null,
};

export const usePacientStore = create<PacientStore>()(
  devtools((set) => ({
    ...initialState,

    setData: ({ step, data }) => {
      set((state) => ({
        ...state,
        [stepVariant[step]]: data,
      }));
    },

    setPacient: (pacient) => {
      set((state) => ({
        ...state,
        pacient,
      }));
    },

    setPartialPacient: (data) => {
      set((state) => ({
        ...state,
        partialPacient: {
          ...state.partialPacient,
          ...data,
        },
      }));
    },

    setPreviewPacient: (previewPacient) => {
      set((state) => ({
        ...state,
        previewPacient,
      }));
    },

    reset: () => {
      set(initialState);
    },
  }))
);
