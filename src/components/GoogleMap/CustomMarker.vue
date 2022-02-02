<template>
  <div class="marker" :style="{ backgroundColor: color }">
    <div class="tag" :style="{ backgroundColor: color }"></div>

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
        :src="imgSrc()"
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
  },
  data() {
    return { aqiOption, index: 0, aqiLabel: "Good" };
  },
  computed: {
    color() {
      let res = aqiOption.find((x) => x.label === this.aqiLabel);
      console.log(res, "res");
      return res.value;
    },
  },
  methods: {
    imgSrc() {
      if (this.aqi >= 0 && this.aqi <= 50) this.aqiLabel = aqiOption[0].label;
      if (this.aqi >= 51 && this.aqi <= 100) this.aqiLabel = aqiOption[1].label;
      if (this.aqi >= 101 && this.aqi <= 150)
        this.aqiLabel = aqiOption[2].label;
      if (this.aqi >= 151 && this.aqi <= 200)
        this.aqiLabel = aqiOption[3].label;
      if (this.aqi >= 201 && this.aqi <= 300)
        this.aqiLabel = aqiOption[4].label;
      if (this.aqi >= 301) this.aqiLabel = aqiOption[5].label;
      return require("@/assets/aqiImage/" + this.aqiLabel + ".png");
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
