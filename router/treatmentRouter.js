let express = require("express");
let Treatment = require("../model/treatmentModel");
let treatmentRouting = express.Router();

treatmentRouting.get("/treament", async (req, res) => {
  let treatment = await Treatment.find();
  res.send(treatment);
});

treatmentRouting.post("/treament", async (req, res) => {
  let treatment = new Treatment(req.body);
  let result = await treatment.save();
  res.send(result);
});

treatmentRouting.get("/treament/:tid", async (req, res) => {
  let treatment = await Treatment.findOne({ _id: req.params.tid });
  res.send(treatment);
});

treatmentRouting.delete("/treament/:tid", async (req, res) => {
  let treatment = await Treatment.deleteOne({ _id: req.params.tid });
  res.send(treatment);
});

module.exports = treatmentRouting;
