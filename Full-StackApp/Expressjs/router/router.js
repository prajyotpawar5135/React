const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnnect")


router.get("/employees",function(req,resp)
{
    connection.query("select * from employee",(err,data,fields)=>
    {
        if(err)
        {
            resp.status(500).send("unable to get data"+JSON.stringify())
        }
        else
        {
            resp.send(data);
        }
    })
})


    router.post("/employee/:empid",function(req,resp)
    {

        connection.query("select * from employee where empid=?",[req.params.empid],(err,data,fields)=>
        {
            if(err)
            {
                resp.status(500).send("invalid empid"+JSON.stringify())

            }
            else
            {
                resp.send(data);
            }

        })
    })
  

        router.put("/update/:empid",function(req,resp)
        {
            var empid=req.body.empid;
            var ename =req.body.ename;
            var sal=req.body.sal;

            connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data,fields)=>
            {
                if(err)
                {
                    resp.status(500).send("enable to update"+JSON.stringify())

                }
                else
                {
                    resp.send(data);
                }
            })
        })

        router.get("/getbyname/:ename",function(req,resp)
        {
            connection.query("select * from employee where ename=?",[req.params.ename],(err,data,fields)=>
            {
                if(err)
                {
                    resp.status(500).send("invalid name"+JSON.stringify())
                }
                else
                {
                    resp.send(data)
                }
            })
        })

 

  module.exports=router;


