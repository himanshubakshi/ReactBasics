import React from "react";

export class Header extends React.Component{

	render(){
		return(
			// <nav classNameName="navbar navbar-default">
			// 	<div classNameName="container">
			// 		<div classNameName="navbar-header">
			// 			<ul classNameName="nav navbar-nav">
			// 				<li>
			// 					<a href="#">Home</a>
			// 				</li>
			// 			</ul>
			// 		</div>
			// 	</div>
			// </nav>

			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="#">Home</a></li>
			      <li><a href="#">Page 1</a></li>
			      <li><a href="#">Page 2</a></li>
			      <li><a href="#">Page 3</a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}