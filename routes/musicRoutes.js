import express from "express";
const musicRoutes = express.Router();
import musicControllers from "../controllers/musicControllers.js";

musicRoutes.get("/music", musicControllers.getAllMusic);
musicRoutes.delete("/music/:id", musicControllers.deleteMusic);
musicRoutes.post("/music", musicControllers.createMusic);
musicRoutes.put("/music/:id", musicControllers.updateMusic);
musicRoutes.get("/music/:id", musicControllers.getOneMusic);
export default musicRoutes;
