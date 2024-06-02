<template>
  <div class="dropdown-container">
    <label class="language-label" for="locale">{{ $t('selectLang') }}:</label>
    <select
      id="locale"
      v-model="currentLanguage"
      @change="toggleLanguage"
      class="custom-select"
    >
      <option value="en">English</option>
      <option value="da">Danish</option>
    </select>
    *WIP*
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: 'en',
    };
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.currentLanguage;
    },
  },
};
</script>

<style>
.language-label {
  margin-right: 10px;
}

.dropdown-container {
  display: inline-block;
  position: relative;
}

.custom-select {
  padding: 8px 32px 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  width: 110px; /* Set a fixed width */
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}
</style>
