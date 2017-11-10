import React from 'react';
import { Link } from 'react-router-dom'

function ProjectBlock(props) {
    return (
        <Link to={"/projects/" + encodeURIComponent(props.project.name.toLowerCase())}>
            <div className="project" style={{background: props.project.color}}>
              <div className="info">
                <h2>{props.project.name}</h2>
                <span className="description">{props.project.subtitle}</span>
                <span className="type">{props.project.tags[0]}</span>
              </div>
            </div>
        </Link>
    );    
}

export default ProjectBlock;