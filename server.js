const express = require('express');
const cors = require("cors");
require('dotenv').config({path: './.dotenv'});


const app = express();
const port = process.env.PORT || 9090; 



const path = require('path')

app.use(express.static('public'));
app.use(cors())

app.get('/', (req, res)=>{

    
        res.sendFile(path.join(__dirname, './public/index.html'))
    
})
app.get('/song2', (req, res)=>{


        res.sendFile(path.join(__dirname, './public/statics/song2.html'))
    
})

app.get('/song3', (req, res)=>{

    
        res.sendFile(path.join(__dirname, './public/statics/song3.html'))
    
})

app.get('/song4', (req, res)=>{

    
        res.sendFile(path.join(__dirname,'./public/statics/song4.html'))
    
})

app.get('/song5', (req, res)=>{

    
        res.sendFile(path.join(__dirname, './public/statics/song5.html'))
    
})

app.get('/activities', (req, res)=>{

   
        res.sendFile(path.join(__dirname, './public/statics/activities.html'))

})

app.get('/template', (req, res)=>{

   
        res.sendFile(path.join(__dirname, './public/statics/template.html'))

})

app.get('/nutrition', (req, res)=>{

   
        res.sendFile(path.join(__dirname, './public/statics/nutritionFacts.html'))

})

app.get('/recipes', (req, res)=>{

   
        res.sendFile(path.join(__dirname, './public/statics/recipes.html'))

})





app.listen(port,()=>{
    console.log(" port running");
})