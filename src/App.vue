<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Portfolio from './components/Portfolio.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const updateTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQuery.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  updateTheme();

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', updateTheme);
});
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

html {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
