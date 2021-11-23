require('dotenv').config();
const express = require('express');
const { mongo } = require('mongoose');
const path = require('path');
const apiRoute = require('./routes/projectRoutes')
const dbConnect = require('./dbConnect');


const app = express();

app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));

app.use('/',apiRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'public','404.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server listning on ${PORT}`)
    dbConnect.mongo();
});