import React from "react";
import "./projects.css";
import projects from "./projects.json";
import Wrapper from "./components/Wrapper";
import Components from "./components";
import Title from "./Title";

class project extends Components {
    // Setting this.state.projects to the Projects.json array
    // 
    state = {
      projects
    };

render()  {
    return (
      <Wrapper>
        <Title>Project List</Title>
        {this.state.project.map(projects => (
          <project
            // removeFriend={this.removeFriend}
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            link={projects.link}
          />
        ))}
      </Wrapper>
    );
    }
}  
  


/* Lots of editing needed here */
function ProjectCard(project) {
  return (
    <div className="ProjectCard">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Image:</strong> {project.image}
          </li>
          <li>
            <strong>Name:</strong> {project.name}
          </li>
          <li>
            <strong>Link:</strong> {project.link}
          </li>
        </ul>
      </div>
    </div>
  );
}


export default ProjectCard;
