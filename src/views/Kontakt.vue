<script setup>
import LanguageToggle from '../components/LanguageToggle.vue';
import { ref, onMounted, onUnmounted } from 'vue';

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

    <nav
      v-if="menuOpen && windowWidth <= 626"
      class="burger-navigation"
      @click="toggleMenu"
    >
      <RouterLink class="menu-item" to="/">{{ $t('aboutMeNav') }}</RouterLink>
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
      <RouterLink class="menu-item active" to="/kontakt">{{
        $t('contactNav')
      }}</RouterLink>
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
          <h2 class="logo">Oliver Eierstrand</h2>
        </RouterLink>
        <LanguageToggle />
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
          <RouterLink class="menu-item" to="/kundskaber">{{
            $t('itSkillsNav')
          }}</RouterLink>
          <RouterLink class="menu-item" to="/uddannelse">{{
            $t('educationNav')
          }}</RouterLink>
          <RouterLink class="menu-item active" to="/kontakt">{{
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
        src="/images/contact.png"
        alt="Kontakt billede"
      />
      <h5 class="domain-header-mobile" style="font-weight: 600">
        {{ $t('contactHeader') }}
      </h5>
      <h3>{{ $t('contactSubheader') }}</h3>
    </div>

    <div class="container mobile">
      <div
        data-aos="fade-left"
        data-aos-delay="5"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <p style="font-size: 20px; line-height: 24px">
          {{ $t('contactMessage1') }}
          <a href="tel:+4540475805"
            ><b>{{ $t('contactPhone') }}</b></a
          >.
        </p>
        <div class="col socials">
          <a
            style="margin-right: 50px"
            href="https://www.linkedin.com/in/oliver-eierstrand/"
            target="_blank"
            ><i class="fab fa-linkedin-in icon"></i
          ></a>

          <a
            style="margin-right: 50px"
            href="https://github.com/mreierstrand"
            target="_blank"
            ><i class="fab fa-github icon"></i
          ></a>

          <a
            style="margin-right: 50px"
            href="mailto:mreierstrand@hotmail.com"
            target="_blank"
            ><i class="far fa-envelope icon"></i
          ></a>
        </div>

        <p style="font-size: 20px; line-height: 24px; margin-bottom: 40px">
          {{ $t('contactMessage2') }}
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-once="true"
        data-aos-duration="1250"
      >
        <form
          target="_blank"
          action="https://formsubmit.co/mreierstrand@hotmail.com"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <div class="col-12 col-md-6">
                <label
                  ><p class="label-text">
                    {{ $t('contactName') }} <span class="form-required">*</span>
                  </p></label
                >
                <input type="text" name="name" class="form-control" required />
              </div>
              <div class="col-12 col-md-6 label-mobile">
                <label
                  ><p class="label-text">
                    {{ $t('contactEmail') }}
                    <span class="form-required">*</span>
                  </p></label
                >
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label
              ><p class="label-text">
                {{ $t('contactYourMessage') }}
                <span class="form-required">*</span>
              </p></label
            >
            <textarea class="form-control" name="message" required></textarea>
          </div>
          <button type="submit" class="custom-button">
            {{ $t('contactSendMessage') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
input,
textarea {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 3%);
  font-family: Rubik, sans-serif;
  font-weight: 300;
}

textarea {
  min-height: 150px !important;
}

input {
  height: 50px !important;
}

input,
textarea {
  color: var(--text-color) !important;
}

h4 {
  margin: 0 !important;
}

input:hover {
  border: 1px solid #726f6f;
  box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
}

textarea:hover {
  border: 1px solid #726f6f;
  box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
}

p {
  margin-bottom: 20px;
}

.form-control {
  background-color: var(--collection-background);
}

.form-control:focus {
  color: var(--text-color);
  background-color: var(--collection-background);
  border-color: var(--color-text);
  outline: 0;
  box-shadow: var(--color-text) 0 0 0 1px, transparent 0 0 0 0;
}

.row {
  margin-left: auto;
  margin-right: auto;
}
.container {
  max-width: 760px;
}

.form-required {
  color: #c1594b;
}
.label-text {
  font-size: 20px;
  line-height: 32px;
  margin: 0 !important;
}
.form-required {
  color: #c1594b;
}

.icon {
  font-size: 2.2em;
}

.socials {
  margin-bottom: 20px;
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

@media screen and (max-width: 626px) {
  .mobile {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 767px) {
  .label-mobile {
    margin-top: 15px !important;
  }
  .domain-header-mobile {
    margin-top: 80px;
  }
}
</style>
