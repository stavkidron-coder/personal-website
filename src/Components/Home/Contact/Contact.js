import React, {Component} from 'react';
import './Contact.css';
import { Container, Col, Row } from 'reactstrap';
import PortraitSquare from '../../../Images/portrait-square.jpg';
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
                        <Col xs="6">
                        <h1>Contact</h1>
                        <hr/>
                            <h6>
                                Want to learn more about me and get in touch? Connect with me
                                on LinkedIn, check out my GitHub, and reach out! I'm always up for a hang.
                            </h6>
                            <h4 ><a href="https://github.com/stavkidron-coder" className="contactIcon">{githubIcon} stavkidron-coder</a></h4>
                            <h4><a href="https://www.linkedin.com/in/stavkidron/" className="contactIcon">{linkedInIcon} linkedin.com/stavkidron</a></h4>
                            <h4>{emailIcon} kidronstav@gmail.com</h4>
                        </Col>
                            
                        <Col xs="6" className="contactPic">
                            <img src={PortraitSquare} className="squarePortrait" alt="portrait"/>
                        </Col>
                    </Row>
                    
                </Container>
                
            </div>
            
        )
    }
}

export default Contact;