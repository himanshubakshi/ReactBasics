console.log("Yay, the setup works!!")

import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";


import { Header } from "./components/Header"
import { Home } from "./components/Home"

import { Root } from "./components/Root"
import { User } from "./components/User"


import { Component1 } from "./components/Component1"


 class App extends React.Component{
 	
 
 	constructor(){
 		super();

 		this.state = {
 			homeLink: "Home",
 			homeMounted: true
 		};
 	}

	onChangeHomeMounted(){
		this.setState({
			homeMounted: !this.state.homeMounted
		});
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

 		let homeComp = "";

		if(this.state.homeMounted){
			homeComp = (
							<Home 
				 				name={"Himanshu"} 
				 				initialAge={28} 
				 				user={user} 
				 				changeLink={this.onChangeLinkName.bind(this)}
				 				initialLinkName={this.state.homeLink}>

				 				<p id="childParagraph">This is a paragraph</p>
				 				<p id="childParagraph2">This is a paragraph1</p>
				 				<p id="childParagraph3">This is a paragraph2</p>

				 			</Home>
			 			);
		}

 		return (
 			<div className="container">
 				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			<Header homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			{homeComp}
 					</div>
				</div>

				<br/>
				<br/>
				<div>
					<button onClick={this.onChangeHomeMounted.bind(this)}>(Un)mount Home Component</button>
				</div>
			</div>
		);
 	}
 };
 

 class RoutedApp extends React.Component{

 	render(){

 		return(
 				<BrowserRouter>
 					<div>

	 					<Switch>
	 						<Route path="/" component={Home} />
		 					<Route path="/root/" component={Root} />
		 					<Route path="/user/" component={User} />

		 				</Switch>
	 				</div>
 				</BrowserRouter>

 			);
 	}
 };



//render(<App/>, window.document.getElementById("myApp"));
render(<RoutedApp/>, window.document.getElementById("myApp"));

