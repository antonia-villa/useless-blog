import React, { Component}  from 'react';

class Author extends Component {
	render(){
		return (
			<div> 
				<em>{this.props.author}</em>
			</div>
		);
	}
}

export default Author;