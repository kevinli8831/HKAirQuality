<template>
  <div class="tw-text-[#304455] customerWeatherCard">
    <div class="tw-p-[24px] tw-bg-white tw-bg-[#F3F7FB] tw-max-w-[364px]">
      <div class="tw-flex">
        <div class="tw-mr-[16px]">
          <div class="tw-text-[#4A8780] tw-mb-2">Weather</div>
          <div class="tw-text-[18px]">
            What is the current weather in Hong Kong?
          </div>
        </div>
        <div>
          <v-icon color="#CAD4DB" size="80">thunderstorm</v-icon>
        </div>
      </div>
    </div>
    <div class="tw-bg-white tw-p-[24px]">
      <div class="tw-flex tw-justify-between tw-border-b tw-py-2">
        <div>Weather</div>

        <div class="tw-font-bold">
          <!--          {{ weather.generalSituation }}-->
        </div>
      </div>

      <div class="tw-flex tw-justify-between tw-border-b tw-py-2">
        <div>Temperature</div>

        <div class="tw-font-bold">
          <v-icon color="black"> arrow_downward </v-icon>

          {{ weather.minMaxTemperature && weather.minMaxTemperature.min }}°C
          <v-icon color="black"> arrow_upward </v-icon>

          {{ weather.minMaxTemperature && weather.minMaxTemperature.max }}°C
        </div>
      </div>
      <div class="tw-flex tw-justify-between tw-border-b tw-py-2">
        <div>Humidity</div>

        <div class="tw-font-bold">
          {{ weather.humidity && weather.humidity }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    weather: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
