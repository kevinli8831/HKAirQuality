<template>
  <div class="tw-h-full">
  <v-row class="tw-h-full" >
    <v-col :xs="12" :sm="12" :md="12" :lg="4" class="tw-shadow-lg">
      <DashBoard class="tw-w-full tw-overflow-y-scroll tw-h-[800px] "/>
    </v-col>
    <v-col :xs="12" :sm="12" :md="12" :lg="8" >
      <div class="tw-relative tw-h-full">
      <iframe id="myFrame" :src='src' ref="iframe" class="tw-w-full tw-h-full tw-min-h-[600px] "></iframe>
      <CustomToolTip v-if="isSelected" :is-selected.sync="isSelected" :left="positionX" :top="positionY"  ref="tooltip" />
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
import CustomToolTip from "../components/CustomToolTip";
export default {
  name: "test",
  components: {CustomToolTip, DashBoard},
  created() {
  },
  mounted() {
    //receive from iframe
    window.addEventListener("message",iframe =>{
      //Guard Cluase
      if(!iframe)return;
      if(iframe?.data?.source) return;
        this.dataFromIframe=iframe.data
    })

    // sending data to iframe
    // window.addEventListener(`message`, this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow;
    this.iframeWin.postMessage(`aasd`, "*");
  },
  watch:{
    dataFromIframe(){
      let data=this.dataFromIframe
      if(data.source) return;
      if(data.markerLocation) this.checkMarkerPosition(data.markerLocation)
      console.log(data,'dataFromIframedataFromIframe')
      // this.dataFromIframe?.type==="mouseenter" ? this.isHover=true : this.isHover=false
      // if(this.dataFromIframe?.type==="mouseenter") this.isHover=true
    // console.log(this.dataFromIframe)
    // console.log(this.dataFromIframe?.type)
    },
  },
  methods: {
  async checkMarkerPosition(markerLocation){
      if(!markerLocation) return
    let x=markerLocation.x;
    let y=markerLocation.y;
    // let clientWidth=this.$refs?.tooltip?.$el?.clientWidth;
    // let clientHeight=this.$refs?.tooltip?.$el?.clientHeight;
    let marketHeight=30

    console.log(this.$refs?.tooltip,'this.$refs?.tooltip')
    console.log(x,'x')
    console.log(y,'y')

    this.positionY=y+marketHeight+`px`;
    // this.positionY=y-clientHeight-marketHeight+`px`;
    this.positionX=x+`px`;
    // this.positionX=x-clientWidth/2+`px`;

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
    msg: String
  },
  data() {
    return {
      positionX:100+`px`,
      positionY:200+`px`,
      isSelected:false,
      dataFromIframe:null,
      src: "PolyuHHB.html",
    }
  },
}
</script>

<style scoped>

</style>