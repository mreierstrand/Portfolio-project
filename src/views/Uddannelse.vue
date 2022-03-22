<script setup>
import Collection from "../components/Collection.vue";
import Education from "../components/Education.vue";
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
          <RouterLink class="menu-item" to="/kundskaber"
            >IT-Kundskaber</RouterLink
          >
          <RouterLink class="menu-item active" to="/uddannelse"
            >Uddannelse</RouterLink
          >
          <RouterLink class="menu-item" to="/kontakt">Kontakt</RouterLink>
        </nav>
      </div>
    </div>
    <div class="education-header">
      <img
        class="education-header-img"
        align="left"
        width="75"
        height="75"
        src="images/school.png"
      />
      <h5 style="font-weight: 600">Uddannelse</h5>
      <h3>Information om mine uddannelser:</h3>
    </div>

    <Education>
      <template v-slot:collection-header-slot>
        <p>Datamatikeruddannelsen</p>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600;">Erhvervsakademi Zealand | 2019-2021</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg er dimitteret fra Erhvervsakademi Zealand i Roskilde i 2021, hvor jeg har afsluttet uddannelsen med et gennemsnit på 10,8 og et 12-tal i afsluttende Hovedopgave. 
        </p>
      </template>
    </Education>

    <Education>
      <template v-slot:collection-header-slot>
        <p>Studentereksamen</p>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600;">Kongsholm Gymnasium &amp; HF | 2011-2014</p>
        
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg er dimitteret fra Kongsholm Gymnasium &amp; HF i Albertslund i 2014, hvor jeg gik på Idrætslinjen og skrev min SRP om Blitzkrigen i Engelsk og Historie. 
        </p>
      </template>
    </Education>
  </div>
</template>

<style>
.education-header {
  padding: 20px;
  margin-bottom: 40px;
}

.education-header-img {
  margin-top: -15px;
  margin-right: 20px;
}
</style>
