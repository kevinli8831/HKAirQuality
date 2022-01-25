<template>
  <div class="mx-4" :style="{width:circleWidth + 'px',backgroundColor:color}" style="border-radius: 30px">
    &nbsp;
  </div>
</template>

<script>
export default {
  name: "aqiBullet",
  props:{
    color:{
      type:String,
      default:'#009966'
    },
    circleWidth:{
      type:Number,
      default:23
    }
  }

}
</script>

<style scoped>

</style>