<template>
  <div>
    <v-dialog
      width="500"
      v-model="dialog"
      @click:outside="$emit('update:dialog', false)"
    >
      <v-card>
        <v-card-title
          class="text-h5 white--text font-weight-bold"
          :style="{ backgroundColor: `#7CB9B2` }"
        >
          {{ aqiStat.location }}
        </v-card-title>
        <v-card-text>
          <div
            v-for="(item, name, index) in aqiStat"
            :key="index"
            class="d-flex align-center py-4"
            style="gap: 20px"
          >
            <h3 style="min-width: 50px">{{ name }}</h3>
            <v-progress-linear
              :value="item"
              color="#7CB9B2"
            ></v-progress-linear>
            <div style="min-width: 40px; text-align: center">
              {{ item }}
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('update:dialog', false)">
            關閉
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { get } from "lodash";
import { aqiOption } from "@/data/aqiOption";
export default {
  name: "statDialog",
  props: {
    aqiStat: {
      type: Object,
      required: true,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { get, aqiOption };
  },
  computed: {
    color() {
      let color = "";
      if (this.aqiStat?.aqiStat?.aqi >= 0 && this.aqiStat?.aqiStat?.aqi <= 50)
        color = aqiOption[0].value;
      if (this.aqiStat?.aqiStat?.aqi >= 51 && this.aqiStat?.aqiStat?.aqi <= 100)
        color = aqiOption[1].value;
      if (
        this.aqiStat?.aqiStat?.aqi >= 101 &&
        this.aqiStat?.aqiStat?.aqi <= 150
      )
        color = aqiOption[2].value;
      if (
        this.aqiStat?.aqiStat?.aqi >= 151 &&
        this.aqiStat?.aqiStat?.aqi <= 200
      )
        color = aqiOption[3].value;
      if (
        this.aqiStat?.aqiStat?.aqi >= 201 &&
        this.aqiStat?.aqiStat?.aqi <= 300
      )
        color = aqiOption[4].value;
      if (this.aqiStat?.aqiStat?.aqi >= 301) color = aqiOption[5].value;
      return color;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
