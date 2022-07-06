<script setup>
import { RouterLink, RouterView } from "vue-router";
import Portfolio from "./components/Portfolio.vue";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

html {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
