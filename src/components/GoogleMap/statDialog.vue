<template>
  <div>
    <v-dialog
      width="1000"
      v-model="dialog"
      @click:outside="$emit('update:dialog', false)"
    >
      <v-card>
        <v-card-title
          class="text-h5 white--text font-weight-bold tw-flex"
          :style="{ backgroundColor: `#7CB9B2` }"
          style="justify-content: space-between"
        >
          <div>Speed</div>
          <div>
            {{ moment(aqiStat.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS") }}
          </div>
        </v-card-title>
        <v-card-text>
          <div class="d-flex align-center py-4" style="column-gap: 30px">
            <div class="tw-text-lg tw-min-w-[120px]">ECO2</div>
            <v-progress-linear
              color="#7CB9B2"
              :value="setProgressLinearValue(aqiStat.eCO2, 2000)"
            >
            </v-progress-linear>
            <div
              style="min-width: 100px; text-align: center"
              class="tw-text-lg"
            >
              {{ aqiStat.eCO2 }} ppm
            </div>
          </div>
          <div class="d-flex align-center py-4" style="column-gap: 30px">
            <div class="tw-text-lg tw-min-w-[120px]">TVOC</div>
            <v-progress-linear
              color="#7CB9B2"
              :value="setProgressLinearValue(aqiStat.TVOC, 10)"
            >
            </v-progress-linear>
            <div
              style="min-width: 100px; text-align: center"
              class="tw-text-lg"
            >
              {{ aqiStat.TVOC }} mg/m³
            </div>
          </div>
          <div class="d-flex align-center py-4" style="column-gap: 30px">
            <div class="tw-text-lg tw-min-w-[120px]">Humidity</div>
            <v-progress-linear
              color="#7CB9B2"
              :value="setProgressLinearValue(aqiStat.humidity, 100)"
            >
            </v-progress-linear>
            <div
              style="min-width: 100px; text-align: center"
              class="tw-text-lg"
            >
              {{ aqiStat.humidity }}%
            </div>
          </div>
          <div class="d-flex align-center py-4" style="column-gap: 30px">
            <div class="tw-text-lg tw-min-w-[120px]">Temperature</div>
            <v-progress-linear
              color="#7CB9B2"
              :value="setProgressLinearValue(aqiStat.temperature, 100)"
            >
            </v-progress-linear>
            <div
              style="min-width: 100px; text-align: center"
              class="tw-text-lg"
            >
              {{ Math.round(aqiStat.temperature * 10) / 10 }}°C
            </div>
          </div>
          <!--          <div-->
          <!--            v-for="(item, name, index) in Object.fromEntries(-->
          <!--              Object.entries(aqiStat).filter(([key, value]) => key !== 'IoTHub')-->
          <!--            )"-->
          <!--            :key="index"-->
          <!--            class="d-flex align-center py-4"-->
          <!--            style="gap: 20px"-->
          <!--          >-->
          <!--            <h3 style="min-width: 50px">{{ name }}</h3>-->
          <!--            <v-progress-linear-->
          <!--              :value="item"-->
          <!--              color="#7CB9B2"-->
          <!--            ></v-progress-linear>-->
          <!--            <div style="min-width: 40px; text-align: center">-->
          <!--              {{ item }}-->
          <!--            </div>-->
          <!--          </div>-->
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
import moment from "moment";
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
    setProgressLinearValue() {
      return (value, max) => {
        return (value / max) * 100;
      };
    },
  },
  methods: { moment },
};
</script>

<style scoped></style>
