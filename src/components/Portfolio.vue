<script setup>
import Collection from './Collection.vue';
import CollectionSmall from './Collection-small.vue';
import HeaderNav from './Header-nav.vue';
</script>

<template>
  <div class="wrap">
    <Header-nav />

    <Collection img_src="images/wave.png">
      <template v-slot:collection-header-slot>
        <p>Om mig</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Mit navn er Oliver Eierstrand. Jeg er 26 år og bor i
          hovedstadsområdet. Jeg er uddannet Datamatiker på Erhvervsakademi
          Zealand i Roskilde og jeg har en stor interesse for Frontend og
          Web-udvikling.
        </p>
        <p>
          Jeg er desuden at finde på
          <a class="link" href="https://github.com/mreierstrand">GitHub</a> og
          <a
            class="link"
            href="https://www.linkedin.com/in/oliver-eierstrand-3032091a3/"
            >LinkedIn</a
          >.
        </p>
      </template>
    </Collection>

    <div class="section-header">
      <h5 style="font-weight: 600">Stadig nysgerrig?</h5>
      <h3 style="">Okay, her er lidt mere information om mig så:</h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <CollectionSmall img_src="../../public/images/curious.png">
            <template v-slot:collection-header-slot>
              <p>Nysgerrig</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg er nysgerrig af natur og opsøger altid ny viden. Jeg har en
                trang til at undersøge ting nærmere og dette hjælper mig til at
                forstå mig selv og andre bedre. I form af min nysgerrighed har
                jeg nemmere ved at tilegne mig ny viden, hvilket har givet mig
                en fordel under min uddannelse samt i mine praktikophold.
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div class="col">
          <CollectionSmall
            img_src="../../public/images/attention-to-detail.png"
          >
            <template v-slot:collection-header-slot>
              <p>Detaljeorienteret</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Jeg er typen der ikke kan lade være med at tjekke mit arbejde
                igennem en ekstra gang.
                <br />Jeg gør en dyd ud af at sørge for, at det jeg laver er
                godt og grundigt tjekket igennem og kan først slappe af, når jeg
                ved, at det jeg leverer, er ordenligt.
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>

      <div class="row">
        <div data-aos="fade-right" data-aos-once="true" class="col">
          <CollectionSmall img_src="../../public/images/curious.png">
            <template v-slot:collection-header-slot>
              <p>Nysgerrig</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Mit navn er Oliver Eierstrand. Jeg er 26 år og bor i
                hovedstadsområdet. Jeg er uddannet Datamatiker på
                Erhvervsakademi Zealand i Roskilde og jeg har en stor interesse
                for Frontend og Web-udvikling.
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div data-aos="fade-left" data-aos-once="true" class="col">
          <CollectionSmall
            img_src="../../public/images/attention-to-detail.png"
          >
            <template v-slot:collection-header-slot>
              <p>Detaljeorienteret</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                Mit navn er Oliver Eierstrand. Jeg er 26 år og bor i
                hovedstadsområdet. Jeg er uddannet Datamatiker på
                Erhvervsakademi Zealand i Roskilde og jeg har en stor interesse
                for Frontend og Web-udvikling.
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  width: 100% !important;
  height: 100% !important;
  background-color: white !important;
  color: black !important;
  font-family: Rubik, sans-serif !important;
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
}

.page,
.wrap {
  margin-left: auto;
  margin-right: auto;
}

.wrap {
  max-width: 1024px;
  padding: 30px;
  padding-top: 80px;
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

.link {
  font-weight: bold;
}

.section-header {
  margin-bottom: 60px;
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
</style>
