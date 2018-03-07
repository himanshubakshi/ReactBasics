console.log("Yay, the setup works!!")

import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header"
import { Home } from "./components/Home"


 class App extends React.Component{
 	render() {

 		var user = {
 			name:"Bakshi",
 			hobbies: ["laughing", "loving", "living"]
 		};


 		return (


 			<div className="container">
 				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			<Header />
					</div>
				</div>
				<div className="row">
 					<div className="col-xs-10 col-xs-offset-1">
			 			<Home name={"Himanshu"} age={28} user={user} >
			 				<p id="childParagraph">This is a paragraph</p>
			 				<p id="childParagraph2">This is a paragraph1</p>
			 				<p id="childParagraph3">This is a paragraph2</p>

			 			</Home>

 					</div>
				</div>
			</div>
		);
 	}
 }
 

 render(<App />, window.document.getElementById("myApp"));