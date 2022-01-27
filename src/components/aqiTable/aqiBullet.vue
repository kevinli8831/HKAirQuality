<template>
  <div>
    <v-img
      class="mr-2"
      :max-width="iconWidth"
      :src="require('@/assets/aqiImage/' + icon + '.png')"
    ></v-img>
  </div>
  <!--  <div class="mx-4" :style="{width:circleWidth + 'px',backgroundColor:color}" style="border-radius: 30px">-->
  <!--    &nbsp;-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "aqiBullet",
  props: {
    icon: {
      type: String,
      default: "Good",
    },
    iconWidth: {
      type: Number,
      default: 25,
    },
  },
};
</script>

<style scoped></style>
