import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    title: String,
    name: String,
    year: Number,
    album: String,
    artist: String
})
const music = mongoose.model('music',musicSchema)

export default music