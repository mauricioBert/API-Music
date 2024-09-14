import musicService from "../services/musicServices.js";

const getAllMusic = async (req,res) =>{
    try{
        const music = await musicService.getAll();
        res.status(200).json({music:music})

    }catch (error){
        console.log(error)
        res.status(500).json({error: `Erro interno do Servidor.`});
    }
};
export default {getAllMusic}