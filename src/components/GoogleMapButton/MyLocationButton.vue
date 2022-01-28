<template>
  <div>
    <div class="LocationButton d-flex justify-center">
      <v-icon>
        mdi-crosshairs-gps
      </v-icon>
    </div>

  </div>
</template>

<script>
export default {
  name: "MyLocationButton"
}
</script>

<style scoped>
.LocationButton {
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 8px #9CC8EA ;
  overflow: hidden;
  transition: background-color .16s ease-out;
  cursor: pointer
}
</style>
