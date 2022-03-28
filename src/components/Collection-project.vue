<template>
  <div class="collection">
    <img class="card-img-top" :src="img_src" />
    <div class="card-body">
      <h3 class="collection-header">
        <slot name="collection-project-header"></slot>
      </h3>
      <h5 class="collection-subheader" style="font-weight: 600">
        <slot name="collection-project-subheader-slot"></slot>
      </h5>
      <p class="card-text">
        <slot name="collection-project-text-slot"> </slot>
      </p>
    </div>
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
img {
  width: 80%;
  margin: auto;
  display: block;
}

.card-img-top {
  margin-bottom: 16px;
}
.card-body {
  padding: 0;
}
</style>
