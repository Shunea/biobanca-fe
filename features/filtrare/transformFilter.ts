import { Filter } from "@/stores/filter";

export const transformFilter = (data: Filter) => {
  const IMSP = data.IMSP?.map((item) => item.value);
  const data_imbolnavirii = data.data_imbolnavirii
    ?.map((item) => [item.from, item.to])
    .flat();
  const data_adresarii = data.data_adresarii
    ?.map((item) => [item.from, item.to])
    .flat();
  const data_internarii = data.data_internarii
    ?.map((item) => [item.from, item.to])
    .flat();
  const statut = data.statut?.map((item) => item.value);
  const rp_mn = data.rp_mn?.map((item) => item.value);
  const trimis_de = data.trimis_de?.map((item) => item.value);
  const spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza =
    data.spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza?.map(
      (item) => item.value
    );
  const diagnosticul_de_trimitere = data.diagnosticul_de_trimitere?.map(
    (item) => item.value
  );
  const diagnostic_trimitere_range = data.diagnostic_trimitere_range
    ?.map((item) => [item.from, item.to])
    .flat();
  const diagnostic_la_internare = data.diagnostic_la_internare?.map(
    (item) => item.value
  );
  const diagnostic_internare_range = data.diagnostic_internare_range
    ?.map((item) => [item.from, item.to])
    .flat();
  const data_externarii = data.data_externarii
    ?.map((item) => [item.from, item.to])
    .flat()
    .flat();
  const tip_externare = data.tip_externare?.map((item) => item.value);
  const stare_externare = data.stare_externare?.map((item) => item.value);
  const capacitatea_de_munca = data.capacitatea_de_munca?.map(
    (item) => item.value
  );
  const diagnostic_principal_la_externare_deces =
    data.diagnostic_principal_la_externare_deces?.map((item) => item.value);
  const diagnostic_principal_range = data.diagnostic_principal_range
    ?.map((item) => [item.from, item.to])
    .flat()
    .flat();
  const forma_bolii = data.forma_bolii?.map((item) => item.value);
  const contact_cu_pacienti_cu_COVID = data.contact_cu_pacienti_cu_COVID?.map(
    (item) => item.value
  );
  const calatorie_in_afara_tarii_in_ultimele_2_saptamani =
    data.calatorie_in_afara_tarii_in_ultimele_2_saptamani?.map(
      (item) => item.value
    );
  const comorbiditati = data.comorbiditati?.map((item) => item.value);
  const comorbiditati_range = data.comorbiditati_range
    ?.map((item) => [item.from, item.to])
    .flat();
  const manifestari_clinice_pe_parcursul_bolii =
    data.manifestari_clinice_pe_parcursul_bolii?.map((item) => item.value);
  const investigatii_de_laborator_pe_parcursul_bolii =
    data.investigatii_de_laborator_pe_parcursul_bolii?.map(
      (item) => item.value
    );
  const modificari_imagistice_pulmonare =
    data.modificari_imagistice_pulmonare?.map((item) => item.value);
  const tratamentul_administrat = data.tratamentul_administrat?.map(
    (item) => item.value
  );
  const terapia_cu_oxigen = data.terapia_cu_oxigen?.map((item) => item.value);
  const manifestari_clinice_la_externare_transfer =
    data.manifestari_clinice_la_externare_transfer?.map((item) => item.value);
  const investigatii_laborator_la = data.investigatii_laborator_la?.map(
    (item) => item.value
  );
  const investigatii_de_laborator_la_externare_transfer_deces =
    data.investigatii_de_laborator_la_externare_transfer_deces?.map(
      (item) => item.value
    );
  const imagistica_pulmonara_la = data.imagistica_pulmonara_la?.map(
    (item) => item.value
  );
  const imagistica_pulmonara_la_externare_transfer_deces =
    data.imagistica_pulmonara_la_externare_transfer_deces?.map(
      (item) => item.value
    );
  const varsta = data.varsta?.map((item) => item.value);
  const varsta_range = data.varsta_range
    ?.map((item) => [item.min, item.max])
    .flat();
  const total_cheltuieli = data.total_cheltuieli
    ?.map((item) => [item.min, item.max])
    .flat();
  const sex = Array.isArray(data.sex)
    ? data.sex?.map((item) => item.value)
    : "";
  const loc_de_trai = Array.isArray(data.loc_de_trai)
    ? data.loc_de_trai?.map((item) => item.value)
    : "";
  const asigurat = Array.isArray(data.asigurat)
    ? data.asigurat?.map((item) => item.value)
    : "";

  const finalFilter = {
    ...data,
    IMSP,
    data_imbolnavirii,
    data_adresarii,
    data_internarii,
    statut,
    rp_mn,
    trimis_de,
    spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza,
    diagnosticul_de_trimitere,
    diagnostic_trimitere_range,
    diagnostic_la_internare,
    diagnostic_internare_range,
    data_externarii,
    tip_externare,
    stare_externare,
    capacitatea_de_munca,
    diagnostic_principal_la_externare_deces,
    diagnostic_principal_range,
    forma_bolii,
    contact_cu_pacienti_cu_COVID,
    calatorie_in_afara_tarii_in_ultimele_2_saptamani,
    comorbiditati,
    comorbiditati_range,
    manifestari_clinice_pe_parcursul_bolii,
    investigatii_de_laborator_pe_parcursul_bolii,
    modificari_imagistice_pulmonare,
    tratamentul_administrat,
    terapia_cu_oxigen,
    manifestari_clinice_la_externare_transfer,
    investigatii_laborator_la,
    investigatii_de_laborator_la_externare_transfer_deces,
    imagistica_pulmonara_la,
    imagistica_pulmonara_la_externare_transfer_deces,
    varsta,
    varsta_range,
    total_cheltuieli,
    sex,
    loc_de_trai,
    asigurat,
  };

  return finalFilter;
};
