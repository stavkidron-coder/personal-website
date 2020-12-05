import React, {Component} from 'react';
import { Container } from 'reactstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

class Resume extends Component {
    render(){
        return(
            <div>
                <NavBar/>

                <Container>
                    <h1>Resume</h1>
                </Container>

                <Footer/>
            </div>
            
        )
    }
}

export default Resume;