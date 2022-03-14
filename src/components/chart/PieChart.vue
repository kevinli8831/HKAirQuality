<script>
import {Doughnut,  mixins} from "vue-chartjs"
const { reactiveProp } = mixins;

export default {
  name: "PieChart",
  extends: Doughnut,
  props:["chartData","options"],
  mixins:[reactiveProp],  mounted() {
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

}
</script>

<style scoped>

</style>