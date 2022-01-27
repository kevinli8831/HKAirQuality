<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete
          @place_changed='setPlace'
      />
      <button
          @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
        class="test"
        :center='center'
        :options="MapOption"
        @click="temp"
        style='width:100%;  height: 600px;position: relative'
    >
      <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="clickMarker(m)"
      />
      <MyLocationButton @click.native="geolocate()"  style="position: absolute;bottom: 110px;right: 10px"/>

    </GmapMap>
  </div>
</template>

<script>
import {pick} from "lodash"
import demoLocation from "../demo/demoLocation.json"
import MyLocationButton from "@/components/GoogleMapLocationButton/MyLocationButton";

export default {
  name: 'GoogleMap',
  components: {MyLocationButton},
  data() {
    return {
      center: {lat: 22.317722417309373, lng: 114.17434897929937},
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.fetchLocation();
    this.geolocate();
  },

  computed: {

    MapOption() {
      return {
        streetViewControl: false,
        zoom: 11.8,
      }
    }
  },
  methods: {
    pick,
    temp(event){
      console.log(event.latLng.lat())
      console.log(event.latLng.lng())    },
    fetchLocation() {
      // demo, getting api
      demoLocation.locations.forEach(x => {
        let res = pick(x, ['lat', 'lng'])
        this.markers.push({position: res});
      })
    },
    setPlace(place) {
      console.log(place, 'place')
      this.currentPlace = place;
    },
    clickMarker(m) {
      this.center = m.position;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({position: marker});
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(this.currentPlace,'place')
        console.log(this.finalLatLng,'place')
        console.log(this.center,'this.center')
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.test{
  ::v-deep .vue-map-hidden{
  display: block;
  }
}
</style>
