<template>
  <div :style="{width:width+'px'}">
  <table>
    <tr>
      <th class="text-center">Air Quality Index (AQI)</th>
    </tr>
    <tr v-for="item in aqiOption" :key="item.value">
      <td>
        <div class="d-flex">
          <aqi-bullet :color="item.value"/>
          {{ item.label }} | {{item.index}}
        </div>
      </td>
    </tr>
  </table>
  </div>

</template>

<script>
import {aqiOption} from "@/data/aqiOption";
import AqiBullet from "@/components/aqiTable/aqiBullet";
export default {
  name: "aqiTable",
  components: {AqiBullet},
  props:{
    width:{
      type:Number,
      default:400
    }
  },
  data(){
    return{
      aqiOption
    }
  }
}
</script>

<style scoped>
table {
  border: 1px solid #dddddd;
  width: 100%;
}
th{
  border-bottom: 1px solid #dddddd;

}

td, th {

  text-align: left;
  padding: 8px;
}

/*tr:nth-child(even) {*/
/*  background-color: #dddddd;*/
/*}*/
</style>