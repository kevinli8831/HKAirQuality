<template>
  <div>
    <div>
      <div class="tag"></div>
      <div
        class="d-inline-flex"
        style="border: 1px solid #cecece; padding: 2px 0px 2px 8px"
      >
        Index
        <v-icon> mdi-chevron-right</v-icon>
      </div>
      <h2>Search and add a pin</h2>
      <GmapAutocomplete @place_changed="setPlace" />
      <button @click="addMarker">Add</button>
    </div>
    <br />
    <GmapMap
      class="googleMap"
      :center="center"
      :options="MapOption"
      style="width: 100%; height: 600px; position: relative"
    >
      <gmap-custom-marker
        v-for="(item, index) in markers"
        :marker="item.position"
        :key="index + 10"
        @click.native="clickMarker(item)"
      >
        <!--        <img src="../../../src/assets/airQualityLogo.jpg" width="20" />-->
        <CustomMarker
          :location="item.location"
          :index="index"
          :aqi="item.aqiStat.aqi"
        />
      </gmap-custom-marker>
      <stat-dialog
        :aqi-stat="aqiStat"
        v-if="dialog"
        :dialog="dialog"
        @switch="switchDialog"
      />
      <AqiTable v-if="showTable" style="position: absolute; bottom: 0px" />
      <!--      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="clickMarker(m)"
      />-->
      <!--      <MyLocationButton @click.native="setMyLocation(myLocation)"  style="position: absolute;bottom: 110px;right: 10px"/>-->
    </GmapMap>
  </div>
</template>

<script>
import AqiTable from "@/components/aqiTable/aqiTable";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import { pick } from "lodash";
import demoLocation from "../../demo/demoLocation.json";
import StatDialog from "@/components/GoogleMap/statDialog";
import CustomMarker from "@/components/GoogleMap/CustomMarker";
// import MyLocationButton from "@/components/GoogleMapLocationButton/MyLocationButton";

export default {
  name: "GoogleMap",
  components: {
    CustomMarker,
    StatDialog,
    AqiTable,
    "gmap-custom-marker": GmapCustomMarker,
  },
  data() {
    return {
      aqiStat: null,
      showTable: false,
      dialog: false,
      myLocation: null,
      center: { lat: 22.317722417309373, lng: 114.17434897929937 },
      currentPlace: null,
      markers: [],
      places: [],
    };
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
      };
    },
  },
  methods: {
    pick,

    fetchLocation() {
      // demo, getting api
      demoLocation.locations.forEach((x) => {
        let res = pick(x, ["lat", "lng"]);
        this.markers.push({
          position: res,
          location: x.name,
          aqiStat: x.aqiStat,
        });
        console.log(this.markers, "markers");
      });
    },
    setPlace(place) {
      console.log(place, "place");
      this.currentPlace = place;
    },
    clickMarker(m) {
      this.center = m.position;
      this.aqiStat = m.aqiStat;
      this.switchDialog();
    },
    switchDialog() {
      this.dialog = !this.dialog;
    },
    setMyLocation(m) {
      this.center = m;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.myLocation = this.center;
        console.log(this.myLocation, "myLocation");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.googleMap {
  ::v-deep .vue-map-hidden {
    display: block;
  }
}
</style>
