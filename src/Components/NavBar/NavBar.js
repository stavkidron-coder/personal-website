import React, { useState } from "react";
import "../NavBar/NavBar.css";
import Logo from "../../Images/logo-comp.png";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [currentPage, setCurrentPage] = useState(false);
  const togglePage = () => setCurrentPage(!currentPage);

  return (
    <Navbar color="light" light expand="md" className="navbar" fixed="top">
      <NavbarBrand className="nav-link" href="/">
        <img
          src={Logo}
          className="logo"
          alt="logo"
          width="61.31px"
          height="50px"
        />
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="navLeft">
            <NavLink href="/" className="nav-link" onClick={togglePage}>
              Home
            </NavLink>
          </NavItem>

          <NavItem className="navLeft">
            <NavLink href="#/resume" className="nav-link">
              Resume
            </NavLink>
          </NavItem>
        </Nav>

        <NavLink
          href="https://github.com/stavkidron-coder"
          className="nav-link"
          target="_blank"
        >
          GitHub {githubIcon}
        </NavLink>

        <NavLink
          href="https://www.linkedin.com/in/stavkidron/"
          className="nav-link nav-right"
          target="_blank"
        >
          LinkedIn {linkedInIcon}
        </NavLink>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
