import React, { Component } from 'react';
import './App.css';

// importing page components
import Author from './Author.js';
import Comment from './Comment.js';


class Post extends Component {


  constructor(props){
    // Super must be called
    super(props)
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e){
    // Using regular if statement 
    // if(this.state.moodPoints <= 9){
    //   this.setState({moodPoints: this.state.moodPoints +1});  
    // } else {
    //   this.setState({moodPoints: 1});
    // }

    // Using terinanry operator
    this.state.moodPoints<=9?this.setState({moodPoints: this.state.moodPoints+1}):this.setState({moodPoints: 1});
    
  }

  render() {
    const allPosts = this.props.posts.map(p => {
      return <div>
        <h1 className="Title">
          {p.title}
        </h1>
        <Author author={p.author} />
        <p className="Post-intro">
          {p.content}
        </p>
        <h2>Comments</h2>
        <Comment comments = {p.comments}/>
      </div>
    });
    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">Pony Blog</h1>
          <p className="Post-intro">
            The best four legged creatures out there!
          </p>
        </header>
        <h3>On a scale of 1-10 this is how I feel</h3>
        <p>Current # of Ponies: {this.state.moodPoints}</p>
        <button onClick= {(e)=> this.increaseMood(e)}>Collect more ponies!</button>
        {allPosts}
        <hr />
        <p>Note, at this stage, we are only rendering ONE post with ONE comment!</p>
      </div>
    );
  }
}

export default Post;
