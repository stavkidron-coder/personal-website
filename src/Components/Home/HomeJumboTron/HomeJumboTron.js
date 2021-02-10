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
                            <h1>STAV KIDRON</h1>
                            
                            <hr className="jumboHr"/>
                            
                            <Col xs="12">
                                <div className="jumboTextBox">
                                    <h4>&lt;Software_developer/&gt;</h4>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    
                </Container>   
            </Jumbotron>
        )
    }
}

export default HomeJumboTron;