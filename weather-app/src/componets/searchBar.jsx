import { useState } from "react";

function SearchBar(){
    const [text, setText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        
    }
    return(
    <div className="d-flex  align-items-center ">
        <form action="" onSubmit={handleSubmit} className="gap-2">
            <input type="text" placeholder="Enter city name" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button>Search</button>
        </form>
        </div>
        )
    
}
export default SearchBar;