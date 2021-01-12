import React, {Component} from 'react';
import './HomeJumbotron.css'
import {Col, Container, Jumbotron, Row} from 'reactstrap';

class HomeJumboTron extends Component {
    render(){
        return(
            <Jumbotron className="homeJumbo">
                <Container>
                    <Row>
                        <Col xs="12" md="8" className="jumboTextPanel">
                            <h3>My name is</h3>
                            <h1>STAV KIDRON</h1>
                            
                            <hr className="jumboHr"/>
                            
                            <div className="jumboTextBox">
                                <h3>I'm a Software Developer</h3>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>   
            </Jumbotron>
        )
    }
}

export default HomeJumboTron;