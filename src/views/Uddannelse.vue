<script setup>
import Collection from "../components/Collection.vue";
import CollectionBig from "../components/Collection-big.vue";
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
      data-aos-delay="50"
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
            <p style="padding: 8.25px">Datamatiker uddannelsen</p>
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
      data-aos-delay="150"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <div class="row">
          <div style="max-width: 75px" class="col">
            <img
              class="avatar"
              src="data:image/jpeg;base64,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"
              alt="Kogsholm Gymnasium logo"
            />
          </div>
          <div class="col nopadding">
            <p style="padding: 8.25px">Studenter eksamen</p>
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
  .mobile-wrapper {
    padding-top: 20px !important;
  }
}
</style>
