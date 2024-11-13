let express = require("express");
let Student = require("../model/studentModel");
let studentRouting = express.Router();

studentRouting.get("/student", async (req, res) => {
  let student = await Student.find();
  res.send(student);
});

studentRouting.post("/student", async (req, res) => {
  let student = new Student(req.body);
  let result = await student.save();
  res.send(result);
});

studentRouting.delete("/student/:id", async (req, res) => {
  let student = await Student.deleteOne({ _id: req.params.id });
  res.send(student);
});

studentRouting.get("/student/:id", async (req, res) => {
  let student = await Student.findOne({ _id: req.params.id });
  res.send(student);
});

studentRouting.put("/student/:id", async (req, res) => {
  let student = await Student.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(student);
});

module.exports = studentRouting;
