<template>
  <div>
    <button type="button" @click="update">test</button>
    <LineChart :chart-data="chartData" :options="options"></LineChart>
    <PieChart :chart-data="chartDataPie" :options="options"></PieChart>
    <PieChart :chart-data="chartDataPie2" :options="options"></PieChart>
  </div>
</template>

<script>
import { shuffle } from "lodash";
import LineChart from "./chart/LineChart";
import PieChart from "./chart/PieChart";
import { colorScheme, getRandomInt } from "../data/aqiOption";
export default {
  name: "DashBoard",
  components: { PieChart, LineChart },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: this.gradient,
            borderColor: "#FC2525",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      chartDataPie: {
        labels: ["skill1", "skill2", `skill3`],
        datasets: [
          {
            data: [2, 6, 8],
            backgroundColor: shuffle(colorScheme),
          },
        ],
      },
      chartDataPie2: {
        labels: ["skill1", "skill2", `skill3`],
        datasets: [
          {
            data: [2, 6, 8],
            backgroundColor: colorScheme.slice(getRandomInt(10)),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data",
        },
      },
    };
  },

  methods: {
    shuffle,
    update() {
      console.log("update dataset");
      this.chartData.datasets[0] = {
        label: "Data 1",
        data: [12, 10, 15, 19, 10, 16, 20],
        backgroundColor: "transparent",
        borderColor: "#FC2525",
        pointBackgroundColor: "rgba(171, 71, 188, 1)",
      };
      this.chartData = {
        ...this.chartData,
      };
    },
  },
};
</script>

<style scoped></style>
