import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import shoesData from './js/data';
import { Route, Routes, Link } from 'react-router-dom'
// import imgBg from './img/bg.png';

function App() {

  let [shoes] = useState(shoesData);
  console.log(shoes.length)
  return (
    <div className="App">
      <Navbar bg="blue" variant="dark" className='navbar'>
        <Container className='container'>
          <Navbar.Brand href="#home" className='navbar-brand'>Natti's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>메인페이지임</div>}></Route>
        <Route path='/detail' element={<div>상세페이지임</div>}></Route>
        <Route path='/about' element={<div>어바웃페이지임</div>}></Route>
      </Routes>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {/* components만 사용했을 때 */}
          {/* <Products shoes={shoes} i={0}/>
          <Products shoes={shoes} i={1}/>
          <Products shoes={shoes} i={2}/> */}
          {
            //map 과 components를 사용했을 때
            shoes.map(function (a, b) {
              return (
                <Products shoes={shoes[b]} i={b} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
// components
function Products(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width={'80%'} alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div>
  )
}

export default App;
