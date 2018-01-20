import React from 'react';

const Widget  = (props) => {
	console.log(props);
	if(Object.keys(props.weather).length > 0){
		return(
			<div id="weather">
				<h1>{props.weather.city}</h1>
				<img src={props.weather.icon}></img>
				<h2> {props.weather.main} : {props.weather.description}</h2>
			</div>
		)
	} else {
		return (
			<div></div>
			)
	}
}

export default Widget;