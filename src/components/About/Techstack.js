import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { DiNodejs, DiReact, DiMongodb, DiGit, DiPython, DiJava } from "react-icons/di";
import { SiNestjs, SiFlutter, SiAmazonaws, SiMicrosoftazure, SiPowerbi, SiPostgresql, SiMysql, SiFirebase, SiJira, SiTypescript, SiAngular, SiSpring, SiHtml5, SiCss3, SiRedis } from "react-icons/si";
import './techstack.css';

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiAmazonaws /><p>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMicrosoftazure /><p>Azure</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs /><p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNestjs /><p>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact /><p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiAngular /><p>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFlutter /><p>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJava /><p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSpring /><p>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython /><p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb /><p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostgresql /><p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql /><p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFirebase /><p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 /><p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTypescript /><p>TypeScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPowerbi /><p>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiHtml5 /><p>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiCss3 /><p>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiRedis /><p>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit /><p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJira /><p>JIRA</p>
      </Col>
    </Row>


  );
}

export default Techstack;
