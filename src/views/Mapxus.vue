<template>
  <div class="tw-h-full tw-relative">
    <v-alert
      v-if="false"
      style="width: 100%; position: absolute; z-index: 99999"
      border="left"
      type="error"
      class="tw-bottom-3"
      transition="scale-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          There might be a fire on it since the speed temperature is higher than
          normal.
        </v-col>
        <v-col class="shrink">
          <v-btn>Call Police</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-row
      class="tw-h-full tw-gap-x-4"
      :class="$vuetify.breakpoint.mdAndDown ? `tw-flex-wrap` : `tw-flex-nowrap`"
    >
      <v-col cols="12" :sm="12" :md="12" :lg="4" class="tw-shadow-lg tw-px-3">
        <div class="customMap overflow-auto">
          <DashBoard
            class="tw-w-full tw-h-full"
            :AQIAllData="AQIAllData"
            @reload="reload"
          />
        </div>
      </v-col>
      <v-col cols="12" :sm="12" :md="12" :lg="8">
        <div class="tw-relative tw-h-full">
          <iframe
            id="myFrame"
            :src="src"
            ref="iframe"
            class="tw-w-full customMap tw-shadow-lg"
          ></iframe>
          <stat-dialog
            v-if="isSelected"
            :dialog.sync="isSelected"
            :aqi-stat="markerDetail"
          />
        </div>
      </v-col>
    </v-row>
    <!--<div class="tw-h-full tw-flex-wrap tw-flex tw-flex-row tw-space-x-5">-->
    <!--  <div class="tw-w-1/3 sm:tw-w-full tw-shadow-lg md:tw-w-1/3 lg:tw-w-1/3 xl:tw-w-1/3  ">-->
    <!--    <div class="tw-p-4 ">-->
    <!--      <div class="tw-text-3xl sm:tw-text-sm">-->
    <!--        a-->
    <!--      </div>-->

    <!--    </div>-->

    <!--  </div>-->

    <!--<div class="tw-h-full tw-w-2/3 sm:tw-w-full md:tw-w-2/3 lg:tw-w-2/3 xl:tw-w-2/3  " >-->
    <!--</div>-->
    <!--  </div>-->
  </div>
</template>

<script>
//從iframe的html檔中要傳回給.vue檔的資料

// window.parent.postMessage({zoom, result}, '*');

import DashBoard from "../components/DashBoard";
import StatDialog from "../components/GoogleMap/statDialog";
// import axios from "axios";

export default {
  name: "Mapxus",
  components: { StatDialog, DashBoard },
  created() {},
  beforeMount() {
    fetch("https://express-db.azurewebsites.net/api/v1/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        this.AQIAllData = data;
      })
      .catch((e) => {
        console.log(`Error message:${e}`);
      });
    //vue getting data from mongodb server express
    /*   let apiURL = "http://localhost:8081/speed";
    axios
      .get(apiURL)
      .then((res) => {
        let temp = res.data;
        console.log(temp, "res");
      })
      .catch((error) => {
        console.log(error, "error from vue");
      });*/
  },
  mounted() {
    //receive from iframe
    window.addEventListener("message", (iframe) => {
      //Guard Cluase
      if (!iframe) return;
      if (iframe?.data?.source) return;
      this.dataFromIframe = iframe.data;
    });

    // sending data to iframe
    // window.addEventListener(`message`, this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow;
    this.iframeWin.postMessage(`aasd`, "*");
  },
  watch: {
    dataFromIframe() {
      let data = this.dataFromIframe;
      if (data.source) return;
      if (data.markerLocation) this.PopupDetails(data.markerLocation);
      if (data.data) this.markerDetail = data.data;
      // this.dataFromIframe?.type==="mouseenter" ? this.isHover=true : this.isHover=false
      // if(this.dataFromIframe?.type==="mouseenter") this.isHover=true
      // console.log(this.dataFromIframe)
      // console.log(this.dataFromIframe?.type)
    },
  },
  methods: {
    async reload() {
      fetch("https://express-db.azurewebsites.net/api/v1/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "data");
          this.AQIAllData = data;
        })
        .catch((e) => {
          console.log(`Error message:${e}`);
        });
    },
    async PopupDetails(markerLocation) {
      if (!markerLocation) return;
      this.isSelected = true;
    },
    //(event)

    handleMessage() {
      // MapxusMap, map,mapbox,mapboxgl,
      // console.log(event.target[0]?.MapxusMap, 'MapxusMap')
      // console.log(event.target[0]?.map, 'map')
      // console.log(event.target[0]?.mapbox, 'mapbox')
      // console.log(event.target[0]?.mapboxgl, 'mapboxgl')
      //your scripts
    },
    sendMsg() {
      // send data to Html
      this.iframeWin.postMessage(`aasd`, "*");
    },
  },
  props: {
    msg: String,
  },
  data() {
    return {
      AQIAllData: [],
      markerDetail: null,
      isSelected: false,
      dataFromIframe: null,
      src: "PolyuHHB.html",
    };
  },
};
</script>

<style scoped>
.customMap {
  height: calc(100vh - 120px);
}
</style>
