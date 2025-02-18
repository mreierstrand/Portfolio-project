<script setup>
import Collection from '../components/Collection.vue';
import CollectionSmall from '../components/Collection-small.vue';
import LanguageToggle from '../components/LanguageToggle.vue';
import DarkModeToggle from '../components/DarkModeToggle.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import '@/assets/base.css';

const menuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 626) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<template>
  <div id="scrollTo"></div>
  <div class="wrap mobile-wrapper">
    <button
      v-if="windowWidth <= 626"
      class="burger-menu"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
    </button>

    <nav v-if="menuOpen && windowWidth <= 626" class="burger-navigation">
      <RouterLink class="menu-item active" to="/">{{
        $t('aboutMeNav')
      }}</RouterLink>
      <RouterLink class="menu-item" to="/erhvervserfaring">{{
        $t('experienceNav')
      }}</RouterLink>
      <RouterLink class="menu-item" to="/projekter">{{
        $t('projectsNav')
      }}</RouterLink>
      <RouterLink class="menu-item" to="/kundskaber">{{
        $t('itSkillsNav')
      }}</RouterLink>
      <RouterLink class="menu-item" to="/uddannelse">{{
        $t('educationNav')
      }}</RouterLink>
      <RouterLink class="menu-item" to="/kontakt">{{
        $t('contactNav')
      }}</RouterLink>

      <div class="menu-toggles menu-item top-menu">
        <DarkModeToggle class="center" />
      </div>
      <div class="menu-toggles menu-item">
        <LanguageToggle class="center" />
      </div>
    </nav>

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
          <h1 class="logo">Oliver Eierstrand</h1>
        </RouterLink>
        <DarkModeToggle />
        <LanguageToggle />
        <nav id="navbar" class="menu">
          <RouterLink class="menu-item active" to="/">{{
            $t('aboutMeNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring">{{
            $t('experienceNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/projekter">{{
            $t('projectsNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/kundskaber">{{
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

    <!-- Indhold -->
    <Collection
      class="top-collection"
      img_src="/images/wave.png"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-duration="750"
    >
      <template v-slot:collection-header-slot>
        <p>{{ $t('aboutMeNav') }}</p>
      </template>
      <template v-slot:collection-text-slot>
        <p>{{ $t('introduction') }}</p>
        <p>
          {{ $t('findMeOn') }}
          <a
            class="link-text"
            target="_blank"
            href="https://github.com/mreierstrand"
            >GitHub</a
          >
          {{ $t('and') }}
          <a
            class="link-text"
            target="_blank"
            href="https://www.linkedin.com/in/oliver-eierstrand-3032091a3/"
            >LinkedIn</a
          >, {{ $t('resumeFind') }}
          <a
            class="link-text"
            target="_blank"
            href="files/OliverEierstrandCV.pdf"
            >{{ $t('here') }}</a
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
      <h5 style="font-weight: 600">{{ $t('stillCurious') }}</h5>
      <h3>{{ $t('informationHeader') }}</h3>
    </div>

    <div
      class="nopadding"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row">
        <div class="col-12 col-md-6 col-mobile padding-lr padding-r">
          <CollectionSmall img_src="/images/curious.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('curiousHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                {{ $t('curiousText') }}
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div class="col-12 col-md-6 col-mobile padding-lr">
          <CollectionSmall img_src="/images/magnifying.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('detailHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                {{ $t('detailText') }}
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-mobile padding-lr padding-r">
          <CollectionSmall img_src="/images/graduation.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('newGraduateHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                {{ $t('newGraduateText') }}
              </p>
            </template>
          </CollectionSmall>
        </div>
        <div class="col-12 col-md-6 col-mobile padding-lr">
          <CollectionSmall img_src="/images/computer.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('goodGradesHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                {{ $t('goodGradesText') }}
              </p>
            </template>
          </CollectionSmall>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-mobile padding-lr padding-r">
          <CollectionSmall img_src="/images/attention-to-detail.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('outgoingHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">{{ $t('outgoingText') }}</p>
            </template>
          </CollectionSmall>
        </div>

        <div class="col-12 col-md-6 col-mobile padding-lr">
          <CollectionSmall img_src="/images/running.png">
            <template v-slot:collection-header-slot>
              <p>{{ $t('initiativeHeader') }}</p>
            </template>
            <template v-slot:collection-text-slot>
              <p class="collection-text">
                {{ $t('initiativeText') }}
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

<style>
body {
  scroll-behavior: smooth !important;
}

img {
  height: auto;
  max-width: 100%;
}

p {
  color: var(--color-text) !important;
}

a {
  color: #1a2b17 !important;
  text-decoration: underline;
  -webkit-text-decoration-color: transparent;
  text-decoration-color: transparent;
}

.router-link-active {
  cursor: auto !important;
}

.link-text {
  font-weight: bold;
  text-decoration: underline;
}

[data-theme='dark'] .link-text {
  color: var(--color-text) !important;
}

@media (prefers-color-scheme: dark) {
  .link-text:hover {
    color: var(--color-text-green) !important;
  }
}

[data-theme='light'] .link-text:hover {
  color: #518885 !important;
}

@media (prefers-color-scheme: light) {
  .link-text:hover {
    color: #518885 !important;
  }
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

.custom-button {
  color: var(--color-text);
  background-color: var(--collection-background);
  align-items: center;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.custom-button:hover {
  box-shadow: var(--color-text) 0 0 0 3px, transparent 0 0 0 0;
}

.active {
  color: #518882 !important;
}

.padding-lr {
  padding-left: 0px;
  padding-right: 0px;
}

.padding-r {
  padding-right: 30px;
}

.burger-menu {
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1000;
  background: none;
  border: none;
  cursor: pointer;
}

.burger-menu .burger-icon {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: var(--color-text);
}

.burger-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--collection-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.burger-navigation .menu-item {
  margin: 10px 0;
  color: var(--color-text);
  font-size: 1.5rem;
  text-decoration: none;
}

.menu-toggles {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center !important;
  width: 30%;
}

.top-menu {
  margin-top: 50px !important;
}

.center {
  position: relative !important;
  top: auto !important;
  right: auto !important;
}

@media screen and (max-width: 626px) {
  .col-mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .margin-right {
    margin-left: -15px !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }

  .mobile-wrapper {
    padding-top: 20px !important;
  }

  .padding-r {
    padding-right: 0;
  }

  .header {
    display: none !important;
  }

  .burger-menu {
    display: block;
  }

  .top-collection {
    margin-top: 50px !important;
  }
}
@media screen and (max-width: 767px) and (min-width: 626px) {
  .padding-r {
    padding-right: 0 !important;
  }
}
</style>
