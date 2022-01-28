<template>
  <div @click="$emit('openTable')" class="indexTag d-inline-flex">
    Index
    <v-icon> mdi-chevron-right</v-icon>
  </div>
</template>

<script>
export default {
  name: "IndexTag",
};
</script>

<style scoped>
.indexTag {
  cursor: pointer;
  border: 1px solid #cecece;
  padding: 2px 0px 2px 8px;
  background-color: #fff;
  top: 349px;
  left: 0;
  position: absolute;
}
</style>
