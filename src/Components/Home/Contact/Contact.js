import React, {Component} from 'react';
import './Contact.css';
import { Container, Col, Row } from 'reactstrap';
import PortraitSquare from '../../../Images/portrait-square-comp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithub}/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>

class Contact extends Component {
    render(){
        return(
            <div className="contactPage">
                <Container>
                    
                    <Row>
                        <Col xs="12" md="6" className="contactText">
                        <h1>Contact</h1>
                        <hr/>
                            <h6>
                                Want to learn more about me and get in touch? Connect with me
                                on LinkedIn, check out my GitHub, and reach out! I'm always up for a hang.
                            </h6>
                            <h5><a href="https://github.com/stavkidron-coder" className="contactIcon">{githubIcon} stavkidron-coder</a></h5>
                            <h5><a href="https://www.linkedin.com/in/stavkidron/" className="contactIcon">{linkedInIcon} linkedin.com/stavkidron</a></h5>
                            <h5 className="contactIcon">{emailIcon} <a href="mailto:kidronstav@gmail.com" className="emailLink">kidronstav@gmail.com</a></h5>
                        </Col>
                            
                        <Col xs="12" md="6" className="contactPic">
                            <img src={PortraitSquare} className="squarePortrait" alt="portrait"/>
                        </Col>
                    </Row>
                    
                </Container>
                
            </div>
            
        )
    }
}

export default Contact;