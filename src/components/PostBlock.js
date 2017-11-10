import React from 'react';

function PostBlock(props) {
    return (
        <a href={props.post.url} target="_blank" rel="noopener noreferrer">
          <div className="project post" style={{background: props.post.color}}>
            <div className="info">
              <h2>{props.post.title}</h2>
              <span className="description">{props.post.description}…</span>
              <span className="type">medium.com<i className="fa fa-external-link" aria-hidden="true"></i></span>
            </div>
          </div>
        </a>
    );    
}

export default PostBlock;