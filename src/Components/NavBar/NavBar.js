import React, {Component} from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo3.png';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithub}/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>

class NavBar extends Component {

    render(){
        return(
            <Navbar color="light" expand="md" className="navbar" fixed="top">
                <Nav className="mr-auto" navbar>
                    <NavbarBrand className="nav-link">
                        <Link to='/'>
                            <img src={Logo} className="logo" alt="logo"/>
                        </Link>
                    </NavbarBrand>
                    
                    <NavItem className="navLeft">
                        <Link
                            to='/'
                            className="nav-link">
                                Home
                        </Link>
                    </NavItem>

                    <NavItem className="navLeft">
                        <Link
                            to='/resume'
                            className="nav-link">
                                Resume
                        </Link>
                    </NavItem>
                </Nav>

                <NavLink href="https://github.com/stavkidron-coder" className="nav-link">
                    GitHub {githubIcon}
                </NavLink>
                <NavLink href="https://www.linkedin.com/in/stavkidron/" className="nav-link">
                    LinkedIn {linkedInIcon}
                </NavLink>

            </Navbar>
        )
    }
}

export default NavBar;