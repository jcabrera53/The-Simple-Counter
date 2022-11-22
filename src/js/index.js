//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter=0;
setInterval(()=>{


    ReactDOM.render(<Home digitOne={parseInt(counter/1%10)} digitTwo={parseInt(counter/10%10)} digitThree={parseInt(counter/100%10)} digitFour={parseInt(counter/1000%10)}/>, document.querySelector("#app"));
    counter++;
    
},1000)

//render your react application

