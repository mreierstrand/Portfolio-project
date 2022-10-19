<template>
  <div class="collection col-mobile-header">
    <h3 class="collection-header">
      <slot name="collection-header-slot"></slot>
    </h3>
    <h5 class="collection-subheader">
      <slot name="collection-subheader-slot"></slot>
    </h5>
    <h5 class="collection-text">
      <slot name="collection-text-slot"> </slot>
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    img_src: String,
  },
};
</script>

<style>
.collection {
  padding: 20px 40px;
  border-radius: 20px;
  background-color: rgb(245, 245, 246);
  margin-bottom: 40px;
}

.collection-header {
  margin-top: 15px;
  margin-bottom: 10px;
}

.collection-text {
  font-size: 18px;
  line-height: 175%;
}
.collection-subheader {
  font-weight: 600;
}


</style>
