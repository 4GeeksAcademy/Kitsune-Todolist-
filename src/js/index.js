//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Todolist from "./component/Todolist.jsx";


// include your styles into the webpack bundle
import "../styles/index.css";

 

//render your react application
ReactDOM.render(<Todolist />, document.querySelector("#app"));
