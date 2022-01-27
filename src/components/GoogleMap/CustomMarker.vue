<template>
  <div class="marker" :style="{ backgroundColor: aqiOption[index].value }">
    <div class="tag" :style="{ backgroundColor: aqiOption[index].value }"></div>

    <h2 style="font-size: initial">
      {{ location || `紅磡` }}
    </h2>
    <hr class="my-2" />
    <!--    <v-divider class="my-2" style="background-color: #fff; height: 10px" />-->
    <div class="d-flex">
      <v-img
        class="mr-2"
        max-width="20"
        style="border-radius: 6px"
        :src="imgSrc"
      ></v-img>
      <h3 style="font-weight: initial; font-size: initial">
        {{ aqi }}
      </h3>
    </div>
  </div>
</template>

<script>
import { aqiOption } from "@/data/aqiOption";
export default {
  name: "CustomMarker",
  props: {
    location: {
      type: String,
      default: "紅磡",
    },
    aqi: {
      type: Number,
      default: 40,
    },
    index: Number,
  },
  data() {
    return { aqiOption };
  },
  computed: {
    imgSrc() {
      let res = "Good";
      if (this.aqi >= 0 && this.aqi <= 50) res = "Good";
      if (this.aqi >= 51 && this.aqi <= 100) res = "Moderate";
      if (this.aqi >= 101 && this.aqi <= 150)
        res = "Unhealthy for Sensitive Groups";
      if (this.aqi >= 151 && this.aqi <= 200) res = "Unhealthy";
      if (this.aqi >= 201 && this.aqi <= 300) res = "Very Unhealthy";
      if (this.aqi >= 301) res = "Hazardous";
      return require("@/assets/aqiImage/" + res + ".png");
    },
  },
};
</script>

<style scoped>
.marker {
  border-radius: 10px;
  color: #ffffff;
  padding: 12px 20px;
  box-shadow: 0 1px 2px;
  position: relative;
}

.tag {
  box-shadow: -2px 2px 2px 0 rgb(178 178 178 / 0.4);
  content: "";
  height: 15px;
  left: calc(50%);
  position: absolute;
  bottom: -15px;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 15px;
}
hr {
  border: none;
  height: 2px;
  /* Set the hr color */
  color: #fff; /* old IE */
  background-color: #fff; /* Modern Browsers */
}
</style>
