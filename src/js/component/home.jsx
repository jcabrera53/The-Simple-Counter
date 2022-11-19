import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">This is my Simple Counter</h1><br/>
			<div className="d-flex justify-content-around" id="BigCounter">
			<div className="Clock">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="Four">{props.digitFour}</div>
			<div className="Three">{props.digitThree}</div>
			<div className="Two">{props.digitTwo}</div>
			<div className="One">{props.digitOne}</div>
			</div>
		</div>
	);
};

setInterval(function(){},1000);

export default Home;
