import { useState } from "react";

function SearchBar(){
    const [text, setText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(text);
    }
    return(
    <div className="d-flex justify-content-center align-items-center vh-100">
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