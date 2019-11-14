const express = require("express");
const bParser = require("body-parser");
const path = require("path");
const port = 3000;
// const mysqlCtrl = require("./mysqlCtrl");
const mongoCtrl = require("./mongoCtrl");
const postgresCtrl = require("./postgresCtrl");

const app = express();
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../client/dist")));
app.listen(port, () => {
  console.log("lite server online:" + port);
});

app.get("/server/test", (req, res) => {
  console.log("visited");
  res.status(200).send(":" + port + " is watching you");
});

app.use("/sdc/mongo", mongoCtrl);
app.use("/sdc/postgres",postgresCtrl);