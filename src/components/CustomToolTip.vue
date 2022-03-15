<template>
<div class="tw-p-2 tw-absolute tw-bg-white" :style="{left:left,top:top}" style="box-shadow: 0 1px 2px rgb(0 0 0 / 10%);">
  <div class="tw-text-right">
    <v-icon @click="$emit('update:isSelected',false)">mdi-close</v-icon>
  </div>
  asdas
</div>
</template>

<script>
export default {
  name: "CustomToolTip",
  props:{
    left:String,
    top:String,
    isSelected:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>

</style>