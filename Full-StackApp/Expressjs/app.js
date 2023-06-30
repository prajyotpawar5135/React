const express=require("express")
const app=express();
const path=require("path")
const bodyparser=require("body-parser")
const routes=require("./router/router")
// const cors =require ('cors')
const cors=require("cors")

// app.use(cors({
//     origin:"http://localhost:3000",
//     credentials:true,
// }))

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,

}))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use("/",routes);
app.listen(3002,function()
{
    console.log("server started on port 3002");
})

module.exports=app;