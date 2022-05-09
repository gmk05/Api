// import { getThemeProps } from '@mui/system';
import React ,{useContext,useState} from 'react'
import Movie from "../contextApi/Movie";
import { MovieContext } from './MovieContext';


export default function Movielist() {
    const [movies ,setMovies]=useContext(MovieContext)
    

  return (
    <div>
   
     { 
       movies.map(movie=>( <li><Movie name={movie.name} price= {movie.price} id={movie.id}/></li>    ))
     }
    
    </div>
  ) 
}

