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
      localStorage.setItem('language', newLang);
    },
  },
  mounted() {
    const savedLanguage = localStorage.getItem('language') || 'da';
    this.currentLanguage = savedLanguage;
    this.$i18n.locale = savedLanguage;
  },
  methods: {
    changeLanguage(lang) {
      this.currentLanguage = lang;
    },
  },
};
</script>

<template>
  <div class="flag-container">
    <div class="flag-wrapper" @click="changeLanguage('da')" tabindex="0">
      <img
        src="/src/assets/images/Flag_of_Denmark.png"
        alt="Danish"
        class="flag"
        :class="{ active: currentLanguage === 'da' }"
      />
      <div v-if="currentLanguage === 'da'" class="flag-active-indicator"></div>
    </div>
    <div class="flag-wrapper" @click="changeLanguage('en')" tabindex="0">
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
  outline: none;
}

.flag-wrapper:focus {
  outline: none;
}

.flag-wrapper:focus-visible {
  outline: 2px solid rgb(16, 16, 16);
  outline-offset: 3px;
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
</style>
