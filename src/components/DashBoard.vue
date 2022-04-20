<template>
  <div class="pa-1">
    <div class="tw-max-w-[150px] text-right ml-auto">
      <v-select
        outlined
        hide-details
        dense
        :items="selectDateList"
        label="Date"
        v-model="selectedDate"
      />
    </div>
    <LineChart
      :chart-data="allTemperature"
      :options="temperatureOptions"
    ></LineChart>
    <!--    <PieChart :chart-data="chartDataPie" :options="options"></PieChart>
    <PieChart :chart-data="chartDataPie2" :options="options"></PieChart>-->
  </div>
</template>

<script>
import { shuffle } from "lodash";
import LineChart from "./chart/LineChart";
import { colorScheme, getRandomInt } from "../data/aqiOption";
import moment from "moment";
export default {
  name: "DashBoard",
  components: { LineChart },
  props: {
    AQIAllData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedDate: "Week",
      selectDateList: ["All", "Month", "Week", "Day"],
      chartData: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9],
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

      temperatureOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Speed",
        },
      },
    };
  },
  watch: {
    selectedDate() {},
  },
  computed: {
    allTemperature() {
      let TemperatureList = null;
      let labels = [];

      if (this.selectedDate === `Day`) {
        TemperatureList = this.findDateMonthWeek("day");
        TemperatureList = this.dynamicDivideDataset(TemperatureList, 10);
        labels = TemperatureList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TemperatureList = TemperatureList.map((item) => item.temperature);
      }
      if (this.selectedDate === `Month`) {
        TemperatureList = this.findDateMonthWeek("month");
        TemperatureList = this.dynamicDivideDataset(TemperatureList, 30);
        labels = TemperatureList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TemperatureList = TemperatureList.map((item) => item.temperature);
      }
      if (this.selectedDate === `Week`) {
        TemperatureList = this.findDateMonthWeek("week");
        TemperatureList = this.dynamicDivideDataset(TemperatureList, 20);
        labels = TemperatureList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TemperatureList = TemperatureList.map((item) => item.temperature);
      }
      if (this.selectedDate === `All`) {
        TemperatureList = [...this.AQIAllData];
        TemperatureList = this.dynamicDivideDataset(TemperatureList, 100);
        labels = TemperatureList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TemperatureList = TemperatureList.map((item) => item?.temperature);
      }
      return {
        datasets: [
          {
            label: "Temperature",
            data: TemperatureList,
            borderColor: "#FC2525",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
        labels: labels,
      };
    },
  },
  methods: {
    moment,
    shuffle,
    sortingDateList(dates) {
      const sortedDates = dates.sort((a, b) =>
        moment(a?.EventEnqueuedUtcTime).diff(moment(b))
      );
      return sortedDates;
    },
    findDateMonthWeek(typeOfDate) {
      let res = "";
      let latest = [];
      const DataList = this.sortingDateList([...this.AQIAllData]);
      latest = DataList[0];
      let moment1 = moment(latest?.EventEnqueuedUtcTime);
      res = DataList.filter((x) => {
        let moment2 = moment(x?.EventEnqueuedUtcTime);
        return moment1.isSame(moment2, typeOfDate);
      });
      return res;
    },

    dynamicDivideDataset(dataset = [Array(10)], remain = 20) {
      let length = dataset.length;
      let indexValue = Math.floor(length / remain);
      let tempDataSet = [...dataset];
      let index = 1;
      let res = [];
      console.log(
        `dataset length: ${length}, remain :${remain},indexValue:${indexValue}`
      );
      tempDataSet.forEach((x) => {
        if (index === indexValue) {
          res.push(x);
          index = 1;
        } else index = index + 1;
      });
      return res;
    },
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
