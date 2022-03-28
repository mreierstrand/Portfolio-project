<script setup>
import Collection from "../components/Collection.vue";
import CollectionBig from "../components/Collection-big.vue";
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
          <RouterLink class="menu-item" to="/erhvervserfaring"
            >Erhvervserfaring</RouterLink
          >
          <RouterLink class="menu-item" to="/projekter">Projekter</RouterLink>
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
    <div class="domain-header mobile">
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/school.png"
        alt="Billede af skole"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">Uddannelse</h5>
      <h3>Information om mine uddannelser:</h3>
    </div>

    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="350"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              alt="Erhvervsakademi Zealand logo"
              src="data:image/png;base64,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"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">Datamatikeruddannelsen</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">Erhvervsakademi Zealand | 2019-2021</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg er dimitteret fra Erhvervsakademi Zealand i Roskilde i 2021, hvor
          jeg har afsluttet uddannelsen med et gennemsnit på 10,8 og et 12-tal i
          afsluttende Hovedopgave. <br />På 5. semester har jeg været i 10 ugers
          erhverspraktik hos by Meew med fokus på React Native og cross-platform
          mobiludvikling.
        </p>
      </template>
    </CollectionBig>

    <CollectionBig
      data-aos="zoom-in"
      data-aos-delay="550"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              src="/images/kongsholm.PNG"
              alt="Kogsholm Gymnasium logo"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">Studentereksamen</p>
          </div>
        </div>
      </template>
      <template v-slot:collection-subheader-slot>
        <p style="font-weight: 600">Kongsholm Gymnasium &amp; HF | 2011-2014</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>
          Jeg er dimitteret fra Kongsholm Gymnasium &amp; HF i Albertslund i
          2014, hvor jeg gik på Idrætslinjen og skrev min SRP om Blitzkrigen i
          Engelsk og Historie.
        </p>
      </template>
    </CollectionBig>
  </div>
</template>

<style>
.domain-header {
  padding: 20px;
  margin-bottom: 20px;
}

.domain-header-img {
  margin-top: -15px;
  margin-right: 20px;
}

.avatar {
  vertical-align: middle;
  width: 75px !important;
  height: 75px !important;
  border-radius: 50%;
}

.nopadding {
  padding: 0;
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
