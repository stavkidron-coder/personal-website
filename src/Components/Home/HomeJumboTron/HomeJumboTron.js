import React, {Component} from 'react';
import './HomeJumbotron.css'
import {Container, Jumbotron} from 'reactstrap';

class HomeJumboTron extends Component {
    render(){
        return(
            <Jumbotron className="homeJumbo">
                <Container>
                    <div className="jumboTextPanel">
                        <h3>My name is</h3>
                        <h1>STAV KIDRON</h1>
                        <hr className="jumboHr"/>
                        <div className="jumboTextBox">
                            <h3>I'm a Software Developer</h3>
                        </div>
                        
                    </div>
                </Container>   
            </Jumbotron>
        )
    }
}

export default HomeJumboTron;