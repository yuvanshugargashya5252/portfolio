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
        {/* Header Section */}
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p className="lead">
              I am a passionate software developer with experience in various
              technologies. Below are some of the key areas where I excel and the
              tools I use to build amazing solutions.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Work Experience Section */}
        <Row>
          <Col>
            <h1 className="section-heading">
              <strong className="purple">Work Experience</strong>
            </h1>
            <ListGroup className="experience-list">
              <ListGroup.Item>
                <h5>Software Developer at ABC Corp</h5>
                <p>January 2021 - Present</p>
                <ul>
                  <li>Developed and maintained web applications using React and Node.js.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                  <li>Implemented RESTful APIs and integrated third-party services.</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Frontend Developer Intern at XYZ Ltd</h5>
                <p>June 2020 - December 2020</p>
                <ul>
                  <li>Assisted in the development of user interfaces with HTML, CSS, and JavaScript.</li>
                  <li>Performed testing and debugging of frontend components.</li>
                  <li>Contributed to improving website performance and user experience.</li>
                </ul>
              </ListGroup.Item>
              {/* Add more work experiences as needed */}
            </ListGroup>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <h1 className="section-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
            <ListGroup className="skills-list">
              <ListGroup.Item>JavaScript (ES6+)</ListGroup.Item>
              <ListGroup.Item>React.js / Redux</ListGroup.Item>
              <ListGroup.Item>Node.js / Express</ListGroup.Item>
              <ListGroup.Item>HTML5 / CSS3</ListGroup.Item>
              <ListGroup.Item>SQL / MongoDB</ListGroup.Item>
              <ListGroup.Item>Git / GitHub</ListGroup.Item>
              {/* Add more skills as needed */}
            </ListGroup>
          </Col>
        </Row>

        {/* Tools Section */}
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <h1 className="section-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <ListGroup className="tools-list">
              <ListGroup.Item>Visual Studio Code</ListGroup.Item>
              <ListGroup.Item>Postman</ListGroup.Item>
              <ListGroup.Item>Webpack</ListGroup.Item>
              <ListGroup.Item>Docker</ListGroup.Item>
              <ListGroup.Item>JIRA</ListGroup.Item>
              {/* Add more tools as needed */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;
