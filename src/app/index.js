console.log("Yay, the setup works!!")

import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header"
import { Home } from "./components/Home"


import { Component1 } from "./components/Component1"


 class App extends React.Component{
 	
 
 	constructor(){

 		super();
 		this.state = {
 			homeLink: "Home"
 		}
 	}


	showAlert()
	{
		alert('parent function method from child component');
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});

	}



 	render() {

 		var user = {
 			name:"Bakshi",
 			hobbies: ["laughing", "loving", "living"]
 		};
 		return (


 			<div className="container">
 				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			<Header homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			<Home 
			 				name={"Himanshu"} 
			 				initialAge={28} 
			 				user={user} 
			 				changeLink={this.onChangeLinkName.bind(this)}>

			 				<p id="childParagraph">This is a paragraph</p>
			 				<p id="childParagraph2">This is a paragraph1</p>
			 				<p id="childParagraph3">This is a paragraph2</p>

			 			</Home>

 					</div>
				</div>

				<br/>
				<br/>
				<br/>
				<div>
					<Component1 testParam="Hello World" showAlert={this.showAlert} />
				</div>
			</div>
		);
 	}
 }
 

 render(<App />, window.document.getElementById("myApp"));