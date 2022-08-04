const express = require('express');
const app = express();
const fs = require('fs');

const homePage = fs.readFileSync('./public/index.html');
const song2 = fs.readFileSync('.public/statics/song2.html');
const song3 = fs.readFileSync('.public/statics/song3.html');
const song4 = fs.readFileSync('.public/statics/song4.html');
const song5 = fs.readFileSync('.public/statics/song5.html');
const activities = fs.readFileSync('.public/statics/Vienna-Activities.html');

const path = require('path')

app.use('/', (req, res)=>{

    if( req.url === '/'){
        res.send(homePage)
    }
})
app.use('/song2', (req, res)=>{

    if( req.url === '/song2'){
        res.send(song2)
    }
})
app.use('/song3', (req, res)=>{

    if( req.url === '/song3'){
        res.send(song3)
    }
})
app.use('/song4', (req, res)=>{

    if( req.url === '/song4'){
        res.send(song4)
    }
})
app.use('/song5', (req, res)=>{

    if( req.url === '/song5'){
        res.send(song5)
    }
})
app.use('/activities', (req, res)=>{

    if( req.url === '/activities'){
        res.send(activities)
    }
})





app.listen(9090,()=>{
    console.log(" port running");
})