import React, {Component} from 'react';
import './HomeJumbotron.css'
import {Container, Jumbotron} from 'reactstrap';

class HomeJumboTron extends Component {
    render(){
        return(
            <Jumbotron className="homeJumbo">
                <Container>
                    <div className="jumboTextPanel">
                        <h1>STAV KIDRON</h1>
                        <hr className="jumboHr"/>
                        <h4>Software Developer/Creative Thinker</h4>
                    </div>
                </Container>   
            </Jumbotron>
        )
    }
}

export default HomeJumboTron;