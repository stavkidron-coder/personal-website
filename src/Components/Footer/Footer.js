import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
            <Navbar>
                <Nav>
                    <NavbarBrand>
                        SK
                    </NavbarBrand>
                    <NavItem>
                        <NavLink>
                            Navbar Item!
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Navbar Item!
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

export default Footer;