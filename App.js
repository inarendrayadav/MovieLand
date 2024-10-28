import React, { useState,useEffect } from 'react';
// Use effect hook used here

import MovieCard from './MovieCard'; 
import searchIcon from './search.svg';
import './App.css';



const API_URL = 'http://www.omdbapi.com?apikey=42894325'; 
// for fecth data for movie as soon as our componet loads


const App=()=>{ 
    const [movies, setMovies]=useState ([]);                
                             //async arrow func it means it takes some times to fecth these movies
    const [searchTerm, setSeachTerm] = useState('');
    const searchMovies = async (title) => {  //movies seach by a title like supermen etc..
          const response = await fetch(`${API_URL}&s=${title}`);
          const data= await response.json();

          setMovies(data.Search);
    }
    useEffect(()=>{
       searchMovies('Batman');
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <p id="footer3">Created by Narendra❣️</p>

            <div className="search">
              <input   //self closing tag
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSeachTerm(e.target.value)}
              />

             <img
              src={searchIcon}
              alt="search"
              onClick={()=>searchMovies(searchTerm)}
            />
            </div>

            {movies?.length>0
                ? (
                <div className="container">
                 {movies.map((movie)=> (
                    <MovieCard movie={movie}/>
                 ))}
                </div>
              ) :(
                <div className="empty">
                    <h2>No movies found!</h2>
                  </div>
                )}

        </div>
    );
}

export default App;