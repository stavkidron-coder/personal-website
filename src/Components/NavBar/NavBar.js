import React, {Component} from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

class NavBar extends Component {

    render(){
        return(
            <Navbar color="dark" expand="md" className="navbar" fixed="top">
                <Nav className="mr-auto" navbar>
                    <NavbarBrand>
                        SK
                    </NavbarBrand>
                    <NavItem>
                            <Link
                                to='/'
                                className="nav-link">
                                    Home
                            </Link>
                    </NavItem>
                    <NavItem>
                            <Link
                                to='/resume'
                                className="nav-link">
                                    Resume
                            </Link>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/stavkidron-coder" className="nav-link">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/stavkidron/" className="nav-link">
                            LinkedIn
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;