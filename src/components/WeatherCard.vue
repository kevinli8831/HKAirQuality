<template>
  <div class="tw-text-[#304455]">
    <div class="tw-p-[24px] tw-bg-white tw-bg-[#F3F7FB] tw-max-w-[364px]">
      <div class="tw-flex">
        <div class="tw-mr-[16px]">
          <div class="tw-text-[#4A8780] tw-mb-2">Weather</div>
          <div class="tw-text-[18px]">
            What is the current weather in Hong Kong?
          </div>
        </div>
        <div>
          <v-img src="@/assets/svg1.svg" style="color: yellow"></v-img>
        </div>
      </div>
    </div>
    <div class="tw-bg-white tw-p-[24px]">
      <div
        v-for="n in 5"
        :key="n"
        class="tw-flex tw-justify-between tw-border-b tw-py-2"
      >
        <div>a</div>
        <div class="tw-font-bold">s</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
};
</script>

<style scoped></style>
