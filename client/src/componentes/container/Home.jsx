
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getVideogames,
    filterByGenre,
    filterCreated,
    getGenres,
    orderByName,
    orderByRating,
    getPlatforms,
    resetVideogameDetail,
} from '../../redux/index';


 

function Home() {
    return (
        <div>
            <input type="text" value="Buscar... " />
        </div>
    )
}

export default Home; 