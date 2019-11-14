const db = require("./index");
const model = require("./models");
var start = (new Date()).getTime();
model.createIndexes({id:1}).then(()=>{
  console.log((new Date()).getTime()-start);
})