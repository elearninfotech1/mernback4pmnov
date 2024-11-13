let express = require("express");
let Lnews = require("../model/lnewsModel");
let lnewsRouting = express.Router();

lnewsRouting.post("/lnews", async (req, res) => {
  let student = new Lnews(req.body);
  let result = await student.save();
  res.send(result);
});

module.exports = lnewsRouting;
