import React, {Component} from 'react';
import '../AboutMe/AboutMe.css';
import Portrait from '../../../Images/Portrait.jpeg';
import {Container, Col, Row} from 'reactstrap';

class AboutMe extends Component {
    render(){
        return(
            <div className="aboutMe" id="about">
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1000">
                        <Col xs="6" className="aboutMeRight">
                            <img src={Portrait} alt="Portrait img" className="portraitImg"/>
                        </Col>
                        <Col xs="6">
                            <h3>About Me</h3>
                            <p>If you're looking for a creative thinker who's always ready for a challenge,
                                has a keen eye for design, and is just an overall good hang then look no further!
                                (I know that may have sounded cheesy but it's true)
                            </p>

                            <p>
                                Coming from the highly creative field of audio engineering and music production,
                                I have learned to think critically and problem-solve FAST in creative ways.
                                I've also learned that being technically proficient is great and very necessary but 
                                more importantly is building strong connections by being the person that you can't
                                wait to work with again and again. That is who I pride myself as being.
                            </p>

                            <p>
                                So how did I end up in software development anyways? It's quite simple. I wouldn't
                                be able to do the things I love the way I do them today without software technology. 
                                Specifically, the softwares being developed for audio production are truly inspiring
                                to me and is my real drive to me wanting - no, NEEDING to be a part of the software development
                                community. I want to be a part of creating that inspiration by developing products
                                (audio based or not) that inspire people to be and do their best
                                (or make their life a little easier) and I'm ready for the challenge.
                            </p>
                        </Col>
                    </Row>
                </Container> 
            </div>
            
        )
    }
}

export default AboutMe;