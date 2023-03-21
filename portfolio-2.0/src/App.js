import './App.css';
import React from  "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';
// import Projects from './Components/Projects';
// import Title from './Components/Title';
import Wrapper from './Components/Wrapper';
// import props from './Components/Projects/Project.json';
// import ProjectCard from './Components/Projects/Project';
import Projects from "./Components/Projects/Projects";
import Header from './Components/Banner/Header';
import styled from "styled-components";
import ProfComponent from './Components/Banner/ProfComponent';
import Services from './Components/Service/Services';
import Clients from './Components/Clients/Clients';


// import Menu from './Components/Menu/Menu';

window.onload = function() {
  document.querySelector('body').classList.add('loaded')
}

function App() {
  return (
    <Router>
      <Container>
        <Banner>
          <Header />
          <ProfComponent />
        </Banner>
        <Services />
        <LightColor>
          <Projects />
        </LightColor>
        <Clients />
      </Container>
      <Navbar />
      <Routes>
      {/* <Menu/> */}
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<><Projects /><Wrapper>
          {/* <Title>Projects</Title>
          {props.map(project => <ProjectCard

            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.url} />
          )} */}
        </Wrapper></>
      } />
    
      </Routes> 
    </Router>
  );
}

export default App;

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
