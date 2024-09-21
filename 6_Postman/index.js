// const http=require("http");
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    return res.send("hello from home");
})

app.get("/about", (req, res) => {
    return res.send(`hello ${req.query.name}`);
});

app.post("/response",(req,res) =>{
    return res.json({status:"pending"})
})

// const myserver=http.createServer(app);
// myserver.listen(8000,()=>{console.log('Sever Started!!')});

// we can directly do this
app.listen(8000,()=>console.log("Server Started!"));