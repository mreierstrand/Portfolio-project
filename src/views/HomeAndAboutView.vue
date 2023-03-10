<script setup>
import Collection from '../components/Collection.vue';
import CollectionSmall from '../components/Collection-small.vue';
</script>

<template>
  <div id="scrollTo"></div>
  <div class="wrap mobile-wrapper">
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
          <RouterLink class="menu-item active" to="/">Om mig</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring"
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
    <Collection
      img_src="/images/wave.png"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <template v-slot:collection-header-slot>
        <p>Om mig</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Mit navn er Oliver Eierstrand. Jeg er 27 år og bor i
          hovedstadsområdet. Jeg er uddannet Datamatiker på Erhvervsakademi
          Zealand i Roskilde og jeg har en stor interesse for Frontend og
          Web-udvikling.
        </p>
        <p>
          Jeg er desuden at finde på
          <a
            class="link-text"
            target="_blank"
            href="https://github.com/mreierstrand"
            >GitHub</a
          >
          og
          <a
            class="link-text"
            target="_blank"
            href="https://www.linkedin.com/in/oliver-eierstrand-3032091a3/"
            >LinkedIn</a
          >, og mit CV kan ses
          <a
            class="link-text"
            target="_blank"
            href="files/OliverEierstrandCV.pdf"
            >her</a
          >.
        </p>
      </template>
    </Collection>

    <div
      class="section-header"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <h5 style="font-weight: 600">Stadig nysgerrig?</h5>
      <h3>Okay, her er lidt mere information om mig:</h3>
    </div>

    <div
      class="nopadding"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row">
        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/curious.png">
            <template v-slot:collection-header-slot>
              <p>Nysgerrig</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg er nysgerrig af natur og opsøger altid ny viden. Jeg har en
                trang til at undersøge ting nærmere og dette hjælper mig til at
                forstå mig selv og andre bedre. I form af min nysgerrighed har
                jeg nemt ved at tilegne mig ny viden, hvilket har givet mig en
                fordel under min uddannelse, samt i mine praktikophold.
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/magnifying.png">
            <template v-slot:collection-header-slot>
              <p>Detaljeorienteret</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg har sans for detaljer og er typen, der ikke kan lade være
                med at tjekke mit arbejde igennem en ekstra gang.
                <br />Jeg gør en dyd ud af at sørge for, at det jeg laver er
                godt og grundigt tjekket igennem, og jeg kan først slappe af,
                når jeg ved, at det jeg leverer, er ordenligt.
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/graduation.png">
            <template v-slot:collection-header-slot>
              <p>Nyuddannet</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg ved, at jeg er "grøn" og ikke har så meget erhvervserfaring,
                men det ændrer ikke på det faktum, at jeg har et brændende ønske
                om at blive en god udvikler. Jeg vil udvide mine kompetencer
                indenfor Frontend- og Webudvikling og jeg ønsker at blive en del
                af en virksomhed, hvor der er plads til, at jeg kan udfolde og
                udvikle mig både fagligt og personligt.
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/computer.png">
            <template v-slot:collection-header-slot>
              <p>Gode karakterer</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg har i mit uddannelsesforløb som Datamatiker bestræbt mig på
                at gå efter topkarakterer i alle opgaver. Det har krævet
                motivation og dedikation, samt en skarp gruppestruktur og et
                godt arbejdsmiljø. Dette har jeg været en del af og har
                afsluttet Datamatikeruddannelsen med et karaktergennemsnit på
                10,8, herunder 12 i min afsluttende Hovedopgave på 5. Semester.
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/attention-to-detail.png">
            <template v-slot:collection-header-slot>
              <p>Udadvendt</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg er udadvendt og meget smilende som person. Jeg holder af den
                gode kontakt med andre mennesker og trives på tomandshånd og
                især i grupper.
                <br />Jeg kan lide at tale om mine ideer og problemer i stedet
                for at sidde med dem alene. <br />At være udadvendt har sine
                fordele, og det betyder, at jeg blandt andet er en god lytter.
              </p>
            </template>
          </CollectionSmall>
        </div>

        <div class="col-12 col-md-6 col-mobile">
          <CollectionSmall img_src="/images/running.png">
            <template v-slot:collection-header-slot>
              <p>Initiativrig</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg er initiativrig og får altid en masse ideer. Min
                nysgerrighed hjælper mig til at udfordre og udforske, det der
                endnu ikke er tænkt på, og jeg trives i et miljø, hvor der er
                højt til loftet og plads til nye initiativer og alle mine idéer.
                Derudover er jeg god til at lytte til andres ideer og komme med
                feedback.
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>
    </div>

    <div class="row" style="text-align: center">
      <div class="col">
        <button
          onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
          class="btn btn-light"
          style="border-radius: 20px"
        >
          <h5 class="nopadding" style="font-weight: 600">
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
html,
body {
  width: 100% !important;
  height: 100% !important;
  background-color: white !important;
  color: black !important;
  font-family: Rubik, sans-serif !important;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
}

img {
  height: auto;
  max-width: 100%;
}

a {
  color: #1a2b17 !important;
  text-decoration: underline;
  -webkit-text-decoration-color: transparent;
  text-decoration-color: transparent;
}

a:hover {
  text-decoration: none;
  color: #518882 !important;
  cursor: pointer;
  font-weight: bold;
}

.router-link-active {
  cursor: auto !important;
}

.link-text {
  font-weight: bold !important;
  text-decoration: underline !important;
}

.page,
.wrap {
  margin-left: auto;
  margin-right: auto;
}

.wrap {
  max-width: 1024px;
  width: 100%;
}

.form-label,
.logo,
.menu-item,
.subheading,
.txt-upper {
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}

.section-header {
  margin-bottom: 40px;
}

.collection-text {
  margin-top: 0px;
}

.read-more {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}

.read-more-text {
  text-align: center;
}

.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.btn-light {
  color: #212529 !important;
  padding: 15px 15px;
}

.active {
  color: #518882 !important;
}

@media screen and (max-width: 626px) {
  .col-mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .margin-right {
    margin-left: -15px !important;
  }
  .mobile-wrapper {
    padding-top: 20px !important;
  }
}
</style>
