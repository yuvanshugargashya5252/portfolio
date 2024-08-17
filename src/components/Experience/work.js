import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Particle from '../Particle';
import laptopImg from '../../Assets/about.png';
import './WorkExperience.css'; // Import custom CSS for additional styling

function WorkExperience() {
  return (
    <Container fluid className="work-section">
      <Particle />
      <Container>
        {/* Work Experience Section */}
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="experience-list">
              <h1 className="section-heading">
                <strong className="purple">Work Experience</strong>
              </h1>
              <ListGroup>
                <ListGroup.Item>
                  <h5>Associate Software Developer</h5>
                  <h7>Indoqubix Cloudtech</h7>
                  <p>January 2024 - Present</p>
                  <ul>
                    <p>
                      I have been integral to my company as a full stack developer, adeptly managing both frontend 
                      and backend responsibilities. Utilizing Angular and React for frontend development, and Java 
                      Spring Boot , Nest.js for backend solutions, I have effectively navigated database integration 
                      using SQL and PostgreSQL. My contributions have streamlined processes, enhanced user 
                      experiences, and bolstered the overall efficiency of our systems.
                    </p>
                  </ul>
                </ListGroup.Item>
                {/* Add more work experiences as needed */}
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* Skillsets and Tools Section */}
        <Row style={{ marginTop: '50px' }}>
          <Col md={6} className="d-flex justify-content-center">
            <div className="skills-list">
              <h1 className="section-heading">
                <strong className="purple">Professional Skillset</strong>
              </h1>
              <ListGroup>
                <ListGroup.Item>Angular.js</ListGroup.Item>
                <ListGroup.Item>Java Spring Boot</ListGroup.Item>
                <ListGroup.Item>JavaScript / Typescript</ListGroup.Item>
                <ListGroup.Item>Nest.js</ListGroup.Item>
                <ListGroup.Item>React.js</ListGroup.Item>
                <ListGroup.Item>Node.js / Express</ListGroup.Item>
                <ListGroup.Item>HTML5 / CSS3</ListGroup.Item>
                <ListGroup.Item>MySQL / PostgreSQL</ListGroup.Item>
                <ListGroup.Item>Git / GitHub</ListGroup.Item>
                {/* Add more skills as needed */}
              </ListGroup>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <div className="tools-list">
              <h1 className="section-heading">
                <strong className="purple">Tools I use</strong>
              </h1>
              <ListGroup>
                <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                <ListGroup.Item>Intellij Idea</ListGroup.Item>
                <ListGroup.Item>MySql Workbench</ListGroup.Item>
                <ListGroup.Item>Dbeaver</ListGroup.Item>
                <ListGroup.Item>Postman</ListGroup.Item>
                <ListGroup.Item>JIRA</ListGroup.Item>
                {/* Add more tools as needed */}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;
