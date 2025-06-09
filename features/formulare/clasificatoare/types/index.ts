import { Meta } from "types";

type CommonColumns = {
  id: number;
  actiune?: any;
};

type GenericAnswer = "Da" | "Nu";

export type Sex = {
  sex: "M" | "F";
} & CommonColumns;

export type Asigurat = {
  asigurat: GenericAnswer;
} & CommonColumns;

export type Lucreaza = {
  lucreaza: GenericAnswer;
} & CommonColumns;

export type Cetatenie = {
  cetatenie: "RM" | "ES";
} & CommonColumns;

export type Etnie = {
  etnie: "Moldovean" | "Spaniol";
} & CommonColumns;

export type CapacitateaDeMunca = {
  id: number;
  name: string;
};

export type CapacitateaDeMuncaResult = {
  map:any;
  meta: Meta;
  data: {
    result: [CapacitateaDeMunca[], number];
  };
};

export type CapacitateaDeMuncaColumns = CapacitateaDeMunca & CommonColumns;

export type CIMX = {
  id: number;
  name: string;
  code: string;
  nume_cod: string;
};

export type CIMXResult = {
  map: any;
  meta: Meta;
  data: {
    result: [CIMX[], number];
  };
};

export type CIMXColumns = CIMX & CommonColumns;

export type AnamnezaAlergologica = {
  id: number;
  name: string;
};

export type AnamnezaAlergologicaResult = {
  map: any;
  meta: Meta;
  data: {
    result: [AnamnezaAlergologica[], number];
  };
};

export type AnamnezaAlergologicaColumns = AnamnezaAlergologica & CommonColumns;

export type Biospecimen = {
  id: number;
  name: string;
};

export type BiospecimenResult = {
  map: any;
  meta: Meta;
  data: {
    result: [Biospecimen[], number];
  };
};

export type BiospecimenColumns = Biospecimen & CommonColumns;

export type Boli = {
  id: number;
  name: string;
};

export type BoliResult = {
  map: any;
  meta: Meta;
  data: {
    result: [Biospecimen[], number];
  };
};

export type BoliColumns = Boli & CommonColumns;

export type Corm = {
  id: number;
  name: string;
  code: number;
};

export type CormResult = {
  map:any;
  meta: Meta;
  data: {
    result: [Corm[], number];
  };
};

export type CormColumns = Corm & CommonColumns;

export type FormaBolii = {
  id: number;
  name: string;
};

export type FormaBoliiResult = {
  meta: Meta;
  data: {
    result: [FormaBolii[], number];
  };
};

export type FormaBoliiColumns = FormaBolii & CommonColumns;

export type GrupaSangvina = {
  id: number;
  name: string;
};

export type GrupaSangvinaResult = {
  map:any;
  meta: Meta;
  data: {
    result: [GrupaSangvina[], number];
  };
};

export type GrupaSangvinaColumns = GrupaSangvina & CommonColumns;

export type IMSP = {
  id: number;
  name: string;
  code: number;
};

export type IMSPResult = {
  map:any;
  meta: Meta;
  data: {
    result: [IMSP[], number];
  };
};

export type IMSPColumns = IMSP & CommonColumns;

export type Localitate = {
  id: number;
  name: string;
  code: number;
};

export type LocalitateResult = {
  map:any;
  meta: Meta;
  data: {
    result: [Localitate[], number];
  };
};

export type LocalitateColumns = Localitate & CommonColumns;

export type Orase = {
  id: number;
  name: string;
};

export type OraseResult = {
  meta: Meta;
  data: {
    result: [Orase[], number];
  };
};

export type OraseColumns = Orase & CommonColumns;

export type Raion = {
  id: number;
  name: string;
  code: number;
};

export type RaionResult = {
  map: any;
  meta: Meta;
  data: {
    result: [Raion[], number];
  };
};

export type RaionColumns = Raion & CommonColumns;

export type Sat = {
  id: number;
  name: string;
  code: number;
  type: string;
};

