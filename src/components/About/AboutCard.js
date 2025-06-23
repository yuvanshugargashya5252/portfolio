import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvanshu Gargashya </span>
            <br /> Innovative and results-driven Software Engineer with deep expertise in Full-Stack development along with  
Mobile App development, specializing in Angular, React, Next.js, NestJS, Node.js, Flutter, and Java Spring  
Boot. Skilled in architecting and deploying scalable, event-driven systems on AWS, leveraging services like 
SQS, SNS, and Lambda for seamless automation and lifecycle management. Proficient in database 
optimization with MySQL and designing high performance cloud-native applications. Experienced in 
integrating real-time communication platforms such as Azure Communication Services (ACS), VAPI AI and 
Twilio and Amazon Connect, alongside robust authentication systems including Azure Entra ID, AWS 
Cognito, and Google. Passionate about building secure, efficient, and cutting-edge software solutions that 
enhance user experiences and drive business success. Additionally experienced in data analytics and 
visualization, with strong command over Power BI and Microsoft Fabric, enabling insight-driven decision
making and operational intelligence.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yuvanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
