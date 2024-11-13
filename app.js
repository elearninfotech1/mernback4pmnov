let express = require("express");
let cors = require("cors");

const signupRouting = require("./router/signupRouter");
const treatmentRouting = require("./router/treatmentRouter");
require("./dbconfig");
let app = express();

app.use(express.json());
app.use(cors());

app.use("/", signupRouting);
app.use("/", treatmentRouting);

app.listen(4000);
