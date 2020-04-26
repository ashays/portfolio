import React from 'react';

function PostBlock(props) {
    return (
        <a href={props.post.url} target="_blank" rel="noopener noreferrer" className="project post" style={{background: props.post.color}}>
          <h3>{props.post.title}</h3>
          <span className="description">{props.post.description}</span>
          <span className="type">medium.com<i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
        </a>
    );    
}

export default PostBlock;