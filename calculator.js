const express = require("express")
const body_parser = require("body-parser")

const app = express()
app.use(body_parser.urlencoded({extended: true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    let n1=Number(req.body.num1)
    let n2=Number(req.body.num2)
    let n=n1+n2
    res.send("the result is: " + n)
})

app.listen(3000,function(){
    console.log("server started on port 3000")
})
