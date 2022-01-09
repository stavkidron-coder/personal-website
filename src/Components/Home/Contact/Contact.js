import React, { Component } from "react";
import "./Contact.css";
import { Container, Col, Row } from "reactstrap";
import PortraitSquare from "../../../Images/portrait-square-comp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <Container>
          <Row>
            <Col xs="12" md="6" className="contactText">
              <h2>Contact</h2>
              <hr className="darkHr" />
              <p className="large-text">
                Want to learn more about me and get in touch? Connect with me on
                LinkedIn, check out my GitHub, and reach out! I'm always up for
                a hang.
              </p>
              <div className="links-container">
                <a
                  href="https://github.com/stavkidron-coder"
                  className="contactIcon"
                >
                  {githubIcon} stavkidron-coder
                </a>
                <a
                  href="https://www.linkedin.com/in/stavkidron/"
                  className="contactIcon"
                >
                  {linkedInIcon} linkedin.com/stavkidron
                </a>

                <a
                  href="mailto:kidronstav@gmail.com"
                  className="emailLink contactIcon"
                >
                  {emailIcon} kidronstav@gmail.com
                </a>
              </div>
            </Col>

            <Col xs="12" md="6" className="contactPic">
              <Image
                src={PortraitSquare}
                className="squarePortrait"
                alt="portrait"
                height="300px"
                width="300px"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
