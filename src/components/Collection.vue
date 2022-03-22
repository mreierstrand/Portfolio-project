<template>
  <div class="collection">
    <div class="collection-header">
      <img class="collection-img"
      :src="img_src"
      />
    </div>
    <h1>
      <slot name="collection-header-slot"></slot>
    </h1>
    <h5 class="collection-text">
      <slot name="collection-text-slot"> </slot>
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    img_src: String,
  }
}
</script>

<style>
.collection {
  padding: 20px 40px;
  border-radius: 20px;
  background-color: rgb(245, 245, 246);
  margin-bottom: 60px;
  /* box-shadow: 0 10px 40px 0 rgb(0 0 0 / 15%); */
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
  /* display: inline-block; */
}

.collection-header h1 {
  position: relative;
  top: 18px;
  left: 10px;
}

.collection-text {
  font-size: 18px;
  line-height: 175%;
}
</style>
