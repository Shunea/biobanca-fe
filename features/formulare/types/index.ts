import { Meta } from "types";

export type PacientStep1 = {
  rh: string;
  IMSP: string;
  imsp_id: number;
  loc_de_munca: string;
  nume: string;
  prenume: string;
  patronimicul: string;
  IDNP: string;
  data_nasterii: string;
  varsta: number;
  sex: string; //
  cetatenie: string;
  statut: string;
  etnie: string;
  loc_de_trai: string; //
  rp_mn: string;
  rp_localitate: string;
  rp_strada: string;
  nr_proba: number; //
  tip_proba: string; //
  biospecimen_prelevat: string;
  data_prelevarii: string; //
  persoana_prelevarii: string; //
  data_receptionare: string;
  persoana_receptionare: string;
  sursa_provenienta_proba: string;
  lucreaza: boolean;
  profesie_specializare: string;
  grupa_sangvina: string;
  cantitate_proba: number;
  unitate_masura: string;
};

export type PacientStep2 = {
  stare_generala: string;
  cod_si_diagnostic: string;
  casatorit: boolean;
  perioada_maturizarii_sexuale: string;
  nr_sarcini: string;
  nr_nasteri: string;
  nr_avorturi: string;
  aparitia_perioadei_de_menopauza: string;
  comorbiditati: string;
  fumeaza: boolean;
  consum_alcool: boolean;
  subst_narc: boolean;
  ce_cantitate_fumeaza: number;
  de_cati_ani_fumeaza: number;
  ce_cantitate_alcool: number;
  de_cati_ani_alcool: number;
  ce_cantitate_narcotice: number;
  de_cati_ani_narcotice: number;
  alte_deprinderi_daunatoare: string;
  anamneza_alergologica: string;
  TA: string;
  inaltime: number;
  greutate: number;
  puls: number;
  tip_proiect: string;
  boli_autoimune: string;
};

export type PacientStep3 = {
  Lezarea_organelor_şi_sistemelor_în_care_au_fost_depistate_dereglări_patologice_la_bolnavul_examinat: boolean;
  venerice: boolean;
  psiho_neurologice: boolean;
  alergice: boolean;
  endocrine: boolean;
  boli_schimb_substante: boolean;
  alcoolism: boolean;
  neoplasme: boolean;
  boli_hematopoetice: boolean;
  cauza_decesului_parinti: string;
  cauza_decesului_copii: string;
  cauza_decesului_rude: string;
  varsta_parinti: number;
  varsta_copii: number;
  varsta_rude: number;
  stare_parinti: string;
  stare_copii: string;
  stare_rude: string;
  rude: string;
  boli_parinti: string;
  boli_copii: string;
  boli_rude: string;
  relatii_in_familie: string;
  sex_boli_copii: string;
  sex_boli_parinti: string;
  sex_parinti: string;
  sex_copii: string;
};

export type PacientStep4 = {
  cantitate_de_biospecimen_per_proba_alicotata: number;
  nr_parti: number;
  alicotata: boolean;
  cantitate_proba: number;
};

export type PacientStep5 = {
  zona_probei: string;
  dimensiune_proba: string;
  frigider: number;
  rand: number;
  coloana: number;
  nr_proba: number;
  nr_cutie: number;
};

export type Pacient = {} & PacientStep1 &
  Omit<PacientStep2, "diagnosticArray"> &
  PacientStep3 &
  PacientStep4 &
  PacientStep5;

export interface ServerPacient extends Pacient {
  id: number;
  createdAt: string;
  deletedAt: string;
  lastInteractedAt: string;
  lastInteractedUserId: string;
  // nume_prenume: string;
  // anul_nasterii: number;
}

export type GetOnePacientResult = {
  meta: Meta;
  data: {
    result: ServerPacient;
  };
};

export type GetPacientsResult = {
  meta: Meta;
  data: {
    result: [ServerPacient[], number];
  };
};
