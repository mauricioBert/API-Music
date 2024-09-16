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
    async Delete(id){
        try{
            await  Music.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado`)
        }catch(error){
            console.log(error)
        }
    }

    async CreateMusic(title, year, album, artist, content){
        try{
            const newMusic = new Music({
                title, 
                year, 
                album,
                artist,
                content
            })
            await newMusic.save()
        } catch(error){
            console.log(error)
        }
    }

async UpdateMusic(id, title, year, album, artist, content){
    try{
        const updatedMusic = await Music.findByIdAndUpdate(
            id,
            {
                title, 
                year, 
                album, 
                artist, 
                content,

            },
            { new: true}
        );
        console.log(`Dados da música com id: ${id} alterados com sucesso.`);
        return updatedMusic;
    } catch(error){
        console.log(error);
        resizeBy.sendStatus(500);
    }
    }

    async getOne(id){
        try{
            const music = await Music.findOne({_id : id})
            return music
        } catch(error){
            console.log(error)
        }
    }
}

    


export default new musicService();