let express = require("express");
let cors = require("cors");
let stuRouting = require("./router/stuRouting");
let connection = require("./dbcon");
let app = express();
app.use(express.json());
app.use(cors());

app.use("/", stuRouting);

app.post("/signup", (req, res) => {
  let { id, name, email, password, phone, address } = req.body;
  connection.query(
    `insert into signup(id,name,email,password,phone,address) values('${id}','${name}','${email}','${password}','${phone}','${address}')`,
    (err, ress) => {
      if (err) throw err;
      console.log("user created succ..");
    }
  );
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  connection.query(
    `select * from signup where email='${email}' and password='${password}'`,
    (err, ress) => {
      if (err) throw err;
      if (ress.length > 0) {
        res.send("valid");
      } else {
        res.send("invalid");
      }
    }
  );
});

app.listen(4000);
