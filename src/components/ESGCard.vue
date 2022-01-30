<template>
  <div>
    <v-card elevation="8">
      <div style="background-color: #002f6c; padding: 20px; color: #fff">
        <v-icon color="#ffffff" large class="mb-5">mdi-check-all</v-icon>
        <h3 class="mb-5">
          <slot name="title"> Environmental </slot>
        </h3>
        <div>
          <slot name="subTitle"> Conservation of the natural world </slot>
        </div>
      </div>
      <div style="padding: 20px">
        <ul v-for="(item, index) in list" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ESGCard",
  props: {
    list: [],
  },
};
</script>

<style scoped></style>
