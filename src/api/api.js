import axios from "axios";
export async function getCurrentWeather() {
  let meanTemperature = await getMeanTemperature();
  let minMaxTemperature = await getMinMaxTemperature();
  let humidity = await getHumidity();
  let generalSituation = await getGeneralSituation();
  let res = Object.assign(
    {},
    {
      meanTemperature: meanTemperature,
      minMaxTemperature: minMaxTemperature,
      humidity: humidity,
      generalSituation: generalSituation,
    }
  );
  return res;
}
async function getMeanTemperature() {
  let dataType = `rhrread`;
  return axios
    .get(
      `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${dataType}&lang=tc`
    )
    .then((response) => {
      let res = response.data?.temperature?.data.find(
        (x) => x.place === `香港天文台`
      )?.value;
      return res || "";
    })
    .catch((error) => console.log(error));
}
async function getMinMaxTemperature() {
  let dataType = `flw`;
  return axios
    .get(
      `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${dataType}&lang=tc`
    )
    .then((response) => {
      let res = response.data?.forecastDesc.replace(/\D/g, "");
      let min = 0;
      let max = 0;
      if (res.length === 4) {
        min = res.substring(0, 2);
        max = res.substring(2, 4);
      }
      if (res.length === 3) {
        min = res.substring(0, 1);
        max = res.substring(1, 3);
      }
      if (res.length === 2) {
        min = res.substring(0, 1);
        max = res.substring(1, 2);
      }
      res = Object.assign({}, { min: min, max: max });
      return res || "";
    })
    .catch((error) => console.log(error));
}
async function getHumidity() {
  let dataType = `rhrread`;
  return axios
    .get(
      `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${dataType}&lang=tc`
    )
    .then((response) => {
      let res =
        response.data?.humidity?.data.find((x) => x.place === `香港天文台`)
          .value + `%`;
      return res || "";
    })
    .catch((error) => console.log(error));
}

async function getGeneralSituation() {
  return axios
    .get(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en"
    )
    .then((response) => {
      return response.data?.generalSituation;
    })
    .catch((error) => console.log(error));
}
