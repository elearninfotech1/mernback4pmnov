let express = require("express");
let Signup = require("../model/singupModel");
let signupRouting = express.Router();

signupRouting.post("/signup", async (req, res) => {
  let signup = new Signup(req.body);
  let result = await signup.save();
  res.send(result);
});

signupRouting.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let exists = await Signup.findOne({ email: email });
  if (!exists) {
    res.send("No User");
  } else if (exists.password == password) {
    res.send("Valid");
  } else {
    res.send("Invalid");
  }
});

module.exports = signupRouting;
