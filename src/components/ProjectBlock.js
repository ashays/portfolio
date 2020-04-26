import React from 'react';
import { Link } from 'react-router-dom'

function ProjectBlock(props) {
    return (
        <Link to={"/projects/" + encodeURIComponent(props.project.name.toLowerCase())} className="project" style={{background: props.project.color}}>
            <h3>{props.project.name}</h3>
            <span className="description">{props.project.subtitle}</span>
            <span className="type">{props.project.tags[0]}</span>
        </Link>
    );    
}

export default ProjectBlock;