//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
// include your styles into the webpack bundle
import "../styles/index.css";

export function Home () {
    return (
        <div className="traffic-Light">
            <div className="Red">A</div>
            <div className="Yellow">B</div>
            <div className="Green">C</div>
        </div>
	);
	}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
