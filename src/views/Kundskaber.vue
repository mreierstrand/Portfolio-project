<script startup>
import CollectionSmall from "../components/Collection-small.vue";

export default {
  components: { CollectionSmall },
  data() {
    return {
      erfaring: [
        {
          id: "1",
          name: "HTML",
        },
        {
          id: "2",
          name: "CSS",
        },
        {
          id: "3",
          name: "JavaScript",
        },
        {
          id: "4",
          name: "Vue.js",
        },
        {
          id: "5",
          name: "Bootstrap",
        },
        {
          id: "6",
          name: "Svelte",
        },
        {
          id: "7",
          name: "Mockup- & prototypeudvikling",
        },
        {
          id: "8",
          name: "Udvikling af designmanualer",
        },
      ],
      arbejde: [
        {
          id: "1",
          name: "Visual Studio Code",
        },
        {
          id: "2",
          name: "Docker",
        },
        {
          id: "3",
          name: "GitHub",
        },
        {
          id: "4",
          name: "GitLab",
        },
        {
          id: "5",
          name: "Google Firebase",
        },
        {
          id: "6",
          name: "Figma",
        },
      ],
    };
  },
};
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
          <RouterLink class="menu-item active" to="/kundskaber"
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
        src="/images/computer-small.png"
        alt="Computer billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">IT-Kundskaber</h5>
      <h3>Oversigt over mine IT-kundskaber:</h3>
    </div>

    <div class="row">
      <div
        class="col-12 col-md-6 mobile"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-once="true"
        data-aos-duration="750"
      >
        <div class="collection">
          <h3 class="collection-header-col">Erfaring med</h3>
          <div v-for="item in erfaring" :key="item.id">
            <h5>{{ item.name }}</h5>
          </div>
        </div>
      </div>

      <div
        class="col-12 col-md-6 mobile"
        data-aos="zoom-in"
        data-aos-delay="150"
        data-aos-once="true"
        data-aos-duration="750"
      >
        <div class="collection">
          <h3 class="collection-header-col">Med arbejde i</h3>
          <div v-for="item in arbejde" :key="item.id">
            <h5>{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  color: #191a1d;
  display: inline-block;
  font-size: 1.75rem;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}

.collection {
  padding-top: 40px !important;
}

.collection-header-col {
  color: #191a1d;
  display: inline-block;
  font-size: 24px;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.collection-header-col::after {
  margin-top: 8%;
  max-width: 30%;
  background: #518882;
  border-radius: 1000px;
  content: "";
  display: block;
  height: 6px;
  width: 100%;
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
