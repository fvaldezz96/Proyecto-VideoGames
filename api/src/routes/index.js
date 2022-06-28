const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Videogame, Genres } = require('../db');
//ME TENGO QUE TRAER LA CONTRASEÑA CON UNA VARIABLE AJJAJAJ
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//--------- function -------------
// esto que quiero empezar aca es back-end 
const getApiInfo = async () => {
     const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=dfc1bdc998f248f19d7f5d830d068132`) // =>aca va el empoint  
     const apiInformacion = await apiUrl.data.results.map((e) => {
          return {
               id: e.id,
               name: e.name
          }
     })
     return apiInformacion;
}

const buscador = async (name) => {
     const apiUrl = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=dfc1bdc998f248f19d7f5d830d068132`) // =>aca va el empoint  
     const apiInformacion = await apiUrl.data.results.map((e) => {
          return {
               id: e.id,
               name: e.name
          }
     })
     return apiInformacion;
}

const detalle = async (id) => {
     /* El código anterior utiliza la biblioteca axios para realizar una solicitud a la API RAWG. */
     let apiUrl = await axios.get(`https://api.rawg.io/api/games/${id}?key=dfc1bdc998f248f19d7f5d830d068132`) 
     // console.log(apiUrl)
     apiUrl = apiUrl.data
     let obj = {
          background_image: apiUrl.background_image,
          name: apiUrl.name, // ===> me esta devulviendo undefained 
          Genress: apiUrl.Genress,
          platform: apiUrl.platform,
          rating: apiUrl.rating,
          description_raw: apiUrl.description_raw,
          released: apiUrl.released,
     }
     return obj;
}
/**
 * Toma una cadena como argumento, verifica si ya hay datos en la base de datos, si los hay, devuelve
 * una cadena, si no los hay, realiza una llamada a la API, mapea los resultados y crea una nueva fila
 * en la base de datos. para cada resultado
 * @param Genress - El punto final que desea utilizar.
 */
const generos = async (genres) => {
     const existen = await Genres.findAll()
     if (existen.lentgh > 1) return "Ya hay generos cargados"
     else {
          try {
               const gener = await axios(`https://api.rawg.io/api/${genres}?key=dfc1bdc998f248f19d7f5d830d068132`)
               const ge = await gener.data.results.map(e => e.name)
               ge.forEach((e) => {
                    Genres.findOrCreate({
                         where: { name: e }
                    })
               })
               console.log("Generos creados correctamente")
               return ge;
          } catch (error) {
               console.log(error)
          }
     }
}
// -----------rutas---------------

router.get('/videogame', async (req, res) => {
     try {
          const { name } = req.query;
          if (!name) {
               const todaLaApi = await getApiInfo();
               const informacion = todaLaApi.slice(0, 15)
               return res.status(200).json(informacion)
          } else if (name) {
               const nombreJuego = await buscador(name);
               const datos = nombreJuego.slice(0, 15)
               return res.status(201).json(datos)
          }
     } catch (error) {
          console.log(error)
     }

})

router.get("/videogame/:id", async (req, res) => {
     const { id } = req.params;

     if (id.length > 8) {

          const game = await Videogame.findByPk(id, {
               //include toma una matriz de objetos. 
               // Estos objetos tienen propiedades como 
               // model , as y where que le indican a 
               // Sequelize cómo buscar filas asociadas.
               include: [{
                    model: Genres,
                    attributes: ['name'],
                    through: {
                         attributes: [],
                    }
               }]
          })
          res.send(game);

     }
     const data = await detalle(id);
     return res.status(200).json(data)
})

router.post('/videogame', async (req, res) => {
     try {
          const { id, name, description, released, rating, image } = req.body

          const [videoJuego, created] = await Videogame.findOrCreate({
               where: { name },
               defaults: {
                    //id: id,
                    name: name,
                    description: description,
                    released: released,
                    rating: rating,
                    image: image
               }
          })
          if (created) {
               return res.status(201).send("creado con exito")
          } else {
               return res.status(400).send("esta en la base d datos")
          }
     } catch (error) {
          console.log(error)
          return res.status(404).send("Error")
     }
})

router.get('/genres', async (req, res) => {
     // const { Genress } = req.query
     const genero = await generos("genres");
     try {
          // if (genero)
          res.status(200).send(genero)
     } catch (error) {
          console.log(error)
     }
})

router.get('/genres/:name', async (req, res) => {
     const { name } = req.params
     if (!name) return res.status(404).send("error")
     try {
          const name = await Genres.findOne({ whre: { name: name } })
          res.send(name)
     } catch (error) {
          // console.log(error)
          res.status(404).send({ error: error.message })
     }
})

module.exports = router;
