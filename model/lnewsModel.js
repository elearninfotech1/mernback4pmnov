let mongoose = require("mongoose");

let lnewsSchema = new mongoose.Schema({
  lnews: {
    type: String,
    required: "please enter lnews",
  },
});

module.exports = mongoose.model("lnews", lnewsSchema);