export type SatResult = {
  meta: Meta;
  data: {
    result: [Sat[], number];
  };
};

export type SatColumns = Sat & CommonColumns;

export type Statut = {
  id: number;
  name: string;
};

export type Sectia = {
  id: number;
  name: string;
  imsp_id: number;
};

export type SectiaColumns = Sectia & CommonColumns;

export type SectiaResult = {
  map:any;
  meta: Meta;
  data: {
    result: [Sectia[], number];
  };
};

export type StatutResult = {
  map: any;
  meta: Meta;
  data: {
    result: [Statut[], number];
  };
};

export type StatutColumns = Statut & CommonColumns;

export type StareaLaExternare = {
  id: number;
  name: string;
};

export type StareaLaExternareResult = {
  map:any;
  meta: Meta;
  data: {
    result: [StareaLaExternare[], number];
  };
};

export type StareaLaExternareColumns = StareaLaExternare & CommonColumns;

export type TemperaturaMaxima = {
  id: number;
  name: string;
};
export type TemperaturaMaximaResult = {
  map:any;
  meta: Meta;
  data: {
    result: [TemperaturaMaxima[], number];
  };
};

export type TemperaturaMaximaColumns = TemperaturaMaxima & CommonColumns;

export type TerapiaCuOxigen = {
  id: number;
  name: string;
};

export type TerapiaCuOxigenResult = {
  meta: Meta;
  data: {
    result: [TerapiaCuOxigen[], number];
  };
};

export type TerapiaCuOxigenColumns = TerapiaCuOxigen & CommonColumns;

export type TipulExternarii = {
  id: number;
  name: string;
};

export type TipulExternariiResult = {
  map:any;
  meta: Meta;
  data: {
    result: [TipulExternarii[], number];
  };
};

export type TipulExternariiColumns = TipulExternarii & CommonColumns;

export type TipulInternarii = {
  id: number;
  name: string;
};

export type TipulInternariiResult = {
  meta: Meta;
  data: {
    result: [TipulInternarii[], number];
  };
};

export type TipulInternariiColumns = TipulInternarii & CommonColumns;

export type TrimisDe = {
  id: number;
  name: string;
};

export type TrimisDeResult = {
  map: any;
  meta: Meta;
  data: {
    result: [TrimisDe[], number];
  };
};

export type TrimisDeColumns = TrimisDe & CommonColumns;

export type TratamentulAdministrat = {
  id: number;
  name: string;
};

export type TratamentulAdministratResult = {
  map:any;
  meta: Meta;
  data: {
    result: [TratamentulAdministrat[], number];
  };
};

export type TratamentulAdministratColumns = TratamentulAdministrat &
  CommonColumns;

export type TransferatLa = {
  id: number;
  name: string;
};

export type TransferatLaResult = {
  map: any;
  meta: Meta;
  data: {
    result: [TransferatLa[], number];
  };
};

export type TransferatLaColumns = TransferatLa & CommonColumns;

export type UnitateMasura = {
  id: number;
  name: string;
};

export type UnitateMasuraResult = {
  map: any;
  meta: Meta;
  data: {
    result: [UnitateMasura[], number];
  };
};

export type UnitateMasuraColumns = UnitateMasura & CommonColumns;

export type TipProba = {
  id: number;
  name: string;
};

export type TipProbaResult = {
  map: any;
  meta: Meta;
  data: {
    result: [TipProba[], number];
  };
};

export type TipProbaColumns = TipProba & CommonColumns;

export type TipProiect = {
  id: number;
  tip:string;
  denumire: string;
  dataDeInceput:Date;
  conducator:string;
  scopul:string;
  obiectivele:string;
  aprobareComitet:string;
  dataDeFinzalizare:Date;
  rezumat:string;
};

export type TipProiectResult = {
  map: any;
  meta: Meta;
  data: {
    result: [TipProiect[], number];
  };
};

export type TipProiectColumns = TipProiect & CommonColumns;
