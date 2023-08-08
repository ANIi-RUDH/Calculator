const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.send("This is the first page of BMI calculator");
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var w=parseFloat(req.body.weight);
  var h=parseFloat(req.body.height);
  var bmi=w-(h*w);
  res.send("Your BMI is :"+ bmi);
});

app.listen(3000,function(){
  console.log("-- SERVER IS GOOD --");
});
