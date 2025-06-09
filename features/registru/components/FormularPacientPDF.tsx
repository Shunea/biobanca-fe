import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

interface FormularProps {
  item: any;
}

export const FormularPacientPDF = React.forwardRef<
  HTMLDivElement,
  FormularProps
>(({ item }, ref) => {
  let formular_nr = Math.floor(Math.random() * 256);

  return (
    <div ref={ref}>
      <Stack>
        {/*  introducere */}
        <Grid container rowSpacing={2}>
          <Grid item xs={12} ml={5} mt={3} mb={-15}>
            <Typography fontSize="14px" color="gray">
              Pag 1 din 6:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: "700",
                fontSize: "20px",
                marginTop: 50,
                marginLeft: 700,
              }}
            >
              Anexa 1
            </Typography>
          </Grid>
          <Grid item xs={7} mt={1} style={{ marginLeft: 50 }}>
            <Typography>USMF „Nicolae Testemițanu”</Typography>
            <Typography>{item.IMSP?.value}</Typography>
            <Typography ml={5}>denumirea instituției</Typography>
          </Grid>
          <Grid item xs={3.7} mt={1}>
            <Typography>Expresie de interes</Typography>
            <Typography>Formular nr: {formular_nr}</Typography>
            <Typography>din data: {new Date().toLocaleString()}</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginLeft: "200px", fontSize: "30px" }}>
            <Typography fontWeight={700}>
              FORMULARUL PACIENTULUI COVID-19
            </Typography>
            <Typography ml={8}>
              Fișa pacient nr. {item.fisa_medicala_nr}
            </Typography>
          </Grid>
          {/*  randul 1 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3} ml={5}>
                <Typography>Data nașterii: {item.data_nasterii}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Vârsta: {item.varsta}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Sex: {item.sex}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>Loc de trai: {item.loc_de_trai}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* randul 2 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4} ml={5}>
                <Typography>
                  Prezența lucrului: {item.lucreaza ? "Da" : "Nu"}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>Statutul: {item.statut?.value}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Asigurat:{item.asigurat ? "Da" : "Nu"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* randul 3 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} ml={5}>
                <Typography>
                  Grupa Sangvina: {item.grupa_sangvina?.value}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>Rh-factor: {item.rh_factor?.value}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* randul 4 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} ml={5}>
                <Typography>Data adresării: {item.data_adresarii}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>
                  Data îmbolnăvirii: {item.data_imbolnavirii}
                </Typography>
              </Grid>
            </Grid>
            <Typography ml={5}>
              Diagnosticul de trimirere: {item.diagnosticul_de_trimitere?.value}
            </Typography>
          </Grid>
          {/* randul 5 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} ml={5}>
                <Typography>Data internării: {item.data_internarii}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>
                  Secția internării: {item.sectia_internarii?.value}
                </Typography>
              </Grid>
            </Grid>
            <Typography ml={5}>
              Diagnosticul de internare: {item.diagnostic_la_internare?.value}
            </Typography>
          </Grid>
          {/* randul 6 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} ml={5}>
                <Typography>
                  Unde s-a tratat până la internare:
                  {item.unde_sa_tratat_pana_la_internare}
                </Typography>
              </Grid>
            </Grid>
            <Typography ml={5}>Trimis de: {item.trimis_de?.value}</Typography>
          </Grid>
          {/* randul 7 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item ml={5}>
                <Typography>
                  Spitalizat în anul curent în legătură cu boala în cauză:
                  {item.spitalizat_in_anul_curent_in_legatura_cu_boala_in_cauza
                    ?.value
                    ? "Сaz nou"
                    : "Сaz repetat"}
                </Typography>
              </Grid>
            </Grid>
            <Typography ml={5}>
              Forma bolii: {item.forma_bolii?.value}
            </Typography>
          </Grid>
          {/* randul 8 */}
          <Grid item xs={12}>
            <Typography ml={5}>
              Interventii chirurgicale (denumirea):
              {item.interventii_chirurgicale_registru}
            </Typography>
          </Grid>
          {/* randul 9 */}
          <Grid item xs={12}>
            <Typography ml={5} fontWeight={700}>
              STAREA DE SANĂTĂTE LA EXTERNAR:
            </Typography>
          </Grid>
          {/* randul 10 */}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} ml={5}>
                <Typography>Data externării: {item.data_externarii}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>
                  Zile spitalizare: {item.numar_zile_spitalizate}
                </Typography>
              </Grid>
            </Grid>
            <Typography ml={5}>
              Diagnostic principal la externare/deces:{" "}
              {item.diagnostic_principal_la_externare_deces?.value}
            </Typography>
          </Grid>
          {/* randul 11 */}
          <Grid item xs={12} ml={5}>
            <Typography>
              În caz de deces:
              <span style={{ fontSize: "12px" }}>
                cauza nemijlocită a decesului
              </span>
              {item.cauza_decesului}
            </Typography>
            <Typography fontSize={12}>
              alte afecțiuni care au favorizat decesul :
              {item.alte_afectiuni_care_au_favorizat_decesul}
            </Typography>
          </Grid>
          {/* randul 12 */}
          <Grid item xs={12} ml={5}>
            <Typography>Tipul externării: {item.tip_externare}</Typography>
            <Typography>Transfera la: {item.transferat_la?.value}</Typography>
          </Grid>
          {/* randul 13 */}
          <Grid item xs={12} ml={5}>
            <Typography>Starea la externare: {item.stare_externare}</Typography>
            <Typography>
              Capacitatea de muncă: {item.capacitatea_de_munca?.value}
            </Typography>
          </Grid>
          {/* randul 14 */}
          <Grid item xs={12} ml={5}>
            <Typography>Anamneză epidemiologică:</Typography>
            <Typography>
              contact cu pacienți cu COVID: {item.contact_cu_pacienti_cu_COVID}
            </Typography>
            <Typography>
              călătorie în afara țării în ultimele 2 săptămâni:
              {item.calatorie_in_afara_tarii_in_ultimele_2_saptamani
                ? "Da"
                : "Nu"}
            </Typography>
          </Grid>
          {/* randul 15 */}
          <Grid item xs={12} ml={5} mb={-3}>
            <Typography fontSize="14px" color="gray">
              Pag 2 din 6:
            </Typography>
          </Grid>
          <Grid item xs={12} ml={5} mt={1}>
            <Typography fontSize="20px" fontWeight={700}>
              Starea de sănătate până la Internare:
            </Typography>
            <Typography>
              Comorbidități:
              {item.comorbiditati.map((x) => x.label).join(";\r\n")}
            </Typography>
          </Grid>
          {/* randul 16 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              Starea de sanatate pe parcursul bolii:
            </Typography>
            <Typography>
              Manifestări clinice pe parcursul bolii:
              {item.manifestari_clinice_pe_parcursul_bolii}
            </Typography>
            <Typography ml={5}>
              a. Temperatura maximă pe parcursul bolii:
              {item.temperatura_maxima} °C
            </Typography>
            <Typography ml={5}>
              b. Frison: {item.frison ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Tuse seacă: {item.tuse_seaca ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Tuse cu expectorație: {item.tuse_cu_expectoratie ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Dispnee: {item.dispnee ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Oboseală: {item.oboseala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Cefalee: {item.cefalee ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Vertijuri: {item.vertijuri ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              i. Mialgii: {item.mialgii ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              j. Artralgii: {item.artralgii ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              k. Grețuri: {item.greturi ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>l. Vomă: {item.voma ? "Da" : "Nu"}</Typography>
            <Typography ml={5}>
              m. Diaree: {item.diaree ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              n. Hipo/anosmie (lipsa mirosului):
              {item.hipo_anosmie ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              o. Ageuzie (lipsa gustului): {item.ageuzie ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              p. Somnolență: {item.somnolenta ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              q. Alterarea stării de conștiință:
              {item.alterarea_starii_de_constiinta ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              r. Modificări de comportament:
              {item.modificari_de_comportament ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              s. Hipotensiune: {item.hipotensiune ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              t. Erupții cutanate: {item.eruptii_cutanate ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 17 */}
          <Grid item xs={12} ml={5}>
            <Typography>
              <span style={{ fontWeight: 700 }}>
                Datele obiective generale pe parcursul bolii
              </span>
              (de indicat cele mai grave modificări)
            </Typography>
            <Grid container>
              <Grid item xs={2}>
                <Typography>TA min: {item.TA_min}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Ps max: {item.ps_max}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>SpO2 min: {item.spO2_min}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>FR max: {item.FR_max}</Typography>
              </Grid>
            </Grid>
            <Typography>
              Raluri pulmonare auscultative:
              {item.raluri_pulmonare_ascultative ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 18 */}
          <Grid item xs={12} ml={5} mt={35}>
            <Typography fontSize="20px" fontWeight={700}>
              <Typography fontSize="14px" color="gray">
                pag 3 din 6
              </Typography>
              <span style={{ fontWeight: 700 }}>
                Investigații de laborator pe parcursul bolii:
              </span>
              (de indicat cele mai grave modificări)
            </Typography>
            <Typography ml={5}>
              a. Min eritrocite x10^12/l: {item.min_eritrocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              b. Min Hb g/l: {item.min_Hb ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Min Leucocite x10^9/l: {item.min_leucocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Max Leucocite x10^9/l: {item.max_leucocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Max Neutrofile x10^9/l: {item.max_neutrofile ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Min Limfocite x10^9/l: {item.min_limfocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Min Trombocite x10^3/l: {item.min_trombocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Max VSH mm/ora: {item.max_VSH ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              i. Max D-dimeri: {item.max_D_dimeri ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              j. Max Feritina serică: {item.max_Feritina_serica ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              k. Max Proteina C reactivă:
              {item.max_proteina_c_reactiva ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              l. Max Fibrinogenul g/l: {item.max_fibrinogenul ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              m. Max Procalcitonina: {item.max_procalcitonina ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              n. Max Ureea mmol/l : {item.max_ureea ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              o. Max Creatinina mmol/l: {item.max_creatinina ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              p. Max ALT u/l: {item.max_ALT ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              q. Max AST u/l : {item.max_AST ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              r. Max LDH UI/ml: {item.max_LDH ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              s. Max Glicemia mmol/l: {item.max_glicemia ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 19 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              Modificări imagistice pulmonare pe parcursul bolii:
            </Typography>
            <Typography ml={5}>a. Norma: {item.norma ? "Da" : "Nu"}</Typography>
            <Typography ml={5}>
              b. Modificări cu localizare unilaterală :
              {item.modificari_cu_localizare_unilaterala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Modificări cu localizare bilaterală :
              {item.modificari_cu_localizare_bilaterala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Afectarepulmonară &lt; 30%:
              {item.afectarepulmonara30 ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Afectarepulmonară 30-50%:
              {item.afectarepulmonara50 ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Afectarepulmonară 50-70%:
              {item.afectarepulmonara70 ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Afectarepulmonară &gt; 70%:
              {item.afectarepulmonara100 ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Descrierea celei mai grave modificări:
              {item.descrierea_celei_mai_grave_modificari_imagistice}
            </Typography>
            <Typography ml={10}>i. CT: {item.ct_parcurs}</Typography>
            <Typography ml={10}>ii. Rx: {item.rx_parcurs}</Typography>
          </Grid>
          {/* randul 20 */}
          <Grid item xs={12} ml={5} mt={30}>
            <Typography fontSize="14px" color="gray">
              Pag 4 din 6:
            </Typography>
            <Typography fontSize="20px" fontWeight={700}>
              EXPLORĂRI ȘI PROCEDURI PE PARCURSUL INTERNĂRII:
            </Typography>
            <Typography>Investigații de biologie moleculară:</Typography>
            <Typography ml={5}>
              Câte PCR-uri au fost făcute pe parcursul bolii :
              {item.numarul_de_teste_PCR_facute_in_timpul_bolii}
            </Typography>
            <Typography ml={5}>
              Data primei PCR-negativ: {item.data_primei_PCR_negativ}
            </Typography>
            <Typography>Investigații serologice: </Typography>
            <Typography ml={5}>
              Anti – IgM (data investigației, poz/neg):
              {item.data_anti_IgM}
            </Typography>
            <Typography ml={5}>
              Anti – IgG (data investigației, poz/neg):
              {item.data_anti_IgG}
            </Typography>
            <Typography>Explorări funcționale și numărul lor: </Typography>
            <Typography ml={10}>
              a. CT pulmonar (nr): {item.ct_pulmonar}
            </Typography>
            <Typography ml={10}>
              b. Rx pulmonar (nr): {item.rx_pulmonar}
            </Typography>
            <Typography ml={10}>c. ECG (nr): {item.ECG}</Typography>
            <Typography ml={10}>d. EUS (nr): {item.EUS}</Typography>
            <Typography>Proceduri invazive, nr lor: </Typography>
            <Typography ml={10}>
              a. Bronhoscopie (nr): {item.bronhoscopie}
            </Typography>
            <Typography ml={10}>
              b. Intubare traheală (nr): {item.intubare_traheala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={10}>
              c. Puncție pleurală: {item.punctie_pleurala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={10}>d. Altele: {item.altele}</Typography>
          </Grid>
          {/* randul 21 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              TRATAMENTUL PE PARCURUL BOLII: :
            </Typography>
            <Typography>
              Tratamentul administrat:
              {item.tratamentul_administrat ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              a. Hydroxychloroquinum (Placvenil):
              {item.tratament_hydroxychloroquinum ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              b. Lopinavirum / Ritonavirum (Aluvia / Kaletra):
              {item.tratament_lopinavirum_ritonavirum ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Favipiravirum (Avigan):
              {item.tratament_favipiravirum ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Remdesivirum: {item.tratament_remdesivirum ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Tocilizumabum: {item.tratament_tocilizumabum ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Glucocorticosteroizi:
              {item.tratament_corticosteroizi ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Anticoagulante: {item.tratament_anticoagulante ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Antiagregante plachetare:
              {item.tratament_antiagregante_plachetare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              i. Terapie antipiretică:
              {item.tratament_terapie_antipiretica ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              j. Terapie infuzională:
              {item.tratament_terapie_infuzionala ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              k. Antibiotice: {item.tratament_antibiotice ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              l. Bronhodilatatoare
              {item.tratament_bronhodilatatoare ? "Da" : "Nu"}
            </Typography>
            <Typography>
              Tratamentul administrat: {item.terapia_cu_oxigen ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              a. O2 terapie (concentrator, etc.):
              {item.terapia_concentrator ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              b. O2 terapie BiPAP:{item.terapia_bipap_cipap ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. O2 terapie asistată{item.terapia_asistata ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 22 */}
          <Grid item xs={12} ml={5} mt={17}>
            <Typography fontSize="14px" color="gray">
              Pag 5 din 6:
            </Typography>
            <Typography fontSize="20px" fontWeight={700}>
              STAREA DE SANATATE LA EXTERNARE:
            </Typography>
            <Typography>
              Starea de sănătate la externare: {item.stare_externare}
            </Typography>
          </Grid>
          {/* randul 23 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              Manifestări clinice la externare:
              {item.manifestari_clinice_pe_parcursul_bolii}
            </Typography>
            <Typography ml={5}>
              a. Temperatura maximă pe parcursul bolii:
              {item.temperatura_maxima} °C
            </Typography>
            <Typography ml={5}>
              b. Frison: {item.frison_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Tuse seacă: {item.tuse_seaca_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Tuse cu expectorație:
              {item.tuse_cu_expectoratie_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Dispnee: {item.dispnee_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Oboseală: {item.oboseala_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Cefalee: {item.cefalee_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Vertijuri: {item.vertijuri_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              i. Mialgii: {item.mialgii_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              j. Artralgii: {item.artralgii_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              k. Grețuri: {item.greturi_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              l. Vomă: {item.voma_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              m. Diaree: {item.diaree_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              n. Hipo/anosmie (lipsa mirosului):
              {item.hipo_anosmie_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              o. Ageuzie (lipsa gustului):
              {item.ageuzie_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              p. Somnolență: {item.somnolenta_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              q. Alterarea stării de conștiință:
              {item.alterarea_starii_de_constiinta_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              r. Modificări de comportament:
              {item.modificari_de_comportament_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              s. Hipotensiune: {item.hipotensiune_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              t. Erupții cutanate:
              {item.eruptii_cutanate_externare ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 24 */}
          <Grid item xs={12} ml={5} mt={48}>
            <Typography fontSize="14px" color="gray">
              Pag 6 din 6:
            </Typography>
            <Typography fontSize="20px" fontWeight={700}>
              Investigații de laborator la externare/transfer/deces:
            </Typography>
            <Typography ml={5}>
              a. Min eritrocite x10^12/l: {item.eritrocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              b. Min Hb g/l: {item.Hb ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              c. Min Leucocite x10^9/l: {item.leucocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              d. Max Leucocite x10^9/l: {item.leucocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              e. Max Neutrofile x10^9/l: {item.neutrofile ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              f. Min Limfocite x10^9/l: {item.limfocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              g. Min Trombocite x10^3/l: {item.trombocite ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              h. Max VSH mm/ora: {item.VSH ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              i. Max D-dimeri: {item.D_dimeri ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              j. Max Feritina serică: {item.Feritina_serica ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              k. Max Proteina C reactivă:
              {item.proteina_c_reactiva ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              l. Max Fibrinogenul g/l: {item.fibrinogenul ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              m. Max Procalcitonina: {item.procalcitonina ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              n. Max Ureea mmol/l : {item.ureea ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              o. Max Creatinina mmol/l: {item.creatinina ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              p. Max ALT u/l: {item.ALT ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              q. Max AST u/l : {item.AST ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              r. Max LDH UI/ml: {item.LDH ? "Da" : "Nu"}
            </Typography>
            <Typography ml={5}>
              s. Max Glicemia mmol/l: {item.glicemia ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 25 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              Imagistica pulmonară la externare/transfer/deces:
            </Typography>
            <Typography ml={15}>
              • Rx: {item.rx_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • CT: {item.ct_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • Norma: {item.norma_externare ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • Fără schimbări în dinamică:
              {item.fara_schimbari_in_dinamica ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • Cu agravare în dinamică:
              {item.cu_agravare_in_dinamica ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • Pneumonie în resorbție:
              {item.pneumonie_in_resorbtie ? "Da" : "Nu"}
            </Typography>
            <Typography ml={15}>
              • Modificări sclerotice/fibrotice:
              {item.modificari_sclerotice_fibrotice ? "Da" : "Nu"}
            </Typography>
          </Grid>
          {/* randul 26 */}
          <Grid item xs={12} ml={5}>
            <Typography fontSize="20px" fontWeight={700}>
              DATE FINANCIARE
            </Typography>
            <Typography>Cheltuieli aferente: </Typography>
            <Typography ml={15}>
              • aferente spitalizarii: {item.aferente_spitalizarii} MDL
            </Typography>
            <Typography ml={15}>
              • pentru hrana: {item.pentru_hrana} MDL
            </Typography>
            <Typography ml={15}>
              • pentru medicamente: {item.pentru_medicamente} MDL
            </Typography>
            <Typography ml={15}>
              • interventii chirurgicale: {item.interventii_chirurgicale} MDL
            </Typography>
            <Typography ml={15}>
              • materiale sanitare: {item.materiale_sanitare} MDL
            </Typography>
            <Typography ml={15}>
              • analize de laborator: {item.analize_de_laborator} MDL
            </Typography>
            <Typography ml={15}>
              • alte investigatii: {item.alte_interventii} MDL
            </Typography>
            <Typography ml={15}>
              • analize bacteriologice: {item.analize_bacteriologice} MDL
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
});

FormularPacientPDF.displayName = "FormularPacientPDF";

export default FormularPacientPDF;
