<script setup>
import Collection from '../components/Collection.vue';
import CollectionProject from '../components/Collection-project.vue';
import CollectionBig from '../components/Collection-big.vue';
</script>

<template>
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
          <RouterLink class="menu-item" to="/">Om mig</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring"
            >Erhvervserfaring</RouterLink
          >
          <RouterLink class="menu-item active" to="/projekter"
            >Projekter</RouterLink
          >
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
        src="/images/desktop.png"
        alt="Desktop computer"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">Projekter</h5>
      <h3>Information om projekter jeg har udviklet på:</h3>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <CollectionBig
          style="background-color: #3d464a; !important; color: white !important;"
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
                  src="/images/LassoX.jpg"
                  alt="Lasso X logo"
                />
              </div>
              <div class="col nopadding">
                <p style="padding: 8.25px">Lasso X</p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p style="font-weight: 600; line-height: 32px">
              Underside til Lasso X hjemmeside &amp; arbejde på Lasso Portal
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p>
              Arbejdet på undersiden til Lasso X fremviser Lasso Xs kunders
              mening om produktet og indeholder videofremvisning,
              kundeudtalelser og en kontaktformular.
            </p>
            <p>
              Arbejdet på Lasso Xs portal indeholdte udarbejdelse af
              forbedringer til allerede eksisterende kode/features, samt
              tilføjelse af funktionalitet til brug for kunde af portalen.
            </p>

            <p style="font-weight: bold">
              Techstack i disse projekter:<br />
              <span
                class="badge badge-pill mr-2"
                style="background-color: #eee; color: black"
                >VueJs</span
              >
              <span
                class="badge badge-pill mr-2"
                style="background-color: #eee; color: black"
                >HTML</span
              >
              <span
                class="badge badge-pill mr-2"
                style="background-color: #eee; color: black"
                >CSS</span
              ><span
                class="badge badge-pill mr-2"
                style="background-color: #eee; color: black"
                >JavaScript</span
              >
            </p>
            <ul class="viewProject">
              <a
                href="https://lassox.com/om-os/kunder"
                target="_blank"
                class="btn btn-light text-white"
                style="color: #181818 !important"
                >Se live</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>

      <div class="col">
        <CollectionBig
          style="background-color: #a4de41 !important"
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
                  src="/projects/hjemhed_logo.png"
                  alt="Hjemhed logo"
                />
              </div>
              <div class="col nopadding">
                <p style="padding: 8.25px">Hjemhed</p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p style="font-weight: 600; line-height: 32px">
              Progressive Web Applikation
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p>
              Hjemhed er en PWA, hvor hovedformålet er at etablere kontakt
              mellem nye og eksisterende beboere i et lokalområde. Beboere kan
              skrive og “markedsføre” sit lokalområd for at gøre det mere
              eftertragtet. Brugere kan sætte sin bolig til salg uden om en
              ejendomsmægler.<br />
              Derudover kan Hjemhed agere som et socialt medie, hvor brugere kan
              interagere og chatte med hinanden.
            </p>

            <p style="font-weight: bold">
              Techstack i dette projekt:<br />
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >VueJs</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >Ionic</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >HTML</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >CSS</span
              ><span
                class="badge badge-pill mr-2"
                style="background-color: #eee"
                >JavaScript</span
              >
            </p>
            <ul class="viewProject">
              <a
                href="https://hjemhed.web.app/"
                target="_blank"
                class="btn btn-light text-white"
                style="color: #181818 !important"
                >Se live</a
              >
              <a
                href="https://github.com/mreierstrand/5sem-eksamensprojekt"
                target="_blank"
                class="btn btn-light text-white"
                style="color: #181818 !important"
                >GitHub</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <CollectionBig
          style="background-color: #e9f3fd !important"
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-once="true"
          data-aos-duration="750"
        >
          <template v-slot:collection-header-slot>
            <div class="row">
              <div style="max-width: 75px" class="col">
                <img
                  class="avatar"
                  src="../../src/assets/images/CV-billede-farve.png"
                  alt="CV profil billede"
                />
              </div>
              <div class="col nopadding">
                <p style="padding: 8.25px">Portfolio</p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p style="font-weight: 600; line-height: 32px">Web applikation</p>
          </template>
          <template v-slot:collection-text-slot>
            <p>
              Portfolio udviklet for at have et online CV og for at fremvise min
              personlige erhvervserfaring og uddannelse samt mine projekter og
              IT-kundskaber. Mit portfolio giver mig frihed og kreativitet til
              at fremvise mig selv og hvad jeg kan. Jeg har mulighed for at
              fremvise min personlighed og kan skille mig ud fra mængden samt
              benytte mit online portfolio som vedhæftning til jobansøgninger.
            </p>

            <p style="font-weight: bold">
              Techstack i dette projekt:<br />
              <span
                class="badge badge-pill mr-2"
                style="background-color: white"
                >VueJs</span
              >
              <span
                class="badge badge-pill mr-2"
                style="background-color: white"
                >HTML</span
              >
              <span
                class="badge badge-pill mr-2"
                style="background-color: white"
                >CSS</span
              >
              <span
                class="badge badge-pill mr-2"
                style="background-color: white"
                >JavaScript</span
              >
            </p>
            <ul class="viewProject">
              <a
                href="https://github.com/mreierstrand/Portfolio-project"
                target="_blank"
                class="btn btn-light"
                style="color: #181818 !important"
                >GitHub</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>

      <div class="col">
        <CollectionBig
          class="last-collection-big"
          style="background-color: #45cb85 !important; margin-bottom: 20"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-once="true"
          data-aos-duration="750"
        >
          <template v-slot:collection-header-slot>
            <div class="row">
              <div style="max-width: 75px" class="col">
                <img
                  class="avatar"
                  src="/projects/letitgrow.png"
                  alt="LetItGrow logo"
                />
              </div>
              <div class="col nopadding">
                <p style="padding: 8.25px">Let It Grow</p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p style="font-weight: 600; line-height: 32px">Web applikation</p>
          </template>
          <template v-slot:collection-text-slot>
            <p>
              Let It Grow er en webapplikation, jeg har arbejdet på i
              forbindelse med 3. semester på Datamatikeruddannelsen. Formålet
              med denne webapplikation, var at lave en hjemmeside, som giver
              haveejere de bedste muligheder for at pleje deres have.
            </p>

            <p style="font-weight: bold">
              Techstack i dette projekt:<br />
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >VueJs</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >HTML</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >CSS</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >TypeScript</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >C#</span
              >
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >Azure</span
              >
            </p>
            <ul class="viewProject">
              <a
                href="http://letitgrow.azurewebsites.net/"
                target="_blank"
                class="btn btn-light"
                style="color: #181818 !important"
                >Se live</a
              >
              <a
                href="https://github.com/Ojay89/LetItGrow"
                target="_blank"
                class="btn btn-light"
                style="color: #181818 !important"
                >GitHub</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>
    </div>
    <div class="row button-up" style="text-align: center; display: block">
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

<style>
.project-collection {
  height: 400px;
}

.viewProject {
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0 !important;
  padding: 0;
  width: 80%;
  text-align: center;
  white-space: nowrap;
}

a.btn {
  color: #518882 !important;
  padding: 10px 15px;
  margin: 10px;
  width: auto;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

@media only screen and (min-width: 991px) {
  .button-up {
    display: none !important;
  }
  .last-collection-big {
    margin-bottom: 0 !important;
  }
}

@media screen and (max-width: 626px) {
  .mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }
  .mobile-wrapper {
    padding-top: 20px !important;
  }
}
</style>
