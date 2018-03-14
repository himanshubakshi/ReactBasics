import React from "react";
import PropTypes from "prop-types";


export class Home extends React.Component{


	constructor(props){
		super();

		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		
		} 

	// 	setTimeout(() => {
	// 		this.setState({
	// 			status: 1
	// 		})
	// 	}, 2000)
	// //	this.state.age = this.age;

	}


	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	componentWillReceiveProps(newProps){
		console.log("componentWillReceiveProps: received props: " + newProps);
	}
	
	shouldComponentUpdate(newProps, newState){
		console.log("shouldComponentUpdate received props: " + newProps  + ", new State: " + newState);

		return true;
	}

	componentWillUpdate(newProps, newState){
		console.log("componentWillUpdate received props: " + newProps  + ", new State: " + newState);
	}

	componentDidUpdate(prevProps, prevState){
		console.log("componentDidUpdate received props: " + prevProps  + ", new State: " + prevState);
	}

	componentWillUnmount(){
		console.log("componentWillUnmount");
	}

	onMakeOlder(){

		//this.state.age++;
		
		this.setState({
			age: this.state.age + 2
		});



		console.log(this.state.age);
	}

	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event){

		this.setState({
			homeLink: event.target.value
		});
	}

	render(){

		var localVar = "Wow, i am a local var not inside  return"

		return(
			<div>			
				<p>Name: {this.props.name}</p>
				<p>Age: {this.state.age}</p>	
				<p>Status: {this.state.status}</p> 


				<button onClick={() => this.onMakeOlder()}>Make Me Older </button>

				<button onClick={this.onMakeOlder.bind(this)}>Make Me Older2 </button>
				
				<br/>
				<br/>
				
				<input type="text" 
						value={this.state.homeLink}
				 		onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
			
			</div>
		);

	}
}


Home.propTypes = {
	name: PropTypes.string, 
	age:  PropTypes.number, 
	user: PropTypes.object,
	children: PropTypes.element.isRequired,
	initialLinkName: PropTypes.string
}