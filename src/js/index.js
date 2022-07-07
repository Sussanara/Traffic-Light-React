//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/index.css'
import Home from "./component/home.jsx";
// include your styles into the webpack bundle




//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
