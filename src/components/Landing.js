import React, { Component } from 'react';
import Typed from 'typed.js';
import ProjectBlock from './ProjectBlock';
import PostBlock from './PostBlock';
import projects from '../data/projects';
import { Link } from 'react-router-dom'

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
        strings: ["Hi!^300 I'm <strong>Ashay Sheth</strong>^300—a self-starter, systems-thinker, and creative with a passion for building thoughtfully designed experiences^2500"],
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
                <a href="https://linkedin.com/in/ashaysheth" target="_blank" title="LinkedIn" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ashays" target="_blank" title="GitHub" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://behance.net/ashays" target="_blank" title="Behance" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
                <a href="https://dribbble.com/ashay" target="_blank" title="Dribbble" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                <a href="https://medium.com/@ashaysheth" target="_blank" title="Medium" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
              </div>
              <svg viewBox="0 0 600 100" className="logo">
                <polygon style={{fill: "#6D9C3C"}} points="515,1.6 554,50.6 515,99.3 "></polygon>
                <polygon style={{fill: "#92D050"}} points="515,1.6 554,50.6 593.2,1.6 "></polygon>
                <path style={{fill: "#3480C0"}} d="M465.9,99.4c-26,0-52.1,0-78.2,0c12.2-33.2,26.1-64.7,38.5-97.7c0.4,0,0.9,0,1.3,0 C439.8,34.8,453.7,66.2,465.9,99.4z"/>
                <path style={{fill: "#4BA8A4"}} d="M339.6,1.7c0,32.5,0,65.1,0,97.7c-19.6,0-39.1,0-58.6,0c0-32.6,0-65.2,0-97.7c6.5,0,13,0,19.5,0 c0,12.8,0,25.6,0,38.4c5.2,1.5,13.2,0.2,19.6,0.6c0-13,0-26,0-39.1C326.6,1.7,333.1,1.7,339.6,1.7z"/>
                <path style={{fill: "#ED5D58"}} d="M232.1,29.1c-9,5.8-19.8,9.7-29.9,14.3c-10.3,4.3-19.7,9.4-29.9,13.7c0-18.5,0-36.9,0-55.4c0.4,0,0.9,0,1.3,0 C192.8,11.2,212.8,19.8,232.1,29.1z"/>
                <path style={{fill: "#AF4C61"}} d="M202.2,43.4c0,18.6,0,37.3,0,56c-0.4,0-0.9,0-1.3,0c-19.2-9.7-39.6-18.1-58.6-28c9.5-5.3,19.9-9.6,30-14.3 C182.5,52.8,191.9,47.7,202.2,43.4z"/>
                <path style={{fill: "#F7C600"}} d="M93.4,99.4c-26.1,0-52.1,0-78.2,0c0-0.7,0-1.3,0-2C28.6,66,41.1,34,53.7,1.7c0.4,0,0.9,0,1.3,0 C67.3,34.8,81.2,66.2,93.4,99.4z"/>
              </svg>
              <div className="subtitle"><span ref={(el) => { this.subtitle = el; }}></span></div>
              <div className="subtitle">Hi! I'm <strong>Ashay Sheth</strong>—a self-starter, systems-thinker, and creative with a passion for building thoughtfully designed experiences<span className="typed-cursor">|</span></div>
              <Link to="/me"><div className="aboutBtn">More About Me</div></Link>
            </div>
          </div>
          <div className="section" id="projects">
            <div className="container grid">
              <h2>Projects</h2>
              {this.projects.map(function(project, i) {
                return <ProjectBlock project={project} key={i} />
              })}
            </div>
          </div>
          <div className="section" id="blog">
            <div className="container grid">
              <h2>Thoughts</h2>
              <PostBlock post={{url: "https://medium.com/@ashaysheth/a-little-spit-31682ea882b7", title: "A Little Spit", color: "#042447", description: "Reflections of a 24-year old, Indian-American, cisgender, gay male"}} />
              <PostBlock post={{url: "https://medium.com/@ashaysheth/at-the-component-level-14f1fd1a9381", title: "At the Component Level", color: "#12b5ec", description: "A synthesis of my thoughts and takeaways coming out of Clarity, a design systems community conference in San Francisco"}} />
              <PostBlock post={{url: "https://medium.com/@ashaysheth/atms-fresh-eyes-on-an-older-technology-d494a1c307b7", title: "ATMs? Fresh Eyes on an Older Technology", color: "#3b84c8", description: "I’ve been at Capital One for approximately three months now as a user experience developer on the ATM and Kiosk team. I discovered what…"}} />
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
