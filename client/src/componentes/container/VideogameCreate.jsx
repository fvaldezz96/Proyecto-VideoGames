import React, { useState, useEffect } from "react";
import { postVideogames, getGenres, getPlatforms } from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"; // useHistory
import '../style.css/VideogameCreate.css';

function validate(input) {
  const errors = {};
  if (!input.name.trim()) {
    errors.name = "A name is required";
  }
  if (!input.description.trim()) {
    errors.description = "A description is required";
  }
  if (!input.released.trim()) {
    errors.released = "The release date is require";
  }
  return errors;
}

export default function VideogameCreate() {

  // const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  // console.log(genres,'soy genres del front selector')
  const platforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    background_image: "",
    genres: [],
    platforms: []
  });

  // const nombreValido = /^[a-zA-Z ]*$/

  function handleDelete(e) {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== e),
    });
  }

  function handleDeletePlatform(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((p) => p !== e),
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(
      validate({
        ...input,
        [name]: value,
      })
    );
  }
  function handleSelectPlatform(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  }
  function handleSelect(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(errors).length === 0) {
      dispatch(postVideogames(input));
      alert("Tu juego fue creado con exito");
      setInput({
        name: "",
        description: "",
        released: "",
        rating: "",
        background_image: "",
        platforms: [],
        genres: [],
      });
      // history.push('/home');
    } else {
      alert("No se pudo crear tu juego");
      return;
    }
  }

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms())
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button className="botonVolver">Volver</button>
      </Link>
      <main>
        <h2 className="titulo" href='name not found'>Create Videogames</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div >
            <input
              required
              placeholder="Nombre"
              className="input"
              href='name not found'
              type="text"
              key="name"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <h4 className='mError'>{errors.name}</h4>}
          </div>
          <div >
            <br />
            <input
              placeholder="Fecha"
              className="input"
              type="date"
              name="released"
              value={input.released}
              onChange={(e) => handleChange(e)}
            />
            {errors.released && <h4 className='mError'>{errors.released}</h4>}
          </div>
          <div >
            <br />
            <input
              className="input"
              placeholder="Rating"
              type="number"
              name="rating"
              value={input.rating}
              min="0"
              max="5"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div >
            <input
              className="url"
              type="url"
              name="background_image"
              value={input.background_image}
              placeholder="URL"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <br />
          <div >
            <br />
            <textarea
              placeholder="Escribe una breve descripcion de tu juego"
              className="descripcion"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && <h4 className='mError'>{errors.description}</h4>}
          </div>
          <div className="">
            <select className="botonSelect" onChange={(e) => handleSelectPlatform(e)}>
              <option value="platforms">Platforms</option>
              {platforms.map((v, index) => (
                <option key={index} value={v.name}>{v.name}</option>
              ))}
            </select>
            {input.platforms.map((g) => (
              <div className="genresSelector">
                <p>{g}</p>
                <button onClick={() => handleDeletePlatform(g)}>X</button>
              </div>
            ))}
          </div>
          <div>
            <select className="botonSelect" onChange={(e) => handleSelect(e)} name="genres">
              <option value="genres">Genres</option>
              {genres?.map((g, index) => (
                <option key={index} value={g.name}>{g.name}</option>
              ))}
            </select>
          </div>
          {input.genres.map((g) => (
            <div className="genresSelector">
              <p>{g}</p>
              <button onClick={() => handleDelete(g)}>x</button>
            </div>
          ))}
          <button className="botonCrear" type="submit">Create</button>
        </form>
      </main>
    </div>
  );
}
