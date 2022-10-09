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
import { faMagnifyingGlass, faArrowLeft, faArrowRight, faLink, faBars  } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faFaceMeh, faFaceSadTear} from '@fortawesome/free-regular-svg-icons'


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
        <div id="sidebar">
          <nav className="sidebar-menu-container">
            <ul className="sidebar-menu">
              <a href=""><li className="sidebar-menu-list">
                gitignore.io
              </li></a>
            </ul>
            <ul className="sidebar-menu menu-margin" >
              <li className="sidebar-title">
                INSTALL
              </li>
              <ul className="sidebar-menu-list-container">
                <a href=""><li className="sidebar-menu-list">
                  Command Line
                </li></a>
                <a href=""><li className="sidebar-menu-list">
                  Editor Extensions
                </li></a>
                <a href=""><li className="sidebar-menu-list">
                  Client Applications
                </li></a>
                <a href=""><li className="sidebar-menu-list">
                  Local Server
                </li></a>
              </ul>
            </ul>
          </nav>
        </div>
        <div id="main-content">
          <div className="main">
            <div className="main-title">
              <h1>
                Command Line
              </h1>
              <p className="main-title-sub">
                To run gitignore.io from your command line you need an active internet connection and an environment function. You need to add a function to your environment that lets you access the gitignore.io API.
              </p>
            </div>
            <div className="contents-container">
              <div className="contents-item">
                <h2 className='content-title'>Git</h2>
                <p className="content-subtitle">Bash</p>
              </div>
              <div className="prev-next-btn-container">
                <div className="prev-next-btn  ta-r mar-r-10">
                  <FontAwesomeIcon className='arrow-icon' icon={faArrowLeft} />
                  <div className="btn-text-container">
                    <div className="btn-title">
                      Previous
                    </div>
                    <div className="btn-dir">
                      <span>gitignore.io</span>
                    </div>
                  </div>
                </div>
                <div className="prev-next-btn ta-l mar-l-10">
                  <div className="btn-text-container">
                    <div className="btn-title">
                      <p>Next</p>
                    </div>
                    <div className="btn-dir">
                      <span>gitignore.io</span>
                    </div>
                  </div>
                  <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                </div>
              </div>
              <div className="footer">
                <p className="modified-days">
                  Last modified 1yr ago
                </p>
                <div className="helpful-box">
                  <p className="helpful-txt">WAS THIS PAGE HELPFUL?</p>
                  <div className="helpful-emoticons">
                  <FontAwesomeIcon className='face-icon' icon={faFaceSmile} />
                  <FontAwesomeIcon className='face-icon' icon={faFaceMeh} />
                  <FontAwesomeIcon className='face-icon' icon={faFaceSadTear} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav">
            <nav>
              <li className='main-side-nav-tap'><FontAwesomeIcon icon={faLink} /> Copy link</li>
              <ul className='side-nav-li'>
                <li className='side-nav-li-title'>
                <FontAwesomeIcon icon={faBars} /> ON THIS PAGE
                </li>
                <ul className='side-nav-li-items'>
                  <li className='side-nav-li-item'>
                    Git
                  </li>
                  <li className='side-nav-li-item'>
                    Linux
                  </li>
                  <li className='side-nav-li-item'>
                    macOs
                  </li>
                  <li className='side-nav-li-item'>
                    Windows
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
