import musicService from "../services/musicServices.js";
import {ObjectId} from 'mongodb'
const getAllMusic = async (req,res) =>{
    try{
        const music = await musicService.getAll();
        res.status(200).json({music:music})

    }catch (error){
        console.log(error)
        res.status(500).json({error: `Erro interno do Servidor.`});
    }
};

const deleteMusic = async (req,res) =>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            musicService.Delete(id)
            res.status(200).json({ message: "Deletado com sucesso!"})
        }else{
            res.sendStatus(400)
        }
    }catch (error){
        console.log(error)
        res.status(500).json({error:"`Erro interno do servidor"})
    }
}

const createMusic = async (req,res) => {
    try{
        const{ title, year, album, artist, content} = req.body;
        await musicService.CreateMusic(title,year,album,artist, content);
        res.sendStatus(201);      
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. "});
    }
}

const updateMusic = async (req,res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const {title, year, album, artist, content} = req.body;
            const music = await musicService.UpdateMusic(id, title, year, album, artist, content);
            res.status(200).json({ music });
        } else {
            res.sendStatus(400);
        }
    } catch (error){
        console.log(error);
        res.sendStatus(500)
    }
}

const getOneMusic = async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.sendStatus(400);
        }

        const music = await musicService.getOne(id);

        if (!music) {
            return res.sendStatus(404);
        }

        return res.status(200).json({ music });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};


export default {getAllMusic, deleteMusic, createMusic, updateMusic, getOneMusic}