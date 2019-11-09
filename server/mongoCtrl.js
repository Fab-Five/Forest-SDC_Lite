const db = require("../db/mongo/index");
const model = require("../db/mongo/models");
const router = require("express").Router();

router.get('/data/:id',(req, res) => {
  var start=(new Date()).getTime();
  model.findOne({id:req.params.id},(err,data)=>{
    var time=(new Date()).getTime()-start;
    if(err)res.status(400).send(err);
    res.status(200).send({data:data,time:time});
  });
});

router.get('/sponsored/:id',(req, res) => {
  // var id=Math.floor(Math.random()*9999987)+1;
  const id=req.params.id;
  model.find({ "id" : {$gt : id-1}},(err,data)=>{  // , $lt : id+12
    if(err)res.status(400).send(err);
    res.status(200).send(data);
  }).limit(12);
});

router.get('/artillery',(req, res) => {
  var id=Math.floor(Math.random()*10000000);
  model.findOne({id:id},(err,data)=>{
    if(err)res.status(400).send(err);
    res.status(200).send(data);
  });
});

module.exports=router;