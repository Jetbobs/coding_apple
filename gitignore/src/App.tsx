import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext, useEffect } from 'react';
// react-router-dom
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
// react-bootstrap
import { Nav, Button, Container, Form, Navbar, NavDropdown } from 'react-bootstrap'
import TitleLogo from './img/gitignore_logo.png'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <div id="header">
        <Navbar expand="lg">
          <Container fluid className='header-continer'>
            <Navbar.Brand href="#" className='logo-container'>
              <img src={TitleLogo} alt="" className='header-logo' />
              {/* <div className="vertical-line"></div> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='main-link-container'>
              <Nav
                className="me-auto my-2 my-lg-0 title-container"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='nav-title'>gitignore.io</Nav.Link>
                <Nav.Link href="#action2" className='nav-title'>Templates</Nav.Link>
                <Nav.Link href="#action2" className='nav-title'>Source</Nav.Link>
                <Nav.Link href="#action2" className='nav-title'>Design</Nav.Link>
                {/* <div className="vertical-line"></div> */}
              </Nav>
            </Navbar.Collapse>
            <div className="search-container">

              <Button className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search...
              </Button>
            </div>
          </Container>
        </Navbar>
      </div>
      <div id="content-container">
        <div id="sidebar"></div>
        <div id="main-content"></div>
      </div>
    </div>
  );
}

export default App;
