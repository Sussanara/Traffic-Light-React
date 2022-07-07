import React, {useState}from "react";

//create your first component
function Home () {
    const [ selectedColor, setSelectColor ] = useState("Red")
    return (
        <div className="traffic-Light">
            <div className="Red glow"></div>
            <div className="Yellow"></div>
            <div className="Green"></div>
        </div>
	);
	}

export default Home;
