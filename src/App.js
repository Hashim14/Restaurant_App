import React, {useState} from "react"; 
import "./App.css";
import NavArea from "./Components/navArea";
import Cards from "./Components/cards";


const App = () =>{

    const[search, setSearch]=useState('')

    const handleChange= (e) => {
        setSearch(e.target.value)
    }
    return(
        <div className="App"><NavArea handleChange={handleChange} /><Cards/></div>
    )
    
}

export default App;
 