import React, { Component } from 'react';

class LinkBlock extends Component {
  componentDidMount() {
    this.hostname.textContent = this.link.hostname;
  }

  render() {
    return (
        <a href={this.props.link.url} target="_blank" rel="noopener noreferrer" ref={(el) => { this.link = el; }}>
            <div className="link">
                <div className="title">{this.props.link.title}</div>
                <div className="url"><span ref={(el) => { this.hostname = el; }}></span><i className="fa fa-external-link" aria-hidden="true"></i></div>
            </div>
        </a>
    );
  }
}

export default LinkBlock;