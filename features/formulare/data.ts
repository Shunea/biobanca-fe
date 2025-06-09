type Card = {
  type: string;
  link: string;
};

type Formular = Card;
type Clasificator = Card;

export const formulare: Formular[] = [
  {
    type: "Clasificatoare",
    link: "/formulare/clasificatoare",
  },
  {
    type: "Formular evidenta a proiectelor",
    link: "/formulare/proiect",
  },
  {
    type: "Formular de colectare a probelor",
    link: "/formulare/pacient/1",
  },
  {
    type: "Formulare de rezultat",
    link: "/formulare/rezultat",
  },
];

export const clasificatoare: Clasificator[] = [
  {
    type: "Institutiile medico-sanitare publice",//
    link: "/formulare/clasificatoare/imsp",
  },
  {
    type: "Codul si Diagnosticul",
    link: "/formulare/clasificatoare/cod-si-diagnostic",//
  },
  {
    type: "Comorbiditati",
    link: "/formulare/clasificatoare/cimx",//
  },
  {
    type: "Raion",
    link: "/formulare/clasificatoare/raion",//
  },
  {
    type: "Trimis de",
    link: "/formulare/clasificatoare/trimis-de",//
  },
  {
    type: "Tipuri de materiale colectate",
    link: "/formulare/clasificatoare/tipuri-de-materiale-colectate",//
  },
  {
    type: "Cetățenia",
    link: "/formulare/clasificatoare/cetatenia",//
  },
  {
    type: "Lista biospecimenelor",
    link: "/formulare/clasificatoare/lista-biospecimene",//
  },
  {
    type: "Etnie",
    link: "/formulare/clasificatoare/etnie",//
  },
  {
    type: "Unitati de masura",
    link: "/formulare/clasificatoare/unitati-de-masura",
  },
  {
    type: "Statutul",
    link: "/formulare/clasificatoare/statutul",//
  },
  {
    type: "Stare generala la prelevare",
    link: "/formulare/clasificatoare/stare-generala-la-prelevare",//
  },
  {
    type: "Parintii sau rude care au suferit de boli apropiate",//
    link: "/formulare/clasificatoare/parintii-rude-boli",
  },
  {
    type: "Lista provenienta donator",
    link: "/formulare/clasificatoare/lista-provenienta-donator",//
  },
  {
    type: "Lista maladii infectioase",
    link: "/formulare/clasificatoare/lista-maladii-infectioase",
  },
  {
    type: "Lista maladii aferente",
    link: "/formulare/clasificatoare/lista-maladii-aferente",
  },
  {
    type: "Laboratoare cu care conlucreaza Biobanca",
    link: "/formulare/clasificatoare/laboratoare-conlucreaza-biobanca",
  },
  {
    type: "Tip proiecte",
    link: "/formulare/clasificatoare/tip-proiecte",
  },
  {
    type: "Deprinderi nocive",
    link: "/formulare/clasificatoare/deprinderi-nocive",
  },
  {
    type: "Anamneza alergologica",
    link: "/formulare/clasificatoare/anamneza-alergologica",
  },
  {
    type: "Antecedente eredo-colaterale ale donatorului",
    link: "/formulare/clasificatoare/antecedente-eredo-colaterale-donatorului",
  },
  {
    type: "Lista antecedente personale fiziologice",
    link: "/formulare/clasificatoare/lista-antecedente-personale-fiziologice",
  },
  {
    type: "Varsta si starea sanatatii",
    link: "/formulare/clasificatoare/varsta-stare-sanatate",
  },
  {
    type: "Modul de contact al donatorului",
    link: "/formulare/clasificatoare/mod-contact-donator",
  },
];

export const formSteps = ["Pasul unu", "Pasul doi"];
export const pacientSteps = [
  "Informație generală",
  "Informație internare",
  "Informație internare",
  "Date internare și pe parcursul bolii",
  "Investigații, explorări si proceduri etc",
];
