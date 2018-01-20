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

		let poemApi  = 'http://ShakeItSpeare.com/api/poem'

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
      <h1> YO YO BIDDIES</h1>
      	<h1>This is my fav Shakespeare poem:</h1>
      	{poetry}
      </div>
    );
  }
}

export default Home;
