import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../logo.svg';
import './About.css';

class About extends Component {
  componentDidMount() {
    document.title = "Ashay Sheth";
    document.body.style.backgroundColor = "#fafafa";
    window.scrollTo(0, this.props.scrollPos);
  }

  render() {
    return (
      <div id="about">
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
              <Link to="/"><img src={logo} className="logo" alt="Ashay" /></Link>
              <div className="subtitle">Hello! My name is <strong>Ashay Sheth</strong> and I build thoughtfully designed web and mobile experiences</div>
              <div className="about">Currently, I am an experience designer and front-end developer at <strong>Capital One</strong>, working in the space where physical and digital money meet&mdash;the ATM. Prior, I was a student at <strong>Georgia Tech</strong>. I graduated in May of 2017 with a bachelor of science in computer science (with human-computer interaction and artificial intelligence concentrations) and a minor in economics.</div>
              <div className="about"><strong>I love keeping myself busy, </strong>whether that be working on side-projects, freelancing, or tinkering with new technologies. Shoot me an <a href="mailto:ashay.sheth@gmail.com">email</a> and let's build something together!</div>
              <div className="about"><Link to="/"><div className="backBtn"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Back</div></Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
