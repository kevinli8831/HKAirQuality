const express = require("express");
const router = express.Router();
const Speed = require("../models/Speed");

//Getting all
router.get("/", async (req, res) => {
  try {
    const speed = await Speed.find();
    res.json(speed);
  } catch (e) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
});
module.exports = router;
