import React,{useState,useContext} from "react"
import {MovieContext} from "./MovieContext"
const AddMovie=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const[id,setId]=useState("");
    const [movies,setMovies]=useContext(MovieContext)
    const updateName=e=>{
        setName(e.target.value)
    }
    const updatePrice=e=>{
        setPrice(e.target.value)
    }
    const updateId=e=>{
        setId(e.target.value)
    }
      const addMovie=e=>{
        e.preventDefault();
        //...prevmovies is copy of an object and ,another object
        setMovies(prevMovies=>[...prevMovies,{name:name, price:price , id:id}])
    }
    return(
        <form onSubmit={addMovie} >
            <input type="text" name ="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/> 
            <input type="text" name="id" value={id} onChange={updateId}/> 
           <button> submit</button>
           </form>
    )       
    

}
export default AddMovie;