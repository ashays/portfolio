import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkBlock from './LinkBlock';

import projects from '../data/projects';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    for (let i in projects) {
      if (projects[i].name.toLowerCase() === decodeURIComponent(props.match.params.name)) {
        this.project = projects[i];
      }
    }
  }

  componentDidMount() {
    document.title = this.project.name + " / Ashay Sheth";
    document.body.style.backgroundColor = this.project.color;
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="section" id="project">
            <div className="container">
              <h1>{this.project.name}</h1>
              <div className="description">{this.project.subtitle}</div>
              {this.project.job &&
                <div className="feature"><i className="fa fa-briefcase" aria-hidden="true"></i>{this.project.job.title}, {this.project.job.dates}</div>
              }
              {this.project.awards && this.project.awards.map(function(award, i) {
                return <div className="feature" key={i}><i className="fa fa-trophy" aria-hidden="true"></i>{award}</div>
              })}
              <div className="description">{this.project.description}</div>
              <div className="links">
                {this.project.links && this.project.links.map(function(link, i) {
                  return <LinkBlock link={link} key={i} />
                })}
              </div>
              <div className="tags">
                {this.project.tags.map(function(tag, i) {
                  return <div className="tag" key={i}>{tag}</div>
                })}
              </div>
              <Link to="/"><div className="backBtn"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Back</div></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
