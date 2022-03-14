<template>
<div class="tw-h-full">
  <iframe  id="myFrame" :src='src' ref="iframe" class="tw-w-full tw-h-full "></iframe>
</div>

</template>

<script>




export default {
  name: "test",
  created() {
  },
  mounted() {
    //receive from iframe
    window.addEventListener("message",iframe =>{

      console.log(iframe.data,'iframe')
    })


    // sending data to iframe
    // window.addEventListener(`message`, this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow;
    this.iframeWin.postMessage(`aasd`, "*");

  },
  methods: {
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
    test() {

    }
  },
  props: {
    msg: String
  },
  data() {
    return {
      src: "PolyuHHB.html",
    }
  },
}
</script>

<style scoped>

</style>