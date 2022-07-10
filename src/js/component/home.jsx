import React, {useState}from "react";

//create your first component
function Home () {
    const [ selectedColor, setSelectedColor ] = useState("Red")
    return (
        <div className="container">
        <div className="traffic-Light">
            <div 
            className={"Red" + (selectedColor === "Red"? " glow":"")}
            onClick={() => setSelectedColor("Red")} />
            
            <div 
            className={"Yellow" + (selectedColor === "Yellow"? " glow":"")}
                onClick={() => setSelectedColor("Yellow")} />
            <div 
            className={"Green" + (selectedColor === "Green"? " glow":"")}
                onClick={() => setSelectedColor("Green")} />
        </div>
        </div>
	);
	}

export default Home;
