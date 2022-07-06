import React, { useState, useEffect } from "react";
import { postVideogames, getGenres } from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import '../style.css/VideogameCreate.css';


// eslint-disable-line react-hooks/exhaustive-deps

function validate(input) {
  const errors = {};
  if (!input.name.trim()) {
    errors.name = "Se requiere un nombre";
  }
  if (!input.description.trim()) {
    errors.description = "Se requiere une descripcion";
  }
  if (!input.released.trim()) {
    errors.released = "Se requiere una fecha";
  }
  return errors;
}

export default function VideogameCreate() {

  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  // const platforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  // const nombreValido = /^[a-zA-Z ]*$/

  function handleDelete(e) {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== e),
    });
  }
  // function handleDeletePlatform(e) {
  //   setInput({
  //     ...input,
  //     platforms: input.platforms.filter((p) => p !== e),
  //   });
  // }

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
  // function handleSelectPlatform(e) {
  //   setInput({
  //     ...input,
  //     platforms: [...input.platforms, e.target.value],
  //   });
  // }
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
      alert("Your videogame has been created");
      setInput({
        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        genres: [],
      });
      history.push('/home')
    } else {
      alert("Your videogame couldn't be created");
      return;
    }
  }

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  //https://react-hook-form.com/api/useform/handlesubmit
  return (
    <div>
      <Link to="/home">
        <button className="botonVolver">Volver</button>
      </Link>
      <main className="">
        <h1 className="">Crea tu juego</h1>

        <div className=""></div>

        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="">
            <input
              required
              placeholder="Nombre"
              className="input"
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <h4>{errors.name}</h4>}
          </div>
          <div className="">
            <br />
            <input
              placeholder="Fecha"
              className="input"
              type="date"
              name="released"
              value={input.released}
              onChange={(e) => handleChange(e)}
            />
            {errors.released && <h4>{errors.released}</h4>}
          </div>
          <div className="">
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
          <div className="">
            <br />
            <textarea
              placeholder="Escribe una breve descripcion de tu juego"
              className="descripcion"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && <h4>{errors.description}</h4>}
          </div>
          {/* <div className="">
            <label className="" htmlFor="">
              Platforms
            </label>
            {/* <select onChange={(e) => handleSelectPlatform(e)}>
              {platforms.map((v) => (
                <option value={v.name}>{v.name}</option>
              ))}
            </select> 

            {input.platforms.map((g) => (
              <div className="">
                <p className="">{g}</p>
                <button onClick={() => handleDeletePlatform(g)}>X</button>
              </div>
            ))}
          </div> */}
          <div >
            <select className="botonSelect" onChange={(e) => handleSelect(e)} name="genres">
              <option selected={true} disabled="disabled" value="">
                Generos
              </option>
              {genres &&
                genres.map((genre) => (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
            </select>
          </div>
          {input.genres.map((g) => (
            <div className="">
              <p className="">{g}</p>
              <button onClick={() => handleDelete(g)}>X</button>
            </div>
          ))}
          <button className="botonCrear" type="submit">
            Crear
          </button>
        </form>
      </main>
    </div>
  );
}
