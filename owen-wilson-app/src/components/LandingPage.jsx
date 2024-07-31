import "/src/styles/LandingPage.css"
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate = useNavigate();

  const handleMoviesClick = () => {
    navigate('/movies');
  };

  const handleDirectorClick = () => {
    navigate('/directors');
  };
  
  const handleLongestMovieClick = () => {
    navigate('/longestmovie');
  };

  const handleWowDetailsClick = () => {
    navigate('/wowdetails');
  };

  return (
    <div className='landing-page'>
        <>
        <h1>Bienvenido a la Owen Wilson wow app!</h1>
        <p>Presiona los botones para hacer las consultas</p>
        <button onClick={handleMoviesClick} className='movies-button'>Show all movies</button>
        <button onClick={handleDirectorClick} className='directors-button'>Show all directors</button>
        <button onClick={handleLongestMovieClick} className='longest-movie-button'>Show longest movie</button>
        <button onClick={handleWowDetailsClick} className='wow-details-button'>Show WOW details</button>
        </>
    </div>
  );
};

export default LandingPage;