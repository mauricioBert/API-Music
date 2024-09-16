import express from "express"
import mongoose from "./config/db-connection.js"
import Music from "./models/musicModels.js";
const app = express();
import musicRoutes from "./routes/musicRoutes.js";

//mongoose.connect("mongodb://127.0.0.1:27017/api-music")
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("/", musicRoutes);



// app.get("/",(req,res)=>{
//     const music =[{
//         title: "Brunoo",
//         year: 12,
//         album: "ASSA",
//         artist: "ASDAS"
//         // content:
//         //     {
//         //         length:"SSa",
//         //         lyrics:"assa",
//         //         language:"gasga",
//         //         cover:"asqw",
//         //         Style:"SAdsadasf"
//         //     }
        
//     }]
//     res.json(music);
// });

const port = 4000;
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}`)
})