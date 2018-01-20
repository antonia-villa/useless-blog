import React, { Component } from 'react';
import './App.css';

// importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// importing page components
import Home from './Home.js';
import Post from './Post.js';
import Author from './Author.js';
import Comment from './Comment.js';
import AboutMe from './AboutMe.js';
import FavoriteFood from './FavoriteFood.js';
import FavoriteMovie from './FavoriteMovie.js';

var posts = [{
  title: 'Ponies 4 LYFE',
  content: 'They are so magestic.',
  author: 'BumbleBee; Confetti',
  comments: ['The dappled ones are beautiful!', 'Yeah, go ponnies - run fast!']
}, {
  title: 'Ponies loves Carrots!',
  content: 'All ponies love bright orange carrots!',
  author: 'Peanut the Pony',
  comments: ['We get it.', 'You are a ponygirl.', 'Pipe down!']
}];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle Nav</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Antonia Villa</a>
              </div>

              <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                  <li class="active"><Link to='/'>This goes to the home page </Link></li>
                  <li class="active"><Link to='/post'>Check out my blog!</Link></li>
                  <li class="active"><Link to='/about'>About Me</Link></li>
                  <li class="active"><Link to='/food'>Favorite Food</Link></li>
                  <li class="active"><Link to='/movie'>Favorite Movie</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={() => (<Post posts={posts} />)}/>
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/food" component={FavoriteFood} />
          <Route exact path="/movie" component={FavoriteMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
