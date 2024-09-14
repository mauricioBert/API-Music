import mongoose from "mongoose";
// const contentSchema = new mongoose.Schema({
//     length:String,
//     lyrics:String,
//     language:String,
//     cover:String,
//     Style:String
// })

const musicSchema = new mongoose.Schema({
    title: String,
    name: String,
    year: Number,
    album: String,
    artist: String,
//     // content:[contentSchema]
})
const Music = mongoose.model('Music',musicSchema)

export default Music