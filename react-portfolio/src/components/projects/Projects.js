import React from "react";
import "./projects.css";
import "./projects.json";

// class Projects extends Component {
//     // Setting this.state.projects to the Projects.json array
//     // 
//     state = {
//       projects
//     };

render() {
    return (
      <Wrapper>
        <Title>Project List</Title>
        {this.state.projects.map(project => (
          <Projects
            // removeFriend={this.removeFriend}
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            link={project.link}
          />
        ))}
      </Wrapper>
    );
  }


/* Lots of editing needed here */
function Projects(props) {
  return (
    <div className="ProjectCard">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}


export default Projects;
