import React, { useEffect, useState } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    
    return (
        <div className='movies'>
            <h1>Lista de películas en las que Owen Wilson dice "Wow"</h1>
        </div>
    );
}

export default Movies;