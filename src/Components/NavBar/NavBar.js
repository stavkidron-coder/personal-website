import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

class NavBar extends Component {

    render(){
        return(
            <Navbar>
                <Nav>
                    <NavbarBrand>
                        SK
                    </NavbarBrand>
                    <NavItem>
                        <NavLink>
                            <Link to='/'>Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to='/resume'>Resume</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Navbar Item!
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;