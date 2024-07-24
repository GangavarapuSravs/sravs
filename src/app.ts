import dbInit from './db/init';
import express from "express";

import routes from "./routes";
const app = express()
const port=3000
app.use('/',routes)
app.get('/',(req,res)=>{
    res.send('this is database')
})
app.listen(port,()=>{
    console.log(`server is runing on ${port}`)
})


dbInit();