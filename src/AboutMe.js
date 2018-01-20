import React, { Component } from 'react';
import Widget from './widget.js'
import './App.css';

class AboutMe extends Component {
	constructor(props){
		super(props);
		this.state = {
			zipcode: '',
			weather: ''
		}
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
  	}

handleSubmit(event) {
	event.preventDefault();

    let base = this
    console.log(this.state.zipcode);
    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip='+this.state.zipcode+',us&appid=052f26926ae9784c2d677ca7bc5dec98'

	fetch(weatherApi)
		.then((response) => {
			console.log('resonse', response);
			return response.json()
		}).then((json) => {

		var weatherStats = {};

		weatherStats['city'] = json.name;
		weatherStats['temperature'] = json.main.temp;
		weatherStats['main'] = json.weather[0].main;
		weatherStats['description'] = json.weather[0].description;
		weatherStats['humidity'] = json.main.humidity;
		weatherStats['icon'] = "http://openweathermap.org/img/w/"+json.weather[0].icon+".png";
		base.setState({weather: weatherStats});

		}).catch((ex) => {
			console.log('An error occured while parsing! On nooo', ex);
		})
	}

  render() {

    return (
      <div className="AboutMe">
      <div id="aboutMeContainer">
      	<h1 id="aboutMeHeader">You may or may not know:</h1>
      	<h2 id="aboutMesubHeader">I am an american hero.</h2>
      </div>
      	<h2>I am so smart I can predict the weather.</h2>
      	 <Widget weather={this.state.weather} />
      	 <form onSubmit={this.handleSubmit} id="submitForm">
        <label>Interested in the weather?</label>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    );
  }
}


export default AboutMe;
