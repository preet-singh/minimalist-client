import React from 'react';
import { Redirect } from 'react-router-dom';
import InfoSection from '../InfoSection/InfoSection';


export function Landing(props){
	if (props.loggedIn){
		return <Redirect to='/Dashboard' />
	}

	return(
		<div className="homepage">
			<InfoSection />
		</div>
		)
}


export default Landing;