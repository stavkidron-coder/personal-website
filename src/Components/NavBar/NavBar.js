import React, {useState} from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo-comp.png';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithub}/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);


    const [currentPage, setCurrentPage] = useState(false);
    const togglePage = () => setCurrentPage(!currentPage);
  
    return (
      <div>
        <Navbar color="light" light expand="md" className="navbar" fixed="top">

            <NavbarBrand className="nav-link">
                <Link to='/'>
                    <img src={Logo} className="logo" alt="logo"/>
                </Link>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className="navLeft">
                        <Link to='/' className="nav-link" onClick={togglePage}>
                            Home
                        </Link>
                    </NavItem>

                    <NavItem className="navLeft">
                        <Link to='/resume' className="nav-link">
                            Resume
                        </Link>
                    </NavItem>
                </Nav>
                
                <NavLink href="https://github.com/stavkidron-coder" className="nav-link">
                    GitHub {githubIcon}
                </NavLink>

                <NavLink href="https://www.linkedin.com/in/stavkidron/" className="nav-link nav-right">
                    LinkedIn {linkedInIcon}
                </NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;