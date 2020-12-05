import React, {Component} from 'react';
import './HomeJumbotron.css'
import {Container, Jumbotron} from 'reactstrap';

class HomeJumboTron extends Component {
    render(){
        return(
            <Jumbotron className="homeJumbo">
                <Container>
                    <h1>STAV KIDRON</h1>
                    <h4>Creative solutions for modern web development</h4>
                </Container>   
            </Jumbotron>
        )
    }
}

export default HomeJumboTron;