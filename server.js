const express =require("express");
const auth =require("./routes/auth");
const post =require("./routes/post");
const mongoose = require('mongoose');
const User=require('./models/user');
mongoose.connect('mongodb://localhost:27017/woh', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connecté à Mongoose")
  });




  
const app=express();
app.use(express.json())
app.use("/auth",auth); // use the auth imported from routes/auth
app.use("/posts",post);



app.get("/",(req,res)=>{
    res.send("hi i'am working");
    
}) //BROWSER


app.listen(5000,()=>{
    console.log("now running on port 5000")
})