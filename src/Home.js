import React, { Component } from 'react';
import './App.css';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			shakeSpeare: ''
		}
	}

	componentDidMount(){
		var base = this

		let poemApi  = '/api/shakespeare'

		fetch(poemApi)
			.then((response) => {
				return response.json()
			}).then((json) => {
				base.setState({shakeSpeare: json.poem});
			}).catch((ex) => {
				console.log('An error occured while parsing! On nooo', ex);
			})
	}
  render() {
  	let poetry = this.state.shakeSpeare;
  	if(!this.state.shakeSpeare){
  		return (
  			<div>
  				<h1>Loading...</h1>
  			</div>
  		)
  	}
    return (
      <div className="Home">
      	<h1>This is my fav Shakespeare poem which may seem odd:</h1>
      	{poetry}
      	<h2>Because I am a pony!</h2>
      </div>
    );
  }
}

export default Home;
