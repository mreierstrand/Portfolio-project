<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Portfolio from './components/Portfolio.vue';
// import LanguageToggle from './components/LanguageToggle.vue';
</script>

<template>
  <!-- <LanguageToggle /> -->
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

html {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
