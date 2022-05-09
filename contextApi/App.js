import React from "react"
import Nav from "../contextApi/Nav"
 //import Products from "../contextApi/Products";
//import checkout from "../contextApi/Checkout";
import {MovieProvider} from "./MovieContext"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movielist from "./Movielist"
import AddMovie from "./AddMovie"
function App() {
    return ( 
        // // <div className="App">
        // //     <BrowserRouter>
        //         <nav />
        //         <Routes>
        //             <Routes path="/" element={<Movielist />} />
        //             <Routes path="/" element={<MovieProvider />} />
        //         </Routes>

        //     </BrowserRouter>
        // </div>
        <MovieProvider>
            <div className="App">
            <AddMovie/>
             <Nav/> 
                <Movielist/>
            </div>
        </MovieProvider>
    )
}
export default App