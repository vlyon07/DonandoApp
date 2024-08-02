import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Directors.css';


function Directors() {
    const [directors, setDirectors] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        fetch("https://owen-wilson-wow-api.onrender.com/wows/directors")
            .then((response) => response.json())
            .then((data) => setDirectors(data));
    }
    , []);

    const sortDirectors = () => {
        const sortedDirectors = [...directors].sort();
        setDirectors(sortedDirectors);
        setSorted(true);
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    
    return (
        <div className='directors'>
        <h2>Lista de directores de películas en las que Owen Wilson dice "Wow"</h2>
        <button className="sort-button" onClick={sortDirectors}>Ordenar directores</button>
        <div className='directors-container'> 
            {directors.map((director) => (
                <div className="director-card">
                    <h3>{director}</h3>
                </div>
            ))}
        </div>
        <button onClick={handleBackClick}>Volver</button>
        </div>
    );
}

export default Directors;