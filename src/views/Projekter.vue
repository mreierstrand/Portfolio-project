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
          <RouterLink class="menu-item" to="/">{{
            $t('aboutMeNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/erhvervserfaring">{{
            $t('experienceNav')
          }}</RouterLink>
          <RouterLink class="menu-item active" to="/projekter">{{
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
    <div class="domain-header mobile">
      <img
        class="domain-header-img"
        align="left"
        width="75"
        height="75"
        src="/images/desktop.png"
        alt="Desktop computer"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">
        {{ $t('projectsHeader') }}
      </h5>
      <h3>{{ $t('projectsSubheader') }}</h3>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <CollectionBig
          style="background-color: var(--collection-background)"
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
                <p style="padding: 8.25px">{{ $t('portfolioHeader') }}</p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p style="font-weight: 600; line-height: 32px">
              {{ $t('portfolioSubheader') }}
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p>
              {{ $t('portfolioInformation') }}
            </p>

            <p style="font-weight: bold">
              {{ $t('techStack') }}<br />
              <span
                class="badge badge-pill mr-2"
                style="background-color: white"
                >Vue.js</span
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
                style="color: #181818 !important; background-color: white"
                >GitHub</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>

      <div class="col">
        <CollectionBig
          style="background-color: #feb5bb !important"
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
                <p class="p-dark" style="padding: 8.25px">
                  {{ $t('lassoProjectHeader') }}
                </p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p class="p-dark" style="font-weight: 600; line-height: 32px">
              {{ $t('lassoSubheader') }}
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p class="p-dark">
              {{ $t('lassoInformation1') }}
            </p>
            <p class="p-dark">
              {{ $t('lassoInformation2') }}
            </p>

            <p class="p-dark" style="font-weight: bold">
              {{ $t('techStack') }}<br />
              <span
                class="badge badge-pill mr-2"
                style="background-color: #eee; color: black"
                >Vue.js</span
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
                class="btn btn-light"
                style="color: #181818 !important"
                >{{ $t('lassoWatchLive') }}</a
              >
            </ul>
          </template>
        </CollectionBig>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-6">
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
                <p class="p-dark" style="padding: 8.25px">
                  {{ $t('hjemhedHeader') }}
                </p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p class="p-dark" style="font-weight: 600; line-height: 32px">
              {{ $t('hjemhedSubheader') }}
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p class="p-dark">
              {{ $t('hjemhedInformation1') }}
              <br />
              {{ $t('hjemhedInformation2') }}
            </p>

            <p class="p-dark" style="font-weight: bold">
              {{ $t('techStack') }}
              <br />
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >Vue.js</span
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
                class="btn btn-light"
                style="color: #181818 !important"
                >{{ $t('lassoWatchLive') }}</a
              >
              <a
                href="https://github.com/mreierstrand/5sem-eksamensprojekt"
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
                <p class="p-dark" style="padding: 8.25px">
                  {{ $t('letItGrowHeader') }}
                </p>
              </div>
            </div>
          </template>
          <template v-slot:collection-subheader-slot>
            <p class="p-dark" style="font-weight: 600; line-height: 32px">
              {{ $t('letItGrowSubheader') }}
            </p>
          </template>
          <template v-slot:collection-text-slot>
            <p class="p-dark">
              {{ $t('letItGrowInformation') }}
            </p>

            <p class="p-dark" style="font-weight: bold">
              {{ $t('techStack') }}<br />
              <span class="badge badge-pill mr-2" style="background-color: #eee"
                >Vue.js</span
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
            </p>
            <ul class="viewProject">
              <a
                href="http://letitgrow.azurewebsites.net/"
                target="_blank"
                class="btn btn-light"
                style="color: #181818 !important"
                >{{ $t('letItGrowWatchLive') }}
              </a>
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
          class="custom-button"
        >
          <h5 style="font-weight: 600; margin-bottom: 0">
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
a.menu-item:focus {
  outline: none;
  box-shadow: 0 0 0 2px #518882;
}
.btn-light:focus {
  outline: none;
  box-shadow: 0 0 0 2px #518882;
}

.project-collection {
  height: 400px;
}

p.p-dark {
  color: var(--text-dark) !important;
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

.badge {
  color: #000000;
}

@media only screen and (min-width: 991px) {
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
