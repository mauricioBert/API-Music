import Music from "../models/musicModels.js";

class musicService{
    async getAll(){
        try{
            const music = await Music.find();
            return music;
        }catch (error){
            console.log(error);
        }
    }
}

export default new musicService();