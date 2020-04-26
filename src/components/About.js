import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <a href="https://linkedin.com/in/ashaysheth" target="_blank" title="LinkedIn" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ashays" target="_blank" title="GitHub" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://behance.net/ashays" target="_blank" title="Behance" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
                <a href="https://dribbble.com/ashay" target="_blank" title="Dribbble" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                <a href="https://medium.com/@ashaysheth" target="_blank" title="Medium" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
              </div>
              <Link to="/">
                <svg viewBox="0 0 600 100" className="logo">
                <polygon style={{fill: "#6D9C3C"}} points="515,1.6 554,50.6 515,99.3 "></polygon>
                <polygon style={{fill: "#92D050"}} points="515,1.6 554,50.6 593.2,1.6 "></polygon>
                <path style={{fill: "#3480C0"}} d="M465.9,99.4c-26,0-52.1,0-78.2,0c12.2-33.2,26.1-64.7,38.5-97.7c0.4,0,0.9,0,1.3,0 C439.8,34.8,453.7,66.2,465.9,99.4z"/>
                <path style={{fill: "#4BA8A4"}} d="M339.6,1.7c0,32.5,0,65.1,0,97.7c-19.6,0-39.1,0-58.6,0c0-32.6,0-65.2,0-97.7c6.5,0,13,0,19.5,0 c0,12.8,0,25.6,0,38.4c5.2,1.5,13.2,0.2,19.6,0.6c0-13,0-26,0-39.1C326.6,1.7,333.1,1.7,339.6,1.7z"/>
                <path style={{fill: "#ED5D58"}} d="M232.1,29.1c-9,5.8-19.8,9.7-29.9,14.3c-10.3,4.3-19.7,9.4-29.9,13.7c0-18.5,0-36.9,0-55.4c0.4,0,0.9,0,1.3,0 C192.8,11.2,212.8,19.8,232.1,29.1z"/>
                <path style={{fill: "#AF4C61"}} d="M202.2,43.4c0,18.6,0,37.3,0,56c-0.4,0-0.9,0-1.3,0c-19.2-9.7-39.6-18.1-58.6-28c9.5-5.3,19.9-9.6,30-14.3 C182.5,52.8,191.9,47.7,202.2,43.4z"/>
                <path style={{fill: "#F7C600"}} d="M93.4,99.4c-26.1,0-52.1,0-78.2,0c0-0.7,0-1.3,0-2C28.6,66,41.1,34,53.7,1.7c0.4,0,0.9,0,1.3,0 C67.3,34.8,81.2,66.2,93.4,99.4z"/>
                </svg>
              </Link>
              <div className="subtitle">Hello! My name is <strong>Ashay Sheth</strong> and I build thoughtfully designed web and mobile experiences</div>
              <p>Currently, I am a creative technologist on the Machine Experiences team at Capital One, working primarily in the space physical and digital money meet&mdash;the ATM. Designing and building for ATMs has been an exciting challenge as there are interesting constraints and a unique physicality paired with the digital experience.</p>
              <p>In 2017, I graduated with a Computer Science degree from Georgia Tech, with human-computer interaction and artificial intelligence concentrations, along with a minor in economics.</p>
              <p>I am deeply interested in social computing, human-centered AI, tech for social good, and STEM education. I volunteer regularly with <a href="https://outintech.com/" target="_blank" rel="noopener noreferrer">Out in Tech</a> and <a href="https://www.citizenschools.org/" target="_blank" rel="noopener noreferrer">Citizen Schools</a>.</p>
              <p><strong>I love keeping myself busy, </strong>whether that be working on side-projects, freelancing, or tinkering with new technologies. Shoot me an <a href="mailto:ashay.sheth@gmail.com">email</a> and let's build something together!</p>
              <Link to="/" className="backBtn"><i className="fas fa-long-arrow-alt-left"></i>Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
