import React, { useEffect, useState } from 'react';

function Directors() {
    const [directors, setDirectors] = useState([]);
    
    return (
        <div className='directors'>
            <h1>Lista de directores de las películas en las que Owen Wilson dice "Wow"</h1>
        </div>
    );
}

export default Directors;