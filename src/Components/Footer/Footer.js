import React, {Component} from 'react';
import Logo from '../../Images/logo-comp.png';
import {Navbar, Nav, NavbarBrand, NavbarText} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
            
            <Navbar className="footer">
                <Nav>
                    <NavbarBrand className="footerBrand">
                        <img src={Logo} className="logo" alt="logo"/>
                    </NavbarBrand>    
                </Nav>
                <NavbarText>
                    <center>This webpage was built with React and Bootstrap</center>
                    <p>*optimized for desktop view</p>
                </NavbarText>  
            </Navbar>
        )
    }
}

export default Footer;