import React, {Component} from 'react';
import { Col, Container, Jumbotron, ListGroup, ListGroupItem, Row } from 'reactstrap';
import '../Resume/Resume.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import PortraitSquare from '../../Images/portrait-square.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithub}/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>

class Resume extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron className="resumeJumbo">
                    <Container>
                        <Row>   
                            <Col xs="6">
                                <h1 className="resumeTitle">What I'm All About</h1>
                                <hr className="resumeJumboHr"/>
                                <h5>{emailIcon} kidronstav@gmail.com</h5>
                                <h5>
                                    <a
                                        href="https://github.com/stavkidron-coder"
                                        className="resumeJumboIcon">
                                            {githubIcon} stavkidron-coder
                                    </a>
                                </h5>
                                <h5>
                                    <a
                                        href="https://www.linkedin.com/in/stavkidron/"
                                        className="resumeJumboIcon">
                                            {linkedInIcon} linkedin.com/stavkidron
                                    </a>
                                </h5>
                            </Col>
                            <Col xs="6">
                                <img src={PortraitSquare} alt="portrait" className="resumePortrait"/>
                            </Col>
                        </Row>
                        
                    </Container>
                </Jumbotron>

                <div className="resumeBody">
                    
                        <div className="bio">
                            <Container>       
                                <Row>
                                    <Col xs="8">
                                        <h2>Bio</h2>
                                        <hr/>
                                        <p>
                                            I am an experienced Audio Engineer and Musician with a demonstrated
                                            history of working in the entertainment industry. I’ve always been
                                            intrigued by the software side of audio production and how it works.
                                            Therefore, software development seemed like the perfect next logical
                                            step in my engineering journey.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="resumeSkills">
                            <Container>
                                <Row>
                                    <Col xs="8">
                                        <h2>Skills</h2>
                                        <hr/>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <h5>Software languages and frameworks:</h5>
                                                <ul>
                                                    <li>React</li>
                                                    <li>JavaScript</li>
                                                    <li>Bootstrap</li>
                                                    <li>PostgreSQL</li>
                                                    <li>Redux</li>
                                                    <li>jQuery</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>Node</li>
                                                    <li>Express</li>
                                                    <li>Heroku</li>
                                                    <li>Material-Ui</li>
                                                    <li>Passport</li>
                                                    <li>React Sortable HOC</li>
                                                    <li>Fontawesome</li>
                                                    <li>Git</li>
                                                    <li>Github</li>
                                                    <li>VS Code</li>
                                                </ul>
                                            </ListGroupItem>

                                                <ListGroupItem>
                                                    <h5>Audio Engineering/Production</h5>
                                                </ListGroupItem>

                                                <ListGroupItem>
                                                    <h5>Pro Tools</h5>
                                                </ListGroupItem>

                                                <ListGroupItem>
                                                    <h5>Adobe Premiere</h5>
                                                </ListGroupItem>

                                                <ListGroupItem>
                                                    <h5>Adobe XD</h5>
                                                </ListGroupItem>

                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <div className="experience">
                                <Container> 
                                    <Row>
                                        <Col xs="8">
                                            <h2>Experience</h2>
                                            <hr/>
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Full-Stack Engineering Student</h5>
                                                <h6>Prime Digital Academy</h6>
                                                <h6>August 2020 - Present</h6>
                                                <ul>
                                                    <li> Accelerated immersion program focusing on software development and soft skills training for real-world experience</li>
                                                    <li> Working with teams remotely to accomplish goals</li>
                                                    <li> Learning new technologies and languages in a fast-paced environment</li>
                                                    <li><h6>SONGWRITER Solo Project</h6></li>
                                                    <ul>
                                                        <li>Addressed the issue of song writers not having a practical location to store their song information.</li>
                                                        <li> Web app that stores song information such as lyrics, key, Tempo, etc. to be viewed and edited.</li>
                                                        <li> Technologies used: React, JavaScript, PostgreSQL, Node, Express, Heroku, Bootstrap, Fontawesome</li>
                                                    </ul>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="8">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Audio Engineer/Producer</h5>
                                                <h6>F5 SoundHouse</h6>
                                                <h6>January 2016 - Present</h6>
                                                <ul>
                                                    <li>Deep understanding of audio recording equipment, signal flow, and multiple DAWs</li>
                                                    <li>Learning new techniques and problem solving on-the-fly</li>
                                                    <li>Collaborating with a production team to deliver "radio-ready" productions</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs="8">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Podcast Editor/Audio Engineer</h5>
                                                <h6>One Agora Integrative Health</h6>
                                                <h6>October 2019 – Present</h6>
                                                <ul>
                                                    <li>Recording and editing audio for weekly podcasts and videos</li>
                                                    <li>Setting up recording equipment and troubleshooting on-the-fly</li>
                                                    <li> Producing high-quality recordings within strict deadlines</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="8">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Music Production Instructor</h5>
                                                <h6>Freelance</h6>
                                                <h6>June 2016 - Present</h6>
                                                <ul>
                                                    <li>Teaching music production techniques, audio engineering, and how to use major DAWs</li>
                                                    <li>Preparing individual curriculums for students of all skill levels</li>
                                                    <li>Creating a fun, inclusive environment for all students</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs="8">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Repair Tech</h5>
                                                <h6>Guitar Center</h6>
                                                <h6>September 2017 – October 2020</h6>
                                                <ul>
                                                    <li>Repaired guitars and other string instruments</li>
                                                    <li>Learned new techniques and fixes on-the-fly</li>
                                                    <li> Provided excellent communication skills with both customers and coworkers.</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs="8">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">AV Technician</h5>
                                                <h6>PSAV</h6>
                                                <h6>October 2016 – September 2017</h6>
                                                <ul>
                                                    <li>Provided quick and outstanding customer service</li>
                                                    <li>Learned new audio/visual technologies to stay up to date</li>
                                                    <li>Troubleshooted problems quickly in a fast-paced environment</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <div className="education">
                                <Container>
                                <Row>
                                    <Col xs="8">
                                        <h2>Education</h2>
                                        <hr/>
                                        <div className="experienceSection">
                                            <h5 className="experienceHeader">Prime Digital Academy</h5>
                                            <h6>Graduating January 2021</h6>
                                            <ul>
                                                <li>Immersive Software Development Program</li>
                                                <li>Full-stack Software Engineering Certificate</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col xs="8">
                                        <div className="experienceSection">
                                            <h5 className="experienceHeader">Minneapolis Media Institute</h5>
                                            <h6>Graduated February 2016</h6>
                                            <ul>
                                                <li>Hands-on audio engineering/production program</li>
                                                <li>Associates of Applied Science, Audio & Recording Arts</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                </Container>
                            </div>

                            <div className="volunteer">
                                <Container>
                                <Row>
                                    <Col xs="8">
                                        <h2>Volunteer Experience</h2>
                                        <hr/>
                                        <div className="experienceSection">
                                            <h5 className="experienceHeader">Pop-Up Food Pantry</h5>
                                            <h6>May 2020 – June 2020</h6>
                                            <ul>
                                                <li>Donations Collector, Greeter, Goods distributor</li>
                                                <li>
                                                    After the death of George Floyd and the rioting in Minneapolis that
                                                    left many people's resources even more exhausted than what they already
                                                    were during the COVID-19 pandemic, this locally organized pop-up pantry
                                                    provided struggling families with basic home necessities such as canned
                                                    foods, bread, paper towels, toilet paper, and many other products.
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs="8">
                                        <div className="experienceSection">
                                            <h5 className="experienceHeader">ARC Value Village Thrift Store/Donation Center</h5>
                                            <h6>November 2015</h6>
                                            <ul>
                                                <li>Donations Collector, Store Organizer</li>
                                                <li>
                                                    Arc's Value Village Thrift Stores and Donation Centers started in 1982 as a means of
                                                    funding programs and services that benefit children and adults with developmental
                                                    disabilities and their families through The Arc Minnesota.
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                </Container>
                            </div>
                    </div>
                
                <Footer/>
            </div>
            
        )
    }
}

export default Resume;