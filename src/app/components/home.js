import React from "react";
import PropTypes from "prop-types";


export class Home extends React.Component{

	render(){

		var localVar = "Wow, i am a local var not inside  return"


		return(
			<div>			
				<p> In a new Component</p>

				<p>Name: {this.props.name}</p>
				<p>Age: {this.props.age}</p>

				<p>user name:  {this.props.user.name}</p>
				<p>user hobbies:  {this.props.user.hobbies.map((hobby, i) =>  <li key={i}>{hobby}</li> )}</p>


				<p> local var: {localVar}</p>
				{this.props.children}

				<br/>
				<br/>
				<br/>




				
			</div>
		);

	}
}


Home.propTypes = {
	name: PropTypes.string, 
	age:  PropTypes.number, 
	user: PropTypes.object,
	children: PropTypes.element.isRequired
}