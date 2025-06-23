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
                  <h5>Sr. Executive Software Engineer</h5>
                  <h7>Knowledge Excel Pvt. Ltd</h7>
                  <p>March 2025 - Present</p>
                  <ul>
                    <p>
                      At my current company, I continue to work as Sr. Full Stack Developer, expanding my expertise into
                      Flutter for mobile app development alongside web technologies like React, and NestJS. I've
                      implemented and integrated communication tool Amazon Connect for automated voice connect.
                      Additionally, I designed and developed a Vapi-powered Scheduler SaaS platform, enabling dynamic
                      voice campaign automation integrated with external systems via configurable APIs. This platform
                      supports tenant-based cohort selection, assistant tool configuration, and intelligent call routing,
                      significantly improving operational efficiency and scalability for enterprise use cases.
                    </p>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Associate Software Developer</h5>
                  <h7>Indoqubix Cloudtech</h7>
                  <p>January 2024 - March 2025</p>
                  <ul>
                    <p>
                      I have been an integral part of my company as a Full Stack Developer, expertly managing both
                      frontend and backend responsibilities. Leveraging Angular, React, Next.js, and NestJS for frontend
                      development and Java Spring Boot and Node.js for backend solutions, I have designed and optimized
                      scalable, high-performance applications. My expertise extends to SQL, PostgreSQL, and MySQL,
                      ensuring efficient database integration. Additionally, I have implemented event-driven architectures
                      using MQTT and AWS services like SQS and SNS, enhancing system scalability and reliability. I have
                      also integrated communication services such as Azure Communication Services (ACS) and Twilio, 
                      while securing applications with Azure Entra ID, AWS Cognito, and Google authentication. 
                    </p>
                  </ul>
                </ListGroup.Item>
                {/* Add more work experiences as needed */}
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* Skillsets and Tools Section */}
        <div style={{ marginTop: '50px' }}>
          <h1 className="section-heading text-center mb-4">
            <strong className="purple">Professional Skillset</strong>
          </h1>

          <Row>
            <Col md={4} className="d-flex justify-content-center">
              <div className="skills-list">
                <ListGroup>
                  <ListGroup.Item>AWS</ListGroup.Item>
                  <ListGroup.Item>Microsoft Azure</ListGroup.Item>
                  <ListGroup.Item>Microsoft Fabric</ListGroup.Item>
                  <ListGroup.Item>PowerBI</ListGroup.Item>
                  <ListGroup.Item>Nest.js</ListGroup.Item>
                  <ListGroup.Item>React.js</ListGroup.Item>
                  
                </ListGroup>
              </div>
            </Col>

            <Col md={4} className="d-flex justify-content-center">
              <div className="skills-list">
                <ListGroup>
                  <ListGroup.Item>Angular.js</ListGroup.Item>
                  <ListGroup.Item>Java Spring Boot</ListGroup.Item>
                  <ListGroup.Item>Flutter (Mobile Dev)</ListGroup.Item>
                  <ListGroup.Item>JavaScript / TypeScript</ListGroup.Item>
                  <ListGroup.Item>Node.js / Express</ListGroup.Item>
                  <ListGroup.Item>HTML5 / CSS3</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>

            <Col md={4} className="d-flex justify-content-center">
              <div className="skills-list">
                <ListGroup>
                  <ListGroup.Item>MySQL / PostgreSQL</ListGroup.Item>
                  <ListGroup.Item>Firebase</ListGroup.Item>
                  <ListGroup.Item>Git / GitHub</ListGroup.Item>
                  <ListGroup.Item>JIRA</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </div>


      </Container>
    </Container>
  );
}

export default WorkExperience;
