<template>
  <div class="flag-container">
    <!-- Dansk flag -->
    <div class="flag-wrapper" @click="changeLanguage('da')">
      <img
        src="/src/assets/images/Flag_of_Denmark.png"
        alt="Danish"
        class="flag"
        :class="{ active: currentLanguage === 'da' }"
      />
      <div v-if="currentLanguage === 'da'" class="flag-active-indicator"></div>
    </div>
    <!-- Engelsk flag -->
    <div class="flag-wrapper" @click="changeLanguage('en')">
      <img
        src="/src/assets/images/Flag_of_GB.png"
        alt="English"
        class="flag"
        :class="{ active: currentLanguage === 'en' }"
      />
      <div v-if="currentLanguage === 'en'" class="flag-active-indicator"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: 'da',
    };
  },
  watch: {
    currentLanguage(newLang) {
      this.$i18n.locale = newLang;
    },
  },
  mounted() {

    this.$i18n.locale = this.currentLanguage;
  },
  methods: {
    changeLanguage(lang) {
      this.currentLanguage = lang;
    },
  },
};
</script>

<style scoped>
.flag-container {
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1000;
}

.flag-wrapper {
  position: relative;
}

.flag {
  width: 30px;
  height: 24px;
  cursor: pointer;
}

.flag.active .flag-active-indicator {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #518882;
  transform: translateY(2px);
  z-index: -1;
}

.flag-active-indicator {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 5px;
  border-radius: 1000px;
  background-color: #518882;
  transform: translateY(2px);
  z-index: -1;
}

@media screen and (max-width: 626px) {
  .flag-container {
    display: none;
  }
}
</style>
