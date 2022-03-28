<script setup>
import CollectionBig from "./../components/Collection-big.vue";
</script>

<template>
  <div class="wrap">
    <div class="header">
      <div class="header-picture">
        <RouterLink to="/">
          <img
            width="100"
            height="100"
            class="header-img"
            src="../assets/images/CV-billede-farve.png"
            alt="CV profil billede"
          />
        </RouterLink>
      </div>

      <div class="header-menu">
        <RouterLink to="/">
          <h2 class="logo">Oliver Eierstrand</h2>
        </RouterLink>
        <nav id="navbar" class="menu">
          <RouterLink class="menu-item" to="/">Om mig</RouterLink>
          <RouterLink class="menu-item active" to="/erhvervserfaring"
            >Erhvervserfaring</RouterLink
          >
          <RouterLink class="menu-item" to="/projekter">Projekter</RouterLink>
          <RouterLink class="menu-item" to="/kundskaber"
            >IT-Kundskaber</RouterLink
          >
          <RouterLink class="menu-item" to="/uddannelse">Uddannelse</RouterLink>
          <RouterLink class="menu-item" to="/kontakt">Kontakt</RouterLink>
        </nav>
      </div>
    </div>
    <div class="domain-header mobile">
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/work-experience.png"
        alt="CV profil billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">Erhvervserfaring</h5>
      <h3>Information om min erhvervserfaring:</h3>
    </div>
    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              src="https://lassox.com/_nuxt/b21ca81670a19437d0449cda93509f0e.svg"
              alt="Avatar"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">
              Frontend-virksomhedspraktik hos Lasso X
            </p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">Oktober 2021 - November 2021</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg har efter endt uddannelse været i virksomhedspraktik hos Lasso X.
          Dette har jeg været for at erhverve mig yderlig erfaring indenfor
          frontend-udvikling i HTML, CSS, JavaScript og VueJs. <br /><br />Mine
          primære arbejdsopgaver, under virksomhedspraktikken hos Lasso, bestod
          af udarbejdelse af en underside til
          <a class="link-text" href="https://lassox.com/" target="_blank"
            >Lasso X</a
          >
          som går under navnet: "Mød vores kunder". Det direkte link kan findes
          <a
            class="link-text"
            href="https://lassox.com/om-os/kunder"
            target="_blank"
            >her</a
          >. <br />I denne case har jeg arbejdet med videoer, kundeudtalelser og
          en kontaktformular. Ydermere har jeg arbejdet på Lasso-portalen, hvori
          jeg har udarbejdet forbedringer til allerede eksisterende
          kode/features, samt tilføjet yderligere funktionalitet til brug for
          kunder af Lasso Xs produkt.
        </p>

        <p style="font-weight: bold">Det jeg lærte hos Lasso X:</p>
        <ul>
          <li>Udvidelse af kompetencer indenfor frontendudvikling.</li>
          <li>Bedre forståelse for den daglige gang i en IT-virksomhed.</li>
          <li>Forståelse for arbejdsgangen i et team på 8 personer.</li>
        </ul>

        <p>
          Hent reference og anbefaling fra Lasso X
          <a
            class="link-text"
            href="files/Reference_Lasso_X.pdf"
            target="_blank"
            >her</a
          >.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              alt="Avatar"
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEBmpCOcVoj5g/company-logo_200_200/0/1633436611809?e=1656547200&v=beta&t=fMologgEyWk6jXMYNXTN71YSJce6ha9cI0v4dySJAfs"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">Datamatiker praktikophold hos MeeW</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">Januar 2021 - April 2021</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          På 5. semester på Datamatikeruddannelsen har jeg været i
          virksomhedspraktik hos MeeW. I denne virksomhedspraktik har jeg
          arbejdet på et kunderelateret projekt udviklet i React Native. I den
          forbindelse har jeg været en del af alle MeeWs interne processer og
          dette har givet mig en forståelse for, hvordan den daglige gang i en
          IT-virksomhed fungerer samt, hvordan MeeW indrager sine kunder i
          udviklingsfasen.
        </p>

        <p style="font-weight: bold">Det jeg lærte hos MeeW:</p>
        <ul>
          <li>Erhvervelse af kompetencer indenfor udvikling i React Native.</li>
          <li>Bedre forståelse for den daglige gang i en IT-virksomhed.</li>
          <li>Hvordan onboarding af projekter fungerer i praksis.</li>
          <li>
            Hvor vigtig kunde-kontakten og -relationen er, før under og efter
            udviklingsfasen.
          </li>
        </ul>

        <p>
          Hent reference og anbefaling fra MeeW
          <a class="link-text" href="files/Reference_MeeW.pdf" target="_blank"
            >her</a
          >.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="150"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img class="avatar" src="https://herstedosterskole.aula.dk/sites/herstedosterskole.aula.dk/files/styles/indholdsbillede_380_x_285_/public/arkiv/Billeder/Artikler/Forside/Logo%20%281%29.png?itok=xH7tnXEk"
            alt="Avatar" />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">Lærervikar i almen- og specialklasser</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">Oktober 2014 - Januar 2019</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg har i mine sabbatår efter gymnasiet arbejdet på Herstedøster Skole
          som lærervikar. I denne periode har jeg haft flere del- og
          fuldtidsansættelser i både almen og specielklasser. Dog mest i
          specielklasser, hvori der gik børn med lidelser, som forstyrrer deres
          opmærksomhed og aktivitet.
          <br />
          Jeg har undervist børn og unge i flere forskellige fag, herunder
          Matematik, Dansk og Historie. Derudover har jeg været en del af den
          daglige konflikthåndtering og ageret kommunikationsled for børn i
          situationer, hvori de kunne have brug for hjælp eller vejledning.
          <br />Jeg har haft kontakt og samarbejde med forældre, ledere, lærere
          og pædagoger og har deltaget i strukturering og forberedelse af
          undervisningertimer og de daglige forløb i klasserne.
        </p>

        <p style="font-weight: bold">Det jeg lærte hos Herstedøster Skole:</p>
        <ul>
          <li>Forståelse for undervisning og pædagogik.</li>
          <li>
            Håndtering af elever med lidelser som opmærksomhedsforstyrrelse og
            impulsivitet. Herunder hvordan man bedst håndterer situationer i
            forbindelse med disse lidelser.
          </li>
          <li>Ansvarlig for at elever får et fagligt udbytte i timerne.</li>
          <li>
            Skabelse og opretholdelse af et fornuftigt undervisningsmiljø samt
            kammeratskab i klasserne.
          </li>
        </ul>
      </template>
    </CollectionBig>

    <div class="row" style="text-align: center">
      <div class="col">
        <button
          onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
          class="btn btn-light"
          style="border-radius: 20px"
        >
          <h5 style="font-weight: 600; margin-bottom: 0">
            Tilbage til toppen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-arrow-up-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </h5>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-text {
  font-weight: bold !important;
  text-decoration: underline !important;
}

.btn-light {
  color: #212529 !important;
  padding: 15px 15px !important;
}

@media screen and (max-width: 626px) {
  .mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }
}
</style>
