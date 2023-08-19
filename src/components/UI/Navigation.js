import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './Navigation.module.css';
import weight from '../../assets/images/logo.png';
import { FaAngleDown } from 'react-icons/fa';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState('');

  const showDropdown = (e) => {
    setIndex(e.target.id);
    setShow(true);
  };
  const hideDropdown = (e) => {
    setIndex('');
    setShow(false);
  };

  const aboutDropdown = (
    <span id="nav-about">
      About <FaAngleDown />
    </span>
  );

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/" className={`m-0 h1 ${classes.brand}`}>
          <img src={weight} alt="weight" className={classes.logo} />
          GYMBUDDY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={classes['nav-margin']} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={classes['nav-margin']} href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className={classes['nav-margin']} href="/schedule">
              Schedule
            </Nav.Link>
            <Nav.Link className={classes['nav-margin']} href="/pricing">
              Pricing
            </Nav.Link>
            <NavDropdown
              className={classes['nav-margin']}
              title={aboutDropdown}
              id="nav-about"
              show={index === 'nav-about' && show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              onClick={showDropdown}
            >
              <NavDropdown.Item href="/#about-us">About us</NavDropdown.Item>
              <NavDropdown.Item href="/#classes">Our Classes</NavDropdown.Item>
              <NavDropdown.Item href="/#testimonial">
                Testimonial
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/#contact-us">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
