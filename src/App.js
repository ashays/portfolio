import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateScrollPos = this.updateScrollPos.bind(this);
    this.endAnimation = this.endAnimation.bind(this);
    this.state = {
      animation: true,
      landingScrollPos: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, this.state.scrollPos);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  updateScrollPos(newScroll) {
    this.setState({
      landingScrollPos: newScroll
    });
  };

  endAnimation() {
    this.setState({
      animation: false
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => (
            <Landing scrollPos={this.state.landingScrollPos} animation={this.state.animation} updateScrollPos={this.updateScrollPos} endAnimation={this.endAnimation} />
          )}/>
          <Route exact path="/me" render={(props) => (
            <About scrollPos={this.state.landingScrollPos} />
          )}/>
          <Route path="/projects/:name" component={Project}/>
        </div>
      </Router>
    );
  }
}

export default App;