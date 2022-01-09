import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import "../PreviousWork/PreviousWork.css";
import { Container, Row, Col } from "reactstrap";

class Work extends Component {
  render() {
    return (
      <div className="previousWork">
        <Container fluid="lg">
          <div className="sectionTitle">
            <h2 className="prevWorkTitle">PREVIOUS WORK</h2>
          </div>
          <hr className="prevWorkHr" />
          <br />

          <div className="cardWrapper">
            {/* <Row> */}
            <Col xs="12" xl="5" className="workCard">
              <div className="songwriter-description">
                <h3 className="prevWorkTitle songwriterDescriptionTitle">
                  SONGWRITER
                </h3>

                <div className="player-wrapper">
                  <ReactPlayer
                    config={{
                      youtube: {
                        playerVars: { origin: "https://www.youtube.com" },
                      },
                    }}
                    url="https://youtu.be/Vp5uYotTg4U"
                    className="react-player"
                    width="100%"
                    height="100%"
                  />
                </div>

                <div className="workDescTextContainer">
                  <p className="workDescriptionText">
                    SONGWRITER is a web app that allows artists to document the
                    songwriting and pre-production process and store songs
                    securely online so that they don’t have to worry about
                    losing work ever again.
                  </p>
                  <h5>Technologies Used:</h5>
                  <p>React, Redux, Node.js, PostgreSQL, Bootstrap</p>
                </div>
              </div>
            </Col>

            <Col xs="12" xl="5" className="workCard">
              <div className="songwriter-description">
                <h3 className="prevWorkTitle locavoriDescriptionTitle">
                  Locavori
                </h3>

                <div className="player-wrapper">
                  <ReactPlayer
                    config={{
                      youtube: {
                        playerVars: { origin: "https://www.youtube.com" },
                      },
                    }}
                    url="https://youtu.be/P7m1ms_7cPs"
                    className="react-player"
                    width="100%"
                    height="100%"
                  />
                </div>

                <div className="workDescTextContainer">
                  <p className="workDescriptionText">
                    Locavori is a full-stack web application that gives
                    consumers who love to buy local (Locavores) a platform to
                    find local artisans all around the world as well as allows
                    local artisans to create a profile and advertise their
                    products.
                  </p>
                  <h5>Technologies Used:</h5>
                  <p>
                    React, Redux, Node.js, PostgreSQL, Bootstrap, Google Maps
                    APIs (Maps, Distance Matrix, Places, Geolocation)
                  </p>
                </div>
              </div>
            </Col>
            {/* </Row> */}
          </div>

          <Row></Row>
        </Container>
      </div>
    );
  }
}

export default Work;
