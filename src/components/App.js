// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    let [image, setImage] = useState("");
    let [isloaded, setIsLOaded] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
           return (
                setImage(data.message),
                setIsLOaded(true))         
            })
    }, [])

    if (isloaded === false) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <img src={image} alt="A Random Dog"></img>
        </>        
    )
};

    


export default App