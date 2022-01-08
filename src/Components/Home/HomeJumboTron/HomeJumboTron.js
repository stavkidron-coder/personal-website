import React, { Component } from "react";
import "./HomeJumbotron.css";
import { Col, Container, Jumbotron, Row } from "reactstrap";

class HomeJumboTron extends Component {
  render() {
    return (
      <Jumbotron className="homeJumbo">
        <Container>
          <Row>
            <Container>
              <Col xs="12" md="8" className="jumboTextPanel">
                <h1>STAV KIDRON</h1>

                <hr className="jumboHr" />

                <Col xs="12">
                  <div className="jumboTextBox">
                    <p>Software Developer</p>
                    <p>UX Engineer</p>
                  </div>
                </Col>
              </Col>
            </Container>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default HomeJumboTron;
