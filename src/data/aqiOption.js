export const aqiOption = [
  // Color Should Different
  { value: `#B3ED75`, label: "Good", description: `Green`, index: "0 - 50" },
  {
    value: `#E8D86A`,
    label: "Moderate",
    description: `Yellow`,
    index: "51 - 100",
  },
  {
    value: `#F2B360`,
    label: "Unhealthy for Sensitive Groups",
    description: `Orange`,
    index: "101 - 150",
  },
  {
    value: `#EB6C76`,
    label: "Unhealthy",
    description: `Red`,
    index: "151 - 200",
  },
  {
    value: `#AA71B9`,
    label: "Very Unhealthy",
    description: `Purple`,
    index: "201 - 300",
  },
  {
    value: `#895672`,
    label: "Hazardous",
    description: `Maroon`,
    index: "301 - Higher",
  },
];

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export const colorScheme = [
  "#25CCF7","#FD7272","#54a0ff","#00d2d3",
  "#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e",
  "#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50",
  "#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6",
  "#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d",
  "#55efc4","#81ecec","#74b9ff","#a29bfe","#dfe6e9",
  "#00b894","#00cec9","#0984e3","#6c5ce7","#ffeaa7",
  "#fab1a0","#ff7675","#fd79a8","#fdcb6e","#e17055",
  "#d63031","#feca57","#5f27cd","#54a0ff","#01a3a4"
]