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
import { faMagnifyingGlass, faArrowLeft, faArrowRight, faLink, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faFaceMeh, faFaceSadTear } from '@fortawesome/free-regular-svg-icons'
// data
import {data, data2, data3, data4} from './js/data'
import main from './js/main'
//img
import CustomerImg from './img/customers.png'
//youtube
import YouTube, { YouTubeProps } from 'react-youtube';


function App() {
  let [lt, ltsetting] = useState(['Command Line', 'Editor Extensions', 'Client Applications', 'Local Server'])
  let [sn, snsetting] = useState(['Git', 'Linux', 'macOs', 'Windows'])
  let [maincontents, mcsetting] = useState(data);
  let [mains, mainsetting] = useState(main);
  let [defaults,defaultsetting] = useState(data2);
  console.log(maincontents[1].subtitle)
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
                {/* <a href=""><li className="sidebar-menu-list">
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
                </li></a> */}
                {
                  lt.map(function (a, b) {
                    return (
                      <LeftTap lt={lt[b]} i={b}></LeftTap>
                    )
                  })
                }
              </ul>
            </ul>
          </nav>
        </div>
        <div id="main-content">
          <div className="main">
            <Routes>
              <Route path='/' element={<>
                <Title title={mains.title[0]} subtitle={mains.subtitle[0]} ></Title>
                <div className="contents-container">
                  <div className="contents-item">
                  <MainTitle title={defaults[0].title}></MainTitle>
                  <YouTube videoId={'MLjFjtVJqVc'} opts={{
    height: '540',
    width: '960',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }}></YouTube>
                  </div>
                  <div className="contents-item">
                  <MainTitle title={defaults[1].title}></MainTitle>
                  <img src={CustomerImg} alt="" />
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
              </>}></Route>
              <Route path='/install'>
              <Route path='command-line' element={<>
                <Title title={mains.title[1]} subtitle={mains.subtitle[1]}></Title>
                <div className="contents-container">
                  {/* <div className="contents-item">
                <MainTitle maincontents={maincontents[0].title}></MainTitle>
                <SubTitle maincontents={maincontents[0].subtitle}></SubTitle>
              </div> */}
                  <>
                    {
                      maincontents.map(function (a, b) {
                        return (
                          <ContentsItem maincontents={maincontents} i={b}></ContentsItem>
                        )
                      })
                    }
                  </>
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
              </>}>

              </Route>
              <Route path='command-line' element={<>
                <Title title={mains.title[1]} subtitle={mains.subtitle[1]}></Title>
                <div className="contents-container">
                  {/* <div className="contents-item">
                <MainTitle maincontents={maincontents[0].title}></MainTitle>
                <SubTitle maincontents={maincontents[0].subtitle}></SubTitle>
              </div> */}
                  <>
                    {
                      maincontents.map(function (a, b) {
                        return (
                          <ContentsItem maincontents={maincontents} i={b}></ContentsItem>
                        )
                      })
                    }
                  </>
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
              </>}>

              </Route>
              </Route>
            </Routes>
          </div>
          <div className="side-nav">
            <nav>
              <li className='main-side-nav-tap'><FontAwesomeIcon icon={faLink} /> Copy link</li>
              <ul className='side-nav-li'>
                <li className='side-nav-li-title'>
                  <FontAwesomeIcon icon={faBars} /> ON THIS PAGE
                </li>
                <ul className='side-nav-li-items'>
                  {/* <li className='side-nav-li-item'>
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
                  </li> */}
                  {
                    sn.map(function (a, b) {
                      return (
                        <SideNav sn={sn[b]} i={b}></SideNav>
                      )
                    })
                  }
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
function LeftTap(props: any) {
  return (
    <a href=""><li className="sidebar-menu-list">
      {props.lt}
    </li></a>
  )
}
function SideNav(props: any) {
  return (
    <li className='side-nav-li-item'>
      {props.sn}
    </li>
  )
}
//main
function Title(props: any) {
  return (
    <div className="main-title">
      <h1>
        {props.title}
      </h1>
      <p className="main-title-sub">
        {props.subtitle}
      </p>
    </div>
  )
}

function MainTitle(props: any) {
  return (
    <h2 className='content-title'>{props.title}</h2>
  )
}
function SubTitle(props: any) {
  return (
    <p className="content-subtitle">{props.subtitle}</p>
  )
}
function ContentsItem(props: any) {
  let [maincontents, mcsetting] = useState(data);
  return (
    <div className='contents-item'>
      <>
        <MainTitle title={props.maincontents[props.i].title}></MainTitle>
        {
          maincontents[props.i].subtitle.map(function (a, b) {
            return (
              <SubTitle subtitle={props.maincontents[props.i].subtitle[b]}></SubTitle>
            )
          })
        }
      </>
    </div>
  )

}
//youtube
function Youtube({videoId}) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '540',
    width: '960',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube
   videoId="{videoID}" 
   opts={opts} 
   onReady={onPlayerReady} />;
}
export default App;
