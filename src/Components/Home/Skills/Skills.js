import React, {Component} from 'react';
import '../Skills/Skills.css';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode, faKeyboard, faComment } from '@fortawesome/free-solid-svg-icons'

const eyeIcon = <FontAwesomeIcon icon={faEye}/>
const codeIcon = <FontAwesomeIcon icon={faCode}/>
const keyboardIcon = <FontAwesomeIcon icon={faKeyboard}/>
const commentIcon = <FontAwesomeIcon icon={faComment}/>

class Skills extends Component {
    render(){
        return(
            <div className="skills">
                <Container>
                    <div className="sectionTitle">
                        <h2>SKILLS</h2>
                    </div>
                    <hr className="skillsHr"/>
                    <Row>
                        <Col data-aos="fade-right" data-aos-duration="1000" xs="12" md="6" lg="3" fluid>
                            <div className="skillsCards">
                                <h1>{eyeIcon}</h1>
                                <h5>An Eye For Design</h5>
                                {/* <hr className="skillsHr"/> */}
                                <br/>
                                <p>Creating a clean and simple experience for the user through pleasing visuals is a must-have.</p>
                            </div>
                        </Col>

                        <Col data-aos="fade-right" data-aos-duration="750" xs="12" md="6" lg="3">
                            <div className="skillsCards">
                                <h1>{keyboardIcon}</h1>
                                <h5>Coding Languages</h5>
                                <br/>
                                <p>JavaScript, HTML5, CSS, SQL. Currently Learning C++ and always looking to learn new languages!</p>
                            </div>
                        </Col>

                        <Col data-aos="fade-right" data-aos-duration="500" xs="12" md="6" lg="3">
                            <div className="skillsCards">
                                <h1>{codeIcon}</h1>
                                <h5>Frameworks</h5>
                                {/* <hr className="skillsHr"/> */}
                                <br/>
                                <p>React, Redux, Node, Express, Bootstrap, Material-UI, PostgreSQL, Passport, Postico, jQuery, AJAX, Git, and GitHub</p>
                            </div>  
                        </Col>

                        <Col data-aos="fade-right" data-aos-duration="250" xs="12" md="6" lg="3">
                        <div className="skillsCards">
                            <h1>{commentIcon}</h1>
                            <h5>Soft Skills</h5>
                            {/* <hr className="skillsHr"/> */}
                            <br/>
                            <p>
                                Technical skills are great but being a good hang is what it's
                                all about and a good hang is what you'll get with me.
                            </p>
                        </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Skills;