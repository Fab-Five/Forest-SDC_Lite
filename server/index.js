const express = require("express");
const bParser = require("body-parser");
const path = require("path");
const port = 3000;
// const mysqlCtrl = require("./mysqlCtrl");
const mongoCtrl = require("./mongoCtrl");
// const postgresCtrl = require("./postgresCtrl");

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
// app.get("/loaderio-1b50b35c25f637cebc3dc4511dd8006d",(req,res)=>{
//   res.status(200).send("loaderio-1b50b35c25f637cebc3dc4511dd8006d");
// });

app.use("/sdc/mongo", mongoCtrl);
// app.use("/sdc/postgres",postgresCtrl);