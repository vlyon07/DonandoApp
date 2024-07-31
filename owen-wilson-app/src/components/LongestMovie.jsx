import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LongestMovie() {

    const [longestMovie, setLongestMovie] = useState('');
    const navigate = useNavigate();

    const getMovieDuration = (movie) => {
        const durationStr = movie.movie_duration;
        const durationArr = durationStr.split(':');
        const hours = parseInt(durationArr[0]);
        const minutes = parseInt(durationArr[1]);
        const seconds = parseInt(durationArr[2]);
        const totalSeconds = hours*3600 + minutes*60 + seconds;
        return totalSeconds;
    }


    useEffect(() => {
        fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=90")
            .then((response) => response.json())
            .then((data) => {
                let currentLongestMovie = '';
                let currentLongestDuration = 0;
                data.forEach((movie) => {
                    const duration = getMovieDuration(movie);
                    if (duration > currentLongestDuration) {
                        currentLongestDuration = duration;
                        currentLongestMovie = movie;
                    }
                });
                setLongestMovie(currentLongestMovie);

    });
    },[]);

    const handleBackClick = () => {
        navigate('/');
    };

    if (!longestMovie) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='longest-movie'>
            <h2>Película más larga en la que Owen Wilson dice "Wow"</h2>
            <p>{longestMovie.movie}</p>
            <p>Director: {longestMovie.director}</p>
            <p>Duración: {longestMovie.movie_duration}</p>
            <img src={longestMovie.poster} alt={`${longestMovie.movie} poster`}/>
            <button onClick={handleBackClick}>Volver</button>
        </div>
    );
}

export default LongestMovie;