<template>
  <div class="tw-h-full">
    <v-row class="tw-h-full" no-gutters>
      <v-col :xs="12" :sm="12" :md="12" :lg="4" class="tw-shadow-lg tw-px-3">
        <div class="tw-h-full tw-pr-3">
          <DashBoard class="tw-w-full tw-overflow-y-scroll tw-h-[800px]" />
        </div>
      </v-col>
      <v-col :xs="12" :sm="12" :md="12" :lg="8">
        <div class="tw-relative tw-h-full">
          <iframe
            id="myFrame"
            :src="src"
            ref="iframe"
            class="tw-w-full tw-h-full tw-min-h-[600px] tw-shadow-lg"
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
export default {
  name: "test",
  components: { StatDialog, DashBoard },
  created() {},
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
      if (data.aqiStat) this.markerDetail = data.aqiStat;
      console.log(data, "dataFromIframedataFromIframe");
      // this.dataFromIframe?.type==="mouseenter" ? this.isHover=true : this.isHover=false
      // if(this.dataFromIframe?.type==="mouseenter") this.isHover=true
      // console.log(this.dataFromIframe)
      // console.log(this.dataFromIframe?.type)
    },
  },
  methods: {
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
      markerDetail: null,
      isSelected: false,
      dataFromIframe: null,
      src: "PolyuHHB.html",
    };
  },
};
</script>

<style scoped>
.test {
  background-image: ;
}
</style>
