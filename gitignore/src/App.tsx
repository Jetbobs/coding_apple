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
import { data, data2, data3, data4 } from './js/data'
import main from './js/main'
import main2 from './js/main2'
import main3 from './js/main3'
import main4 from './js/main4'
//img
import CustomerImg from './img/customers.png'
//youtube
import YouTube, { YouTubeProps } from 'react-youtube';
//codeblock
import { CodeBlock, codepen, dracula, nord } from "react-code-blocks";



function App() {
  let [lt, ltsetting] = useState(['Command Line', 'Editor Extensions', 'Client Applications', 'Local Server'])
  let [sn, snsetting] = useState(['Git', 'Linux', 'macOs', 'Windows'])
  let [maincontents, mcsetting] = useState(data);
  let [maincontents2, mc2setting] = useState(data3);
  let [mains, mainsetting] = useState(main);
  let [mains2, main2setting] = useState(main2);
  let [mains3, main3setting] = useState(main3);
  let [mains4, main4setting] = useState(main4);
  let [defaults, defaultsetting] = useState(data2);
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
                    <div className="contents-item">
                    <MainTitle title={maincontents2[0].title}></MainTitle>
                    <Subtitle2 subtitle={maincontents2[0].subscript[0]}></Subtitle2>
                    <SubTitle subtitle={maincontents2[0].subtitle[0]} code2={maincontents2[0].code2[0]}></SubTitle>
                    <SubTitle subtitle={maincontents2[0].subtitle[1]} code2={maincontents2[0].code2[1]}></SubTitle>
                    </div>

                    {/*
                     */}
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
                <Route path='editor-extensions' element={<>
                  <Title title={mains.title[2]} subtitle={mains.subtitle[2]}></Title>
                  <div className="contents-container">
                    <div className="contents-item">
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains2.title[0]} title2={main2.title2[0]}></Title2>
                        </div>
                        <Subtitle2 subtitle={mains2.subtitle[0]}></Subtitle2>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'pip3 install --upgrade neovim'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                        <Subtitle2 subtitle={mains2.subtitle[1]}></Subtitle2>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'ext install gi'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                      </div>
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains2.title[1]} title2={main2.title2[1]}></Title2>
                        </div>
                        <Subtitle2 subtitle={mains2.subtitle[2]}></Subtitle2>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'pip3 install --upgrade neovim'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                      </div>
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains2.title[2]} title2={main2.title2[2]}></Title2>
                        </div>
                        <Subtitle2 subtitle={mains2.subtitle[3]}></Subtitle2>
                      </div>
                    </div>
                    {/* <div className="contents-item">
                <MainTitle maincontents={maincontents[0].title}></MainTitle>
                <SubTitle maincontents={maincontents[0].subtitle}></SubTitle>
              </div> */}
                    <>
                      {/* {
                        maincontents.map(function (a, b) {
                          return (
                            <ContentsItem maincontents={maincontents} i={b}></ContentsItem>
                          )
                        })
                      } */}
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
                </>}></Route>
                <Route path='client-application' element={<>
                  <Title title={mains.title[3]} subtitle={mains.subtitle[3]}></Title>
                  <div className="contents-container">
                    <div className="contents-item">
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains3.title[0]} title2={main3.title2[0]}></Title2>
                        </div>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'go get -u github.com/Gnouc/gogi'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                      </div>
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains3.title[1]} title2={main3.title2[1]}></Title2>
                        </div>
                        <Subtitle2 subtitle={mains3.subtitle[0]}></Subtitle2>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'npx add-gitignore'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                        <Subtitle2 subtitle={mains3.subtitle[1]}></Subtitle2>
                        <div className="code-block">
                          <MyCoolCodeBlock code={`npm i -g add-gitignore
add-gitignore macOS Emacs node # or whatever you need`} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                        <Subtitle2 subtitle={mains3.subtitle[2]}></Subtitle2>
                      </div>
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains3.title[2]} title2={main3.title2[2]}></Title2>
                        </div>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'pip install ignr'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                      </div>
                      <div className="contents-title2">
                        <div className="title-container">
                          <Title2 title={mains3.title[3]} title2={main3.title2[3]}></Title2>
                        </div>
                        <div className="code-block">
                          <MyCoolCodeBlock code={'cargo install git-ignore-generator'} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                        </div>
                      </div>
                    </div>
                    {/* <div className="contents-item">
                <MainTitle maincontents={maincontents[0].title}></MainTitle>
                <SubTitle maincontents={maincontents[0].subtitle}></SubTitle>
              </div> */}
                    <>
                      {/* {
                        maincontents.map(function (a, b) {
                          return (
                            <ContentsItem maincontents={maincontents} i={b}></ContentsItem>
                          )
                        })
                      } */}
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
                </>}></Route>
                <Route path='local-server' element={<>
                  <Title title={mains.title[4]} subtitle={mains.subtitle[4]}></Title>
                  <div className="contents-container">
                    <div className="contents-item">
                      <MainTitle title={mains4.title[0]}></MainTitle>
                    </div>
                    <div className="contents-item">
                      <MainTitle title={mains4.title[1]}></MainTitle>
                      <div className="code-block">
                        <MyCoolCodeBlock code={`$ git clone --recursive git@github.com:toptal/gitignore.io.git
$ cd gitignore.io/
$ vapor build
$ vapor run`} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                      </div>
                    </div>
                    <div className="contents-item">
                      <MainTitle title={mains4.title[2]}></MainTitle>
                      <Subtitle2 subtitle={mains4.subtitle[0]}></Subtitle2>
                      <div className="code-block">
                        <MyCoolCodeBlock code={`$ git clone --recursive git@github.com:toptal/gitignore.io.git
$ cd gitignore.io/
$ docker-compose up -d`} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
                      </div>
                      
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
//main2
function Title2(props: any) {
  return (
    <>
      <span className="title1">{props.title}</span>-
      <span className="title2">{props.title2}</span>
    </>
  )
}
function Subtitle2(props: any) {
  return (
    <>
      <p className="subtitle">{props.subtitle}</p>
    </>
  )
}

function MainTitle(props: any) {
  return (
    <h2 className='content-title'>{props.title}</h2>
  )
}
function SubTitle(props: any) {
  return (<>
    <p className="content-subtitle">{props.subtitle}</p>
    <div className="code-block">
    <MyCoolCodeBlock code={props.code2} language={"bash"} showLineNumbers={false} theme={codepen}></MyCoolCodeBlock>
  </div>
  </>
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
              <SubTitle subtitle={props.maincontents[props.i].subtitle[b]} code2={props.maincontents[props.i].code2[b]}></SubTitle>
            )
          })
        }
      </>
    </div>
  )

}
//youtube
function Youtube({ videoId }) {
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
//codeblock
function MyCoolCodeBlock({ code, language, showLineNumbers, theme }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={theme}
    />
  );
}
export default App;
