import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
dotenv.config()


let app = express();
let port = process.env.PORT || 6000

app.get('/',function(req,res){
    res.send("hello duniya");
});

app.listen(port,()=>{
    connectDb();
    console.log('server started successfully!');
});