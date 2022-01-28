<template>
  <div>
    <template v-if="isTable">
      <div :style="{ width: width + 'px' }" style="background-color: #fff">
        <table>
          <tr>
            <th class="text-center py-2" style="position: relative">
              Air Quality Index (AQI )
              <v-btn
                icon
                @click="$emit('closeTable')"
                style="position: absolute; top: -2px; right: 0"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </th>
          </tr>
          <tr v-for="item in aqiOption" :key="item.value">
            <td>
              <div class="d-flex flex-nowrap align-center">
                <aqi-bullet :icon="item.label" />
                {{ item.label }} | {{ item.index }}
              </div>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template v-else>
      <div></div>
    </template>
  </div>
</template>

<script>
import { aqiOption } from "@/data/aqiOption";
import AqiBullet from "@/components/aqiTable/aqiBullet";

export default {
  name: "aqiTable",
  components: { AqiBullet },
  props: {
    width: {
      type: Number,
      default: 300,
    },
    isTable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      aqiOption,
    };
  },
};
</script>

<style scoped>
table {
  border: 1px solid #dddddd;
  width: 100%;
}

th {
  border-bottom: 1px solid #dddddd;
}

td,
th {
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  padding: 4px;
}

/*tr:nth-child(even) {*/
/*  background-color: #dddddd;*/
/*}*/
</style>
