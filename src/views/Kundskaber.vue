<script startup>
import CollectionSmall from '../components/Collection-small.vue';

export default {
  components: { CollectionSmall },
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
          <RouterLink class="menu-item" to="/">{{
            $t('aboutMeNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring">{{
            $t('experienceNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/projekter">{{
            $t('projectsNav')
          }}</RouterLink>
          <RouterLink class="menu-item active" to="/kundskaber">{{
            $t('itSkillsNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/uddannelse">{{
            $t('educationNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/kontakt">{{
            $t('contactNav')
          }}</RouterLink>
        </nav>
      </div>
    </div>

    <div
      class="domain-header mobile"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/computer-small.png"
        alt="Computer billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">
        {{ $t('itSkillsShowcaseHeader') }}
      </h5>
      <h3>{{ $t('itSkillsShowcaseSubheader') }}</h3>
    </div>

    <div
      class="row"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/html5.svg" alt="Html5" />
          <p>HTML5</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/css3.svg" alt="Css3" />
          <p>CSS3</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/javascript.svg" alt="Javascript" />
          <p>JavaScript</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/vue.svg" alt="Vue" />
          <p>Vue</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/tailwind.svg" alt="Tailwind css" />
          <p>Tailwind</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/svelte.svg" alt="Svelte" />
          <p>Svelte</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/bootstrap.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/vscode.svg" alt="Vscode" />
          <p>VS Code</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/figma.svg" alt="Figma" />
          <p>Figma</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/github.svg" alt="Github" />
          <p>GitHub</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/gitlab.svg" alt="Gitlab" />
          <p>GitLab</p>
        </div>
      </div>
      <div class="col-md-2 col-sm-3 col-xs-4 col-6">
        <div class="collection">
          <img src="/icons/accessibility.svg" alt="Accessibility" />
          <p>Accessibility</p>
        </div>
      </div>
    </div>

    <div class="row d-block d-sm-none" style="text-align: center">
      <div class="col">
        <button
          onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
          class="custom-button"
          style="border-radius: 20px"
        >
          <h5 class="nopadding" style="font-weight: 600">
            {{ $t('backToTopButtonText') }}
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
ul {
  display: block;
  list-style-type: disc;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

img {
  border: 0;
}

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
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 115px;
}

.collection img {
  width: 80px;
  height: auto;
  padding: 15px 5px;
}

.collection img {
  width: 80px;
  height: auto;
  padding: 15px 5px;
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
