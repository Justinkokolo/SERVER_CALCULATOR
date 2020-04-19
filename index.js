//requireing express
const express = require("express");

//adding body parse to receive data from client
const bodyParse = require("body-parser");

const app = express();

//adding body parser
app.use(bodyParse.urlencoded({extended:true}));

app.get("/",function(req ,res){

  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req , res){

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);

 var result = num1 + num2;

  res.send("The answer is "+result);
});


app.get("/bmi",function(req ,res){

    res.sendFile(__dirname + "/bmi.html");

});

app.post("/bmi",function(req, res){
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);

   var result = w /( h * h);
   res.send("Your anser is "+result);

});

app.listen(3000, function(){
console.log("server listening");
});
