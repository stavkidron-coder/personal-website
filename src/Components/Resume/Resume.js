import React, {Component} from 'react';
import { Col, Container, Jumbotron, ListGroup, ListGroupItem, Row } from 'reactstrap';
import '../Resume/Resume.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import PortraitSquare from '../../Images/portrait-square-comp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image'

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
                            <Col xs="12" lg="6">
                                <h1 className="resumeTitle">What I'm All About</h1>
                                <hr className="resumeJumboHr"/>
                                
                                <h5>
                                    <a
                                        href="mailto:kidronstav@gmail.com"
                                        className="resumeJumboIcon">
                                            {emailIcon} kidronstav@gmail.com
                                    </a>
                                </h5>
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
                            <Col xs="12" lg="6">
                                <Image src={PortraitSquare} alt="portrait" className="resumePortrait" fluid/>
                            </Col>
                        </Row>
                        
                    </Container>
                </Jumbotron>

                <div className="resumeBody">
                    
{/* Bio */}
                        <div className="bio">
                            <Container>       
                                <Row>
                                    <Col xs="12" lg="8">
                                        <h2>Objective</h2>
                                        <hr/>
                                        <p>
                                            With a keen eye for design and a passion for growing and learning
                                            in a collaborative and creative environment, I am ready to explore
                                            exciting opportunities in software development. I bring experience in
                                            interaction with customers, helping to transform their vision to a
                                            finished product while problem-solving in real-time.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

{/* Skills */}
                        <div className="resumeSkills">
                            <Container>
                                {/* <Row> */}
                                    <Col xs="12">
                                        <div>
                                            <h2>Skills</h2>
                                        </div>
                                        
                                        <hr/>
                                        <ListGroup>
                                            <ListGroupItem className="skillsList">
                                                <h5>Software languages and frameworks:</h5>
                                                <ul>
                                                    <li>React</li>
                                                    <li>React Native</li>
                                                    <li>Redux</li>
                                                    <li>Wordpress</li>
                                                    <li>JavaScript</li>
                                                    <li>jQuery</li>
                                                    <li>PHP</li>
                                                    <li>PostgreSQL</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>Node</li>
                                                    <li>Express</li>
                                                    <li>Passport</li>
                                                    <li>Heroku</li>
                                                    <li>Material-Ui</li>
                                                    <li>Bootstrap</li>
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
                                    {/* </Row> */}
                                </Container>
                            </div>

{/* Experience */}
                            <div className="experience">
                                <Container> 
                                    <Row>
                                        <Col xs="12">
                                            <h2>Experience</h2>
                                            <hr/>
                                        </Col>   
                                    </Row>
                                    
                                    <Row>
                                        <Col xs="12">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Front-End Developer</h5>
                                                <h6>Locavori (Group Project)</h6>
                                                <h6>December 2020 - January 2021</h6>
                                                <ul>
                                                    <li>
                                                        Worked remotely with a team of five for a local client to
                                                        create a full-stack web application that allows users to search
                                                        for local foods/goods artisans in a 2-week sprint
                                                    </li>
                                                    <li>Led front-end development and design to curate a pleasant user
                                                        experience and collaborated with UX/UI team to implement designs
                                                        into the project</li>
                                                    <li>
                                                        <strong>Technologies used:</strong> React.js, Redux, Node.js, PostgreSQL, Bootstrap, Google Maps APIs
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Full-Stack Developer</h5>
                                                <h6>SONGWRITER (Personal Project)</h6>
                                                <h6>November 2020</h6>
                                                <ul>
                                                    <li>
                                                        Developed a full-stack web application that allows songwriters
                                                        to store, edit, and view their song information in an easy to
                                                        understand user interface
                                                    </li>
                                                    <li>Independently came up with solutions to complex problems</li>
                                                    <li>
                                                        <strong>Technologies used:</strong> React.js, Redux, Node.js, Express, PostgreSQL, Bootstrap
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
                                            <div className="experienceSection">
                                                <h5 className="experienceHeader">Full-Stack Engineering Student</h5>
                                                <h6>Prime Digital Academy</h6>
                                                <h6>August 2020 - January 2021</h6>
                                                <ul>
                                                    <li>
                                                        Accelerated immersion program focusing on software development and
                                                        soft skills training for real-world experience
                                                    </li>
                                                    <li>Worked remotely as a team member to solve complex problems</li>
                                                    <li>
                                                        Learned new technologies in a fast-paced environment while employing
                                                        efficient time management skills coordinating with teammates, studies,
                                                        and a part-time job.
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="12">
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
                                        <Col xs="12">
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
                                        <Col xs="12">
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
                                        <Col xs="12">
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
                                        <Col xs="12">
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

{/* Education */}
                            <div className="education">
                                <Container>
                                <Row>
                                    <Col xs="12">
                                        <h2>Education</h2>
                                        <hr/>
                                        <div className="experienceSection">
                                            <h5 className="experienceHeader">Prime Digital Academy</h5>
                                            <h6>Graduated January 2021</h6>
                                            <ul>
                                                <li>Immersive Software Development Program</li>
                                                <li>Full-stack Software Engineering Certificate</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col xs="12">
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

{/* Volunteer */}
                            <div className="volunteer">
                                <Container>
                                <Row>
                                    <Col xs="12">
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
                                    <Col xs="12">
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