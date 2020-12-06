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
                    <h2 className="title">SKILLS</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <h1>{eyeIcon}</h1>
                            <h5>An Eye For Design</h5>
                            <p>Creating a clean and simple experience for the user through pleasing visuals is a must-have.</p>
                        </Col>
                        <Col>
                            <h1>{keyboardIcon}</h1>
                            <h5>Coding Languages</h5>
                            <p>JavaScript, HTML5, CSS, SQL. Currently Learning C++ and always looking to learn new languages!</p>
                        </Col>
                        <Col>
                            <h1>{codeIcon}</h1>
                            <h5>Frameworks</h5>
                            <p>React, Redux, Node, Express, Bootstrap, Material-UI, PostgreSQL, Passport, Postico, jQuery, AJAX, Git, and GitHub</p>
                        </Col>
                        <Col>
                            <h1>{commentIcon}</h1>
                            <h5>Soft Skills</h5>
                            <p>Technical skills are great but being a good hang is what it's all about and a good hang is what you'll get with me.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Skills;