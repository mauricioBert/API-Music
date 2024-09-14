import express from "express";
const musicRoutes = express.Router()
import musicControllers from "../controllers/musicControllers.js";

musicRoutes.get("/music", musicControllers.getAllMusic);

export default musicRoutes