const pg = require("pg");
const info = require("./info");
var client = new pg.Client(info);
client.connect((err)=>{
  if(err)console.log(err);
  else console.log("postgres online");
});

module.exports=client;
