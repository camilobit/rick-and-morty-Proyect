const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({ name, species, gender, origin, status, image, }) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        return res
                .writeHead(200, {"Content-type": "aplication/json"})
                .end(JSON.stringify(character))
    })
    .catch(error => {
        return res
                .writeHead(500, {"Content-type": "text/plain"})
                .end(error.message)
    })
};


module.exports = {
    getCharById
}