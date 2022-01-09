import React, { Component } from "react";
import "../Skills/Skills.css";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCode,
  faKeyboard,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const eyeIcon = <FontAwesomeIcon icon={faEye} />;
const codeIcon = <FontAwesomeIcon icon={faCode} />;
const keyboardIcon = <FontAwesomeIcon icon={faKeyboard} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Container>
          <div className="sectionTitle">
            <h2>SKILLS</h2>
          </div>
          <hr className="skillsHr" />
          <Row>
            <Col
              data-aos="fade-right"
              data-aos-duration="1000"
              xs="12"
              md="6"
              lg="3"
            >
              <div className="skillsCards">
                <span className="icon">{eyeIcon}</span>
                <h3>An Eye For Design</h3>
                <p>
                  Creating a clean and simple experience for the user through
                  pleasing visuals is a must-have.
                </p>
              </div>
            </Col>

            <Col
              data-aos="fade-right"
              data-aos-duration="750"
              xs="12"
              md="6"
              lg="3"
            >
              <div className="skillsCards">
                <span className="icon">{keyboardIcon}</span>
                <h3>Coding Languages</h3>
                <p>
                  JavaScript, HTML5, CSS, SQL. Currently Learning C++ and always
                  looking to learn new languages!
                </p>
              </div>
            </Col>

            <Col
              data-aos="fade-right"
              data-aos-duration="500"
              xs="12"
              md="6"
              lg="3"
            >
              <div className="skillsCards">
                <span className="icon">{codeIcon}</span>
                <h3>Frameworks</h3>
                <p>
                  React, Redux, Node, Express, Bootstrap, Material-UI,
                  PostgreSQL, Passport, Postico, jQuery, AJAX, Git, and GitHub
                </p>
              </div>
            </Col>

            <Col
              data-aos="fade-right"
              data-aos-duration="250"
              xs="12"
              md="6"
              lg="3"
            >
              <div className="skillsCards">
                <span className="icon">{commentIcon}</span>
                <h3>Soft Skills</h3>
                <p>
                  Technical skills are great but being a good hang is what it's
                  all about and a good hang is what you'll get with me.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
