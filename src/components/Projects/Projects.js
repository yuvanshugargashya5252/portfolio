import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/download (1).jpeg";
import emotion from "../../Assets/Projects/download.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/images.jpeg";
import bitsOfCode from "../../Assets/Projects/download (2).jpeg";

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
              imgPath={editor}
              isBlog={false}
              title="Voice Automation Scheduler SAAS Platform"
              description="Spearheaded the creation of VapiCall, a multi-tenant SaaS platform that automates outbound voice campaigns using the Vapi AI voice assistant. The system supports dynamic cohort selection via APIs or file uploads, assistant tool integration, and custom campaign configuration per tenant. It enables EHRs and enterprise systems to plug into intelligent, scalable voice workflows without manual intervention. • Technologies used – React , Nest, VAPI AI , Postgresql , AWS"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EHR Portal"
              description="In this project , I am pivotal in the development of a USA-based EHR portal specializing in electronic patient management, enrollment, appointments, tasks, and care plans. Additionally, I successfully implemented a robust authentication module, code driven cloud architecture , communication module enabling secure messaging, voice calls, group calls, and advanced features like call forwarding, enhancing patient care and operational efficiency   • Technologies used – Angular ,React , Nest, Java Spring Boot , MySQL , AWS ,Swagger"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Microservices Events Management"
              description="Implemented queue-based lifecycle management with MQTT to ensure reliable event delivery, optimize message flow, and enhance system resilience in cloud-native applications and different microservices   • Technologies used – Next js , Java spring boot , MQTT , AWS"

            />
          </Col>





          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real time chatting application"
              description="a complete MERN real time application to connect multiple users at a place to chat independently."
              ghLink="https://github.com/yuvanshugargashya5252/mern-chat-app.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tiny url"
              description="transforms long length given urls to short length by generating
              short unique id(mongoDb , node.js, express"
              ghLink="https://github.com/yuvanshugargashya5252/url-shortner.git"
              demoLink="https://yuvanshu-urls.vercel.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Twitter bots detection"
              description="a machine learning bot classifier used for segregation of bots and
              humans using pandas and decision trees classifier"
              ghLink="https://github.com/yuvanshugargashya5252/twitter-bot-detection.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI images generator"
              description="generates random images as per discription given by the user
              (react.js , api)
              "
              ghLink="https://github.com/yuvanshugargashya/ai-images-generator.git"
              demoLink="https://yuvanshu-ai.vercel.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ocr scanner"
              description="extracts text from img files"
              ghLink="https://github.com/yuvanshugargashya5252/ocr-scanner.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Machine learning diabetes predictor"
              description="predicts weather person will have diabetes oe not on basis of some of his body reports using machine learning classifiers"
              ghLink="https://github.com/yuvanshugargashya5252/machine_learning_diabetes-predictor.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
