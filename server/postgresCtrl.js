const model = require("../db/postgres/index");
const router = require("express").Router();

// model.query("SELECT * FROM tennis WHERE name=123;")
//   .then((result)=>{console.log(result.rows)});
// query.on("row",(row,result)=>{
//   result.addRow(row);
// });
router.get('/data/:id',(req,res)=>{
  model.query("SELECT * FROM info WHERE id="+req.params.id+";",(err,result)=>{
    if(err) res.status(400).send(err);
    else res.status(200).send(result.rows);
  });
});

router.get('/sponsored/:id',(req,res)=>{
  model.query("SELECT * FROM info WHERE id>="+req.params.id+" LIMIT 12;",(err,result)=>{
    if(err) res.status(400).send(err);
    else res.status(200).send(result.rows);
  });
});

router.get('/artillery',(req,res)=>{
  var id=Math.floor(Math.random()*10000000);
  model.query("SELECT * FROM info WHERE id="+id+";",(err,result)=>{
    if(err) res.status(400).send(err);
    else res.status(200).send(result.rows);
  });
});
module.exports=router;