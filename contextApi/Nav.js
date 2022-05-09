// import {AiFillShopping} from "react-icons/ai";
// import {Link} from "react-router-dom";
import React,{useContext} from "react"
import { MovieContext} from "./MovieContext";
function Nav (){
    const [movies,setMovies]=useContext(MovieContext)
    return(
        <nav>
            {/* <Link to ={"/"}> */}
                <h1>MOVIES</h1>
                <p> list of movies: {movies.length}</p>
                <div className="cart">
                    {/* <AiFillShopping/> */}
                    {/* <span>0</span> */}
                </div>
            {/* </Link> */}
        </nav>
    )
}
export default Nav;