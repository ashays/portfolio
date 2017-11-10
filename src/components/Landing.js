import React, { Component } from 'react';
import Typed from 'typed.js';
import ProjectBlock from './ProjectBlock';
import PostBlock from './PostBlock';
import projects from '../data/projects';
import { Link } from 'react-router-dom'

import logo from '../logo.svg';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.projects = projects;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.title = "Ashay Sheth";
    document.body.style.backgroundColor = "#fafafa";
    window.scrollTo(0, this.props.scrollPos);
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.animation) {
      const options = {
        strings: ["Hello!^500 My name is <strong>Ashay Sheth</strong> and I build thoughtfully designed web and mobile experiences^2500"],
        typeSpeed: 60,
        loop: false,
        onComplete: this.props.endAnimation
      };
      this.typed = new Typed(this.subtitle, options);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.typed) {
      this.typed.destroy();
    }
  };

  handleScroll(event) {
    this.props.updateScrollPos(window.pageYOffset);
  };

  render() {
    return (
      <div className={this.props.animation ? "animation" : "animationEnded"}>
        <div id="particles-js"></div>
        <div className="main">
          <div className="fold section" id="fold">
            <div className="centered">
              <div className="social">
                <a href="https://linkedin.com/in/ashaysheth" target="_blank" title="LinkedIn" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/ashays" target="_blank" title="GitHub" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                <a href="https://behance.net/ashays" target="_blank" title="Behance" rel="noopener noreferrer"><i className="fa fa-behance"></i></a>
                <a href="https://medium.com/@ashaysheth" target="_blank" title="Medium" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
              </div>
              <img src={logo} className="logo" alt="Ashay" />
              <div className="subtitle"><span ref={(el) => { this.subtitle = el; }}></span></div>
              <div className="subtitle">Hello! My name is <strong>Ashay Sheth</strong> and I build thoughtfully designed web and mobile experiences<span className="typed-cursor">|</span></div>
              <Link to="/me"><div className="aboutBtn">More About Me</div></Link>
            </div>
          </div>
          <div className="section" id="projects">
            <div className="container">
              <h1>Projects</h1>
              <div>
                {this.projects.map(function(project, i) {
                  return <ProjectBlock project={project} key={i} />
                })}
              </div>
            </div>
          </div>
          <div className="section" id="blog">
            <div className="container">
              <h1>Thoughts</h1>
              <div>
                <PostBlock post={{url: "https://medium.com/@ashaysheth/atms-fresh-eyes-on-an-older-technology-d494a1c307b7", title: "ATMs? Fresh Eyes on an Older Technology", color: "#f78e55", description: "I’ve been at Capital One for approximately three months now as a user experience developer on the ATM and Kiosk team. I discovered what"}} />
              </div>
            </div>
          </div>
          {/*<div className="section" id="contact">
            <div className="container">
              <div className="subtitle">
                <div>Let's build something together</div>
                <div style={{"fontSize": "smaller"}}>I love keeping myself busy.<br />Shoot me an email and let's build something together.</div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Landing;
