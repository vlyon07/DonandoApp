import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Movies.css';


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

    const handleBackClick = () => {
        navigate('/');
    };
    
    return (
        <div className='movies'>
        <h2>Lista de películas en las que Owen Wilson dice "Wow"</h2>
        <button className="sort-button" onClick={sortMovies}>Ordenar películas</button>
        <div className='movies-container'> 
            {movies.map((movie) => (
                <div className="movie-card">
                    <h3>{movie}</h3>
                </div>
            ))}
        </div>
        <button onClick={handleBackClick}>Volver</button>
        </div>
    );
}

export default Movies;