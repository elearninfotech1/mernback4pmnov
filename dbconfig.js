let mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://elearninfotech1:DNsG3oanywNsuCvK@db4pmnovnew.pfqo6.mongodb.net/?retryWrites=true&w=majority&appName=db4pmnovnew"
  )
  .then((res) => {
    //console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
