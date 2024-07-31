import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Movies() {
    const [movies, setMovies] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        fetch("https://owen-wilson-wow-api.onrender.com/wows/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }
    , []);

    const sortMovies = () => {
        const sortedMovies = [...movies].sort();
        setMovies(sortedMovies);
        setSorted(true);
    };

    const navigate = useNavigate();

    const habdleBackClick = () => {
        navigate('/');
    };
    
    return (
        <div className='movies'>
            <h2>Lista de películas en las que Owen Wilson dice "Wow"</h2>
            <button onClick={sortMovies}>Ordenar películas</button>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
            <button onClick={habdleBackClick}>Volver</button>
        </div>
    );
}

export default Movies;