const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://hkairqualityindoor-db:PnJVKHEcNm3m3xydKxuvQGLI7fqHvwqzbnFIkl4N4B9Gp89qFDmk5PzvuyHn0vpGdolEYTZfpjv2q8mA44ufeA==@hkairqualityindoor-db.mongo.cosmos.azure.com:10255/HKAirQualityIndoorMonitorSystem?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@hkairqualityindoor-db@",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to Database ");
});

app.use(express.json());

const speedRouter = require("./routes/speed");
const port = process.env.PORT || 8081;

app.use("/speed", speedRouter);
app.listen(port, () => {
  console.log("Connected to port " + port);
  console.log("Server Started");
});
