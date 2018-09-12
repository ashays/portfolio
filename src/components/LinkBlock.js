import React, { Component } from 'react';

class LinkBlock extends Component {
  componentDidMount() {
    // this.hostname.textContent = this.link.hostname;
    this.hostname.setAttribute('title', this.link.hostname);
    
  }

  render() {
    return (
        <a href={this.props.link.url} target="_blank" rel="noopener noreferrer" ref={(el) => { this.link = el; }}>
          <div className="link" ref={(el) => { this.hostname = el; }} title="">
            <i className={this.props.link.icon ? this.props.link.icon : "fas fa-link"}></i>
            <div className="title">{this.props.link.title}</div>
            {/*<div className="url"><span ></span><i className="fas fa-external-link-alt" aria-hidden="true"></i></div>*/}
          </div>
        </a>
    );
  }
}

export default LinkBlock;