let express = require("express");
let connection = require("../dbcon");

let stuRouting = express.Router();

stuRouting.get("/student", (req, res) => {
  connection.query(`select * from student`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

stuRouting.post("/student", (req, res) => {
  const { id, name, address } = req.body;
  connection.query(
    `insert into student(id,name,address) values('${id}','${name}','${address}')`,
    (err, data) => {
      if (err) throw err;
      res.send("Data Added Succ...");
    }
  );
});

stuRouting.delete("/student/:id", (req, res) => {
  let id = req.params.id;
  connection.query(`delete from student where id='${id}'`, (err, data) => {
    if (err) throw err;
    res.send("Data Deleted Succ...");
  });
});

stuRouting.put("/student/:id", (req, res) => {
  let id1 = req.params.id;
  const { id, name, address } = req.body;
  connection.query(
    `update student set name='${name}',address='${address}'  where id='${id1}'`,
    (err, data) => {
      if (err) throw err;
      res.send("Data Updated Succ...");
    }
  );
});

module.exports = stuRouting;
