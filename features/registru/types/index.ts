import { Meta } from "types";

type GenericAnswer = "Da" | "Nu";

export type Registru = {
  action?:null;
  // setting?:null;
    id: number;
  
  prelevator: string; // Nume + prenume prin space

  dataPrelevarii: Date; //Data, ora colectări probei

  dataReceptionarii: Date; //Data, ora colectări probei

  probeNr: number;

  probeType: number;

  biospecimenType: number;

  sursaDeProvinienta: string;

  asigurat: boolean;

  domiciliu: string;

  lucreaza: boolean;

  statutul: string;

  profesia: string;

  cimxClinic: boolean;

  complicatii: string;

  comorbiditati: boolean;

  tumoriMaligne: boolean;

  afectiuniPsihice: boolean;

  diabetZaharat: boolean;

  cardiovasculare: boolean;

  hepatita: boolean;

  insuficientaRenala: boolean;

  obezitate: boolean;

  boliAutoimune: boolean;

  stareaGeneralaLaExaminare: StareaGenerala;

  taMin: number;
  taMax: number;

  pulsul: number;

  anamnezaVietii: string;

  antecedentePersonaleFiziologice: string;

  perioadaIncepereMaturizariiSexuale: number; // in ani

  sarcini: number;

  nasteri: number;

  avorturi: number;

  menopauza: number; //Când a apărut perioada de menopauză (la femei) xx (ani)

  fumeaza: boolean;
  citFumeaza: string;
  deCindFumeaza: string;
  perioadaDeAbstinenta: string;

  consumaAlcool: boolean;
  cantitateaAlcool: string;
  citDeDesAlcool: string;

  consumaNarcotici: boolean;
  alteDependenteDaunatoare: string;

  alergieMedicamente: boolean;
  alergieAlimentatie: boolean;
  alergieSubstanteChimice: boolean;
  alergieIntepaturiDeInsecte: boolean;
  alergiePolen: boolean; // p49 BIOB-13
  alergieAltele: boolean;

  antecendenteleEredoColaterale: string;
  varstaSiStareaSanatatii: string;
  parintiVarsta: number;
  copiiDonatoriVarsta: number;
  alteRudeVarsta: number;
  parintiStareSanatate: string;
  copiiDonatoriStareSanatate: string;
  alteRudeStareSanatate: string;

  venerice: boolean;
  psihoNeurologice: boolean;
  alergice: boolean;
  endocrine: boolean;
  metabolice: boolean;
  alcoholism: boolean;
  neoplasme: boolean;
  hemopoetice: boolean;
  lezareaOrganelor: boolean;

  cantitateLaColectare: number;
  cantitateLaColectareUnitate: string;
  persoanaCareColecteaza: string;
  alicotataParti: boolean;
  alicotareUnitate: string;

  dataEliberarii: string;
  denumireProiect: string;
  conducatorProiect: string;
  cantitateProiect: number;

  persoanaCareInregistreaza: string;
  persoanaCareElibereaza: string;

  donator: Donator;

  donator_id: number;
  user: {
    id: number;
    username: string;
    name: string;
    lastname: string;
  };
};

export type PaginatedRegistruResult = {
  map:any;
  meta: Meta;
  data: {
    result: {
      pacients: Registru[];
      // pageCount: number;
      // total: number;
    };
  };
};

export interface Donator {
  id:number;
  name:string,
  family:string,
  sex:string,
  birthday:string,
  urban:string,
  inaltimea: number,
  greutatea:number,
  casatorit:boolean
}
export enum StareaGenerala {
  Satisfacatoare = 'Satisfacatoare',
  Medie = 'Medie',
  Grava = 'Grava',
}