import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
//img
import bg from './img/bg.png';
//data
import data from './js/data';
//router
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
//pages
import Detail from './pages/detail';
import About from './pages/about';
import Event from './pages/event';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="#home" className='nav-link' to='/'>홈</Link>
          <Link href="#features" className='nav-link' to='/detail'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg">

      </div>
      <Routes>
        <Route path='/' element={
                <div className="container">
                <div className="row">
                  {
                    shoes.map((e, i) => {
                      return (
                        <Card shoes={shoes} i={i}></Card>
                      )
                    })
                  }
                </div>
              </div>
        }></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
        </Route>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
      </Routes>
    </div>
  );
}

//Component
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" alt="" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  )
}


export default App;
