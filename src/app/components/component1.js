import React from "react";


export const Component1 = (props) => {

	//document.getElementById("submitButton").onClick

	return(

		<div>
		
			CP1

			<input type="text" id="myInput"> 
			</input> 


			<p>{props.testParam}</p>
			<button id="submitButton">Submit</button>

		</div>
	);

}