<script>

import {Line, mixins} from "vue-chartjs"
const { reactiveProp } = mixins;
export default {
  extends: Line,
  props:["chartData","options"],
  mixins:[reactiveProp],
  mounted() {
    this.renderChart(this.chartData,this.options)
  },
  watch:{
    chartData(value){
      if(value){
        //renderChart is 新增資料
     // this.renderChart(this.chartData,this.option)
        this.$data._chart.update();
      }
    }
  },
  name: "LineChart"
}
</script>

<style scoped>

</style>