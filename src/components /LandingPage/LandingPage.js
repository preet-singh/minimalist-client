import React from 'react';
import { Redirect } from 'react-router-dom';

export function Landing(props){
	if (props.loggedIn){
		return <Redirect to='/' />
	}

	return(
		<div className="information">
			<h2> ORGANIZE | SOCIALIZE | REVITALIZE </h2>
			<div className="col-3">
				<div className="infoText">A tool to organize and keep track of all of your home projects</div>
			</div>
			<div className="col-3">
				<div className="infoText">Share your successes and socialize</div>
			</div>
		</div>	
		)
}


export default Landing;