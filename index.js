import express from 'express'

let app = express();

app.get('/',function(req,res){
    res.send("hello duniya");
});

app.listen(8000,()=>{
    console.log('server started successfully!');
});