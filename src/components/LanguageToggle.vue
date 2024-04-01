<template>
  <div>
    <button
      class="custom-button"
      style="border-radius: 20px"
      @click="toggleLanguage"
    >
      {{ currentLanguage }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: 'Danish',
    };
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'da' : 'en';
      this.currentLanguage = this.$i18n.locale === 'en' ? 'Danish' : 'English';
    },
  },
};
</script>
