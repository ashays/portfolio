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
    this.escape = this.escape.bind(this);
  }

  componentDidMount() {
    document.title = this.project.name + " / Ashay Sheth";
    document.body.style.backgroundColor = this.project.color;
    document.addEventListener("keyup", this.escape);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.escape)
  }

  escape(e) {
    if (e.code === 'Escape') {
      this.props.history.push("/");
    }
  }

  render() {
    var assetBlock = false;
    if (this.project.graphics) {
      assetBlock = this.project.graphics.map((graphic, i) => 
        (<img key={i} width={graphic.width} height={graphic.height} src={graphic.source} alt={graphic.description} />)
      );
    }
    return (
      <div>
        <div className="main">
          <div className="section" id="project">
            <div className="actions">
              <Link to="/"><div className="action" title="Close"><i className="fas fa-times"></i></div></Link>
            </div>
            <div className="container">
              <h1>{this.project.name}</h1>
              <div className="description">{this.project.subtitle}</div>
              {this.project.job &&
                <div className="feature"><i className="fas fa-briefcase" aria-hidden="true"></i>{this.project.job.title}, {this.project.job.dates}</div>
              }
              {this.project.awards && this.project.awards.map(function(award, i) {
                return <div className="feature" key={i}><i className="fas fa-trophy"></i>{award}</div>
              })}
              {assetBlock && 
                <div className="assets">{assetBlock}</div>
              }
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
              {/*<Link to="/"><div className="backBtn"><i className="fas fa-long-arrow-alt-left"></i>Back</div></Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
