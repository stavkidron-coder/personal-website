import React, {Component} from 'react';
import songwriterImg from '../../../Images/songwriterViewSong.png';
import movieSagasImg from '../../../Images/movieSagas.png';
import reactGallery from '../../../Images/react-gallery.png';
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
                    <Row>
                        <Col xs="4">
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

                        <Col xs="4">
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

                        <Col xs="4">
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
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Work;