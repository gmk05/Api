import React ,{useState,createContext} from 'react'
//import Movie from "../contextApi/Movie";
export const MovieContext=createContext();
export const  MovieProvider = props => {
    const [movies,setMovies]=useState([{
        name:"bahubali2",
        price:650,
        id:1850
    },
{
      name:"RRR",
        price: 350,
        id:1200
}]);
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        { props.children}
    </MovieContext.Provider>
  )
}
 