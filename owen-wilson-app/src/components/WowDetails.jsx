import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WowDetails() {

    const [wows, setWows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllWows = async () => {
            let allWows = [];
            let wowIndex = 0;
            let nextUrlExists = true;

            while (nextUrlExists) {
                try {
                    const response = await fetch(`https://owen-wilson-wow-api.onrender.com/wows/ordered/${wowIndex}`);
                    const data = await response.json();
                    if (data && Object.keys(data).length > 0) {
                        allWows.push(data);
                        wowIndex++;
                    } else {
                        nextUrlExists = false;
                    }
                } catch (error) {
                    console.error("Error en el fetch:", error);
                    nextUrlExists = false;
                }
            }
        setWows(allWows);
        setIsLoading(false);
        };
    fetchAllWows();
    }, []);

    const navigate = useNavigate();

    if (isLoading) return <div>Cargando...</div>;

    if (wows.length === 0) return <div>No se encontraron datos de "wows".</div>;

    const firstWow = wows[0];
    const lastWow = wows[wows.length - 1];
    const medianIndex = Math.floor(wows.length / 2);
    const medianWows = (wows.length % 2 === 0) ? [wows[medianIndex -1], wows[medianIndex]] : [wows[medianIndex]];

    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <div className='wow-details'>
            <div>
                <h2>Primer "Wow" de todas las películas</h2>
                <p>Nombre: {firstWow.movie}</p>
                <p>Director: {firstWow.director}</p>
                <p>Fecha: {firstWow.release_date}</p>
            </div>
            <div>
                <h2>Último "Wow" de todas las películas</h2>
                <p>Nombre: {lastWow.movie}</p>
                <p>Director: {lastWow.director}</p>
                <p>Fecha: {lastWow.release_date}</p>
            </div>
            <div>
                <h2>Mediana de "Wow" de todas las películas</h2>
                {medianWows.map((wow, index) => (
                    <div key={index}>
                        <p>Nombre: {wow.movie}</p>
                        <p>Director: {wow.director}</p>
                        <p>Fecha: {wow.release_date}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleBackClick}>Volver</button>
        </div>
    );
}

export default WowDetails;