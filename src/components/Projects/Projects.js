import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gpt3 from "../../Assets/Projects/gpt3.png";
import elearning from "../../Assets/Projects/elearning.png";
import tshirt from "../../Assets/Projects/tshirt.png";
import whether from "../../Assets/Projects/whether.png";
import news from "../../Assets/Projects/news.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whether}
              isBlog={false}
              title="CliMate"
              description="It is an react weather app made using weather api which can predict the current day waether and also for the next five days. It also has the functionality to predict the waether hourly on the same day."
              ghLink="https://github.com/ruchir-07/Weather-APP"
              demoLink="https://weather-app-ruchir-07.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="E-Learning Website"
              description="It is an online learning platform for students where the student can browse through different subjects of different fields in which they are interested and can access them at very nominal price."
              ghLink="https://github.com/ruchir-07/E-Learning-Website"
              demoLink="http://e-learning-website-gray.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt3}
              isBlog={false}
              title="GPT-3 Blog"
              description="An online blog website with respect to booming AI technology in which the main agenda is to understand CHAT GPT and its use. This blog website contains various information about the gpt-3 upgrade and what all new functionalities are made available to the users,"
              ghLink="https://github.com/ruchir-07/GPT3"
              demoLink="https://gpt-3-plum.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tshirt}
              isBlog={false}
              title="T-Shirt Designing Webite"
              description="Its a website made using vite which is a react framework and wroks more efiiciently. Designing is done using the THREEJS library which give a great effect to the website and animations are added using FRAMER MOTION."
              ghLink="https://github.com/ruchir-07/T-shirt-frontend"
              demoLink="https://t-shirt-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsMonkey"
              description="It is a news app on web which enables us to access latest news of different genre with the help of news api, infinite scrolling feature is also available in the website so that the user doesn't have to switch through bars and reload"
              ghLink="https://github.com/ruchir-07/NewsMonkey"
              demoLink="https://news-monkey-ashen.vercel.app/"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Weather APP"
              description="It is an react weather app made using weather api which can predict the current day waether and also for the next five days. It also has the functionality to predict the waether hourly on the same day."
              ghLink="https://github.com/ruchir-07/Weather-APP"
              demoLink="https://weather-app-ruchir-07.vercel.app/"       
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
