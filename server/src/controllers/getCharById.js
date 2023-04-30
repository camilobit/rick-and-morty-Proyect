const axios = require('axios');
    const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
        try {
            const { id } = req.params;
            const { data } = await axios(`${URL}/${id}`)
            
            if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
    
            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                status: data.status
            }
            return res.status(200).json(character)
            
        } catch (error) {
            return error.message.includes('ID')
            ? res.status(404).send(error.message)
            : res.status(500).send(error.response.data.error)
        }
    };





    // const { id } = req.params;

    // axios(`${URL}/${id}`)
    // .then(response => response.data)
    // .then(({ status, name, species, origin, image, gender }) => {
    //     if (name){
    //         const character = {
    //             id, name, species, origin, image, gender, status
    //         }
    //         return res.status(200).json(character)
    //     }
    //     return res.status(404).send('Not found');
    // })
    // .catch(error => res.status(500).send(error.message))




    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(response => response.data)
    // .then(({ name, species, gender, origin, status, image, }) => {
    //     const character = {
    //         id,
    //         name,
    //         gender,
    //         species,
    //         origin,
    //         image,
    //         status
    //     }
    //     return res
    //             .writeHead(200, {"Content-type": "aplication/json"})
    //             .end(JSON.stringify(character))
    // })
    // .catch(error => {
    //     return res
    //             .writeHead(500, {"Content-type": "text/plain"})
    //             .end(error.message)
    // })



module.exports = {
    getCharById
}