import React, {Component} from 'react';
import songwriterImg from '../../../Images/songwriterViewSong.png';
import movieSagasImg from '../../../Images/movieSagas.png';
import reactGallery from '../../../Images/react-gallery.png';
import ReactPlayer from "react-player";
import '../PreviousWork/PreviousWork.css'
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, CardFooter } from 'reactstrap';

class Work extends Component {

    songwriterBtn = () => {
        window.location.assign('https://song--writer.herokuapp.com/')
    }

    movieSagasBtn = () => {
        window.location.assign('https://movie-saga.herokuapp.com/#/')
    }

    reactGalleryBtn = () => {
        window.location.assign('https://react-instagram-gallery.herokuapp.com/')
    }

    render(){
        return(
            <div className="previousWork">
                <Container>
                    <h2 className="prevWorkTitle">WHAT I'VE DONE</h2>
                    <hr className="prevWorkHr"/>
                    <br/>
                    {/* <Row>
                        <Col xs="12" sm="6" lg="4" data-aos="zoom-in-up" data-aos-duration="400">
                            <Card className="projectCards">
                                <CardImg src={songwriterImg} alt="SONGWRITER" />
                                <CardBody>
                                <CardTitle tag="h5">SONGWRITER</CardTitle>
                                <hr/>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Song information storage app</CardSubtitle>
                                <CardText>SONGWRITER is a React app built to digitize song information where songs can be securely stored, edited, deleted, or marked as "in progress" or "completed".</CardText>
                                </CardBody>
                                <CardFooter>
                                <Button className="viewAppBtn" color="outline-primary" onClick={this.songwriterBtn}>View App</Button>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col xs="12" sm="6" lg="4" data-aos="zoom-in-up" data-aos-duration="700">
                            <Card className="projectCards">
                                <CardImg src={movieSagasImg} alt="SONGWRITER" />
                                <CardBody>
                                <CardTitle tag="h5">MOVIE SAGAS</CardTitle>
                                <hr/>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Movie database where you can add movies</CardSubtitle>
                                <CardText>Movie Sagas is a React app built to add movies to a database using Redux sagas.</CardText>
                                </CardBody>
                                <CardFooter>
                                    <Button className="viewAppBtn" color="outline-primary" onClick={this.movieSagasBtn}>View App</Button>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col xs="12" sm="6" lg="4" data-aos="zoom-in-up" data-aos-duration="1000">
                            <Card className="projectCards">
                                <CardImg src={reactGallery} alt="react-gallery" />
                                <CardBody>
                                <CardTitle tag="h5">REACT GALLERY</CardTitle>
                                <hr/>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">An Instagram-like image gallery</CardSubtitle>
                                <CardText>An image gallery where you can like, add, and delete images.</CardText>
                                </CardBody>
                                <CardFooter>
                                    <Button className="viewAppBtn" color="outline-primary" onClick={this.reactGalleryBtn}>View App</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row> */}

                    <Row>
                        <Col xs="12" xl="8">
                            <ReactPlayer url="https://youtu.be/Vp5uYotTg4U" className="video-left"/>
                        </Col>
                        <Col xs="12" xl="4">
                            <div className="songwriter-description">
                                <h3 className="prevWorkTitle songwriterDescriptionTitle">
                                    SONGWRITER
                                </h3>

                                <div className="workDescTextContainer">
                                    <p className="workDescriptionText">
                                        SONGWRITER is a web app that allows artists to document the songwriting
                                        and pre-production process and store songs securely online so that they don’t have to
                                        worry about losing work ever again.
                                    </p>
                                    <h5>
                                        Technologies Used:
                                    </h5>
                                    <p>
                                        React, Redux, Node.js, PostgreSQL, Bootstrap
                                    </p>
                                </div>
                                <div className="descriptionFooter">
                                    <Button color="primary" onClick={this.songwriterBtn}>View App</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <br/>
                    <hr className="prevWorkHr"/>
                    <br/>
                    
                    <Row>
                    <Col xs="12" xl="8">
                            <ReactPlayer url="https://youtu.be/P7m1ms_7cPs" className="video-left"/>
                        </Col>
                        <Col xs="12" xl="4">
                            <div className="songwriter-description">
                                <h3 className="prevWorkTitle locavoriDescriptionTitle">
                                    Locavori
                                </h3>

                                <div className="workDescTextContainer">
                                    <p className="workDescriptionText">
                                    Locavori is a full-stack web application that gives consumers who love to
                                    buy local (Locavores) a platform to find local artisans all around the world
                                    as well as allows local artisans to create a profile and advertise their products.
                                    </p>
                                    <h5>
                                        Technologies Used:
                                    </h5>
                                    <p>
                                        React, Redux, Node.js, PostgreSQL, Bootstrap, Google Maps APIs (Maps, Distance Matrix, Places, Geolocation)
                                    </p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Work;