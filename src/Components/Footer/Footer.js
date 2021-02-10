import React, {Component} from 'react';
import Logo from '../../Images/logo-comp.png';
import {Navbar, Nav, NavbarBrand, NavbarText, Row, Col} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
            
            <Navbar className="footer">
                        <Nav>
                            <NavbarBrand className="footerBrand">
                                <img src={Logo} className="logo" alt="logo"/>
                            </NavbarBrand>    
                        </Nav>
                        <NavbarText className="disclaimer">
                            * Site built with React and Bootstrap
                        </NavbarText>
            </Navbar>
        )
    }
}

export default Footer;