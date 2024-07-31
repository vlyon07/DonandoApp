import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

    const habdleBackClick = () => {
        navigate('/');
    };

    
    return (
        <div className='directors'>
            <h2>Lista de directores de las películas en las que Owen Wilson dice "Wow"</h2>
            <button onClick={sortDirectors}>Ordenar directores</button>
            <ul>
                {directors.map((director, index) => (
                    <li key={index}>{director}</li>
                ))}
            </ul>
            <button onClick={habdleBackClick}>Volver</button>
        </div>
    );
}

export default Directors;