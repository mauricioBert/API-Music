import express from "express"
import mongoose from "mongoose"
import music from "./model/musicModels.js";
const app = express();

mongoose.connect("mongodb://localhost:27017//api-music")
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get("/",(req,res)=>{
    const music =[{
        title:"Metallica",
        year: "2012",
        platform:"PC"
    }]
    res.json(music);
});

const port = 4000;
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}`)
})