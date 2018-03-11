import React from "react";
import PropTypes from "prop-types";


export class Home extends React.Component{


	constructor(props){
		super();

		this.state = {
			age: props.initialAge	
		} 
	//	this.state.age = this.age;

	}

	onMakeOlder(){

		//this.state.age++;
		
		this.setState({
			age: this.state.age + 2
		});



		console.log(this.state.age);
	}

	render(){

		var localVar = "Wow, i am a local var not inside  return"

		return(
			<div>			
				<p>Name: {this.props.name}</p>
				<p>Age: {this.state.age}</p>

				<button onClick={() => this.onMakeOlder()}>Make Me Older </button>

				<button onClick={this.onMakeOlder.bind(this)}>Make Me Older2 </button>

			
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