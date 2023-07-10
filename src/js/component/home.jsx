import React, { useState } from "react";



//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("");
	


	return (
		<div>
			<div className="cable mx-auto bg-dark"></div>
			<div className="stoplight mx-auto bg-dark d-flex flex-column mb-3 rounded-4">
				<div
				onClick={() => setSelectedColor('red')}
					className={"redLight bg-danger rounded-circle mx-auto" + (selectedColor === 'red' ? " redglow" : "")}
				></div>
				<div 
				onClick={() => setSelectedColor('yellow')}
				className={"yellowLight bg-warning rounded-circle mx-auto" + (selectedColor === 'yellow' ? " yellowglow" : "")}
				></div>
				<div 
				onClick={() => setSelectedColor('green')}
				className={"greenLight bg-success rounded-circle mx-auto" + (selectedColor === 'green' ? " greenglow" : "")}
				></div>
			</div>
		</div>
	);
};

export default Home;
