<template>
  <div class="collection">
    <div class="collection-header">
      <img class="collection-img" :src="img_src" alt="Collection image"/>
    </div>
    <h3 class="collection-header-text">
      <slot name="collection-header-slot"></slot>
    </h3>
    <h3 class="collection-text">
      <slot name="collection-text-slot"> </slot>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    img_src: String,
  },
};
</script>

<style scoped>
.collection {
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: rgb(245, 245, 246);
  margin-bottom: 40px;
  min-height: 350px;
}

.collection-header {
  margin-bottom: 20px;
}

.collection-header img {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  max-width: 50px;
  max-height: 50px;
  vertical-align: middle;
}

.collection-header h1 {
  position: relative;
  top: 18px;
  left: 10px;
}
.collection-header-text {
  font-size: 24px;
  line-height: 175%;
}
.collection-text {
  font-size: 18px;
  line-height: 175%;
}
</style>
