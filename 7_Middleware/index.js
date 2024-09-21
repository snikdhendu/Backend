// const http=require("http");
const express=require("express");

const app=express();

//middleware is basically like a pluglin it checks the respone from the previous middleware and if it thinks it is ok then it can send to the next()
// else it can end the response

//there can be multiple midddleware in a code

app.use((req,res,next)=>{

    console.log("hello from middleware 1");
    // res.json({res:"Response from middleware"}); for closing response from the middleware
    next(); //for passing the response next middleware or route

})





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