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
    <div>
      <LineChart
        class="mb-10"
        :chart-data="allTemperature"
        :options="temperatureOptions"
      ></LineChart>
      <LineChart
        class="mb-10"
        :chart-data="allHumidity"
        :options="temperatureOptions"
      ></LineChart>
      <LineChart
        class="mb-10"
        :chart-data="allECO2"
        :options="temperatureOptions"
      ></LineChart>
      <LineChart
        class="mb-10"
        :chart-data="allTWOC"
        :options="temperatureOptions"
      ></LineChart>
    </div>

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
    allHumidity() {
      let HumidityList = null;
      let labels = [];
      if (this.selectedDate === `Day`) {
        HumidityList = this.findDateMonthWeek("day");
        HumidityList = this.dynamicDivideDataset(HumidityList, 10);
        labels = HumidityList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        HumidityList = HumidityList.map((item) => item.humidity);
      }
      if (this.selectedDate === `Month`) {
        HumidityList = this.findDateMonthWeek("month");
        HumidityList = this.dynamicDivideDataset(HumidityList, 30);
        labels = HumidityList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        HumidityList = HumidityList.map((item) => item.humidity);
      }
      if (this.selectedDate === `Week`) {
        HumidityList = this.findDateMonthWeek("week");
        HumidityList = this.dynamicDivideDataset(HumidityList, 20);
        labels = HumidityList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        HumidityList = HumidityList.map((item) => item.humidity);
      }
      if (this.selectedDate === `All`) {
        HumidityList = [...this.AQIAllData];
        HumidityList = this.dynamicDivideDataset(HumidityList, 100);
        labels = HumidityList.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        HumidityList = HumidityList.map((item) => item?.humidity);
      }
      return {
        datasets: [
          {
            label: "Humidity",
            data: HumidityList,
            borderColor: "#FC2525",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
        labels: labels,
      };
    },
    allECO2() {
      let ECO2 = null;
      let labels = [];
      if (this.selectedDate === `Day`) {
        ECO2 = this.findDateMonthWeek("day");
        ECO2 = this.dynamicDivideDataset(ECO2, 10);
        labels = ECO2.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        ECO2 = ECO2.map((item) => item.eCO2);
      }
      if (this.selectedDate === `Month`) {
        ECO2 = this.findDateMonthWeek("month");
        ECO2 = this.dynamicDivideDataset(ECO2, 30);
        labels = ECO2.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        ECO2 = ECO2.map((item) => item.eCO2);
      }
      if (this.selectedDate === `Week`) {
        ECO2 = this.findDateMonthWeek("week");
        ECO2 = this.dynamicDivideDataset(ECO2, 20);
        labels = ECO2.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        ECO2 = ECO2.map((item) => item.eCO2);
      }
      if (this.selectedDate === `All`) {
        ECO2 = [...this.AQIAllData];
        ECO2 = this.dynamicDivideDataset(ECO2, 100);
        labels = ECO2.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        ECO2 = ECO2.map((item) => item?.eCO2);
      }
      return {
        datasets: [
          {
            label: "eCO2",
            data: ECO2,
            borderColor: "#FC2525",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
        labels: labels,
      };
    },
    allTWOC() {
      let TWOC = null;
      let labels = [];
      if (this.selectedDate === `Day`) {
        TWOC = this.findDateMonthWeek("day");
        TWOC = this.dynamicDivideDataset(TWOC, 10);
        labels = TWOC.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TWOC = TWOC.map((item) => item.TVOC);
      }
      if (this.selectedDate === `Month`) {
        TWOC = this.findDateMonthWeek("month");
        TWOC = this.dynamicDivideDataset(TWOC, 30);
        labels = TWOC.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TWOC = TWOC.map((item) => item.TVOC);
      }
      if (this.selectedDate === `Week`) {
        TWOC = this.findDateMonthWeek("week");
        TWOC = this.dynamicDivideDataset(TWOC, 20);
        labels = TWOC.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TWOC = TWOC.map((item) => item.TVOC);
      }
      if (this.selectedDate === `All`) {
        TWOC = [...this.AQIAllData];
        TWOC = this.dynamicDivideDataset(TWOC, 100);
        labels = TWOC.map((item) =>
          moment(item?.EventEnqueuedUtcTime).format("YYYY-MM-DD LTS")
        );
        TWOC = TWOC.map((item) => item?.TVOC);
      }
      return {
        datasets: [
          {
            label: "TWOC",
            data: TWOC,
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
      console.log(sortedDates, "sortedDates");
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
