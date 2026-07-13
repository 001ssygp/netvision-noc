const express=require("express");

const app=express();

app.get("/",(req,res)=>{

res.json({

name:"NetVision NOC API",

version:"0.1.0"

});

});


app.listen(4000,()=>{

console.log(
"API running on port 4000"
);

});
