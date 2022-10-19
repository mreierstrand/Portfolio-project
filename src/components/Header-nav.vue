<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="header">
    <div class="header-picture">
      <img
        width="100"
        height="100"
        class="header-img"
        src="../assets/images/CV-billede-farve.png"
        alt="Header image"
      />
    </div>
    <div class="header-menu">
      <h2 class="logo">Oliver Eierstrand</h2>
      <nav id="navbar" class="menu">
        <RouterLink class="menu-item active" to="/">Om mig</RouterLink>
        <RouterLink class="menu-item" to="/erhvervserfaring"
          >Erhvervserfaring</RouterLink
        >
      </nav>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  margin-bottom: 60px;
}

.header-picture {
  flex-shrink: 0;
  margin-right: 4.1493775934%;
}

.header-menu {
  align-self: center;
  width: 100%;
}

.header-img {
  border-radius: 1000px;
  display: block;
  width: 100px;
}

.active {
  color: #518882 !important;
}

.logo {
  color: #191a1d;
  display: inline-block;
  font-size: 1.75rem;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}

.logo::after {
  margin-top: 8%;
  max-width: 30%;
  background: #518882;
  border-radius: 1000px;
  content: '';
  display: block;
  height: 6px;
  width: 100%;
}

.menu {
  display: flex;
  flex-wrap: wrap;
}

.menu-item {
  color: #5e5e5e;
  font-size: 18px;
  font-size: 1.125rem;
  margin-top: 3.640776699%;
}

.menu-item:not(:last-child) {
  margin-right: 4.854368932%;
}
</style>
