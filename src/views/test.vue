<template>
<div class="tw-h-full">
  <div class="tw-h-full">
    <div class="tw-w-1/2">
    <DashBoard/>
    </div>
<div class="tw-w-1/2 tw-h-full">
  <iframe  id="myFrame" :src='src' ref="iframe" class="tw-w-full tw-h-full "></iframe>
</div>
  </div>
</div>

</template>

<script>

//從iframe的html檔中要傳回給.vue檔的資料

// window.parent.postMessage({zoom, result}, '*');


import DashBoard from "../components/DashBoard";
export default {
  name: "test",
  components: {DashBoard},
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
      this.isHover=data.type==="mouseover"
      // this.dataFromIframe?.type==="mouseenter" ? this.isHover=true : this.isHover=false
      // if(this.dataFromIframe?.type==="mouseenter") this.isHover=true
    // console.log(this.dataFromIframe)
    // console.log(this.dataFromIframe?.type)
    },
  },
  methods: {
    checkMarkerPosition(markerLocation){
      if(!markerLocation) return
    let x=markerLocation.x;
    let y=markerLocation.y;
    console.log(x,'x')
    console.log(y,'y')
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
      isHover:false,
      dataFromIframe:null,
      src: "PolyuHHB.html",
    }
  },
}
</script>

<style scoped>

</style>