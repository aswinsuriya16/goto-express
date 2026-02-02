import express from "express";

const app = express();


app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.get("/info",(req,res)=>{
    res.send("This is teh express server !");
})


app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});