import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState, createContext } from 'react';
import shoesData from './js/data';
import { Route, Routes, Link , useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail'
import axios from 'axios'
// import imgBg from './img/bg.png';

function App() {

  let [shoes,setShoes] = useState(shoesData);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);




  return (
    <div className="App">
      <Navbar bg="blue" variant="dark" className='navbar'>
        <Container className='container'>
          <Navbar.Brand href="#home" className='navbar-brand'>Natti's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>

            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>메인페이지임</div>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}>
        <Route path='*' element={<div>없는 페이지요</div>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path='*' element={<div>없는 페이지요</div>}></Route>
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
      <button onClick={()=>{ 
        console.log(count)
        setCount(count+1);
        if(count == 1){
        axios.get('https://codingapple1.github.io/shop/data2.json').then((data)=>{
          let copy = [...shoes,...data.data];
          setShoes(copy);
          console.log(count)
        })
        .catch(()=>{
          console.log('실패함 ㅅㅂ')
        })} else if( count == 2){
          axios.get('https://codingapple1.github.io/shop/data3.json').then((data)=>{
            let copy = [...shoes,...data.data];
            setShoes(copy);
            console.log(count)
          })
          .catch(()=>{
            console.log('실패함 ㅅㅂ')
          })
        } else if(count >= 3) {
          window.alert('더이상 상품 없어요!')
          console.log(count)
        }
       }}>버튼</button>
      {/* <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}></Route> */}
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
function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
