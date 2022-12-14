import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState, createContext, useEffect } from 'react';
import shoesData from './js/data';
import { Route, Routes, Link , useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail'
import axios from 'axios'
import cart from './routes/Cart'
import Cart from './routes/Cart';
import { useQuery } from 'react-query';
// import imgBg from './img/bg.png';
import {useMediaQuery} from 'react-responsive'

function App() {

  let [shoes,setShoes] = useState(shoesData);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);

  let result = useQuery('realData', ()=>{
   return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data;
    })
  })

  //responsive
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });


  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  },[]) 



  return (
    <div className="App">
      {isDesktopOrLaptop &&       <Navbar bg="blue" variant="dark" className='navbar'>
        <Container className='container'>
          <Navbar.Brand href="#home" className='navbar-brand'>Natti's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>

            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>
          </Nav>
          <Nav className='ms-auto'>{result.isLoading ? '로딩중' : result.data.name }</Nav>
        </Container>
      </Navbar>
      }     
              {isTabletOrMobile &&       <Routes>
        <Route path='/' element={<div>      <div className="main-bg"></div>
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
      </div></div>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}>
        <Route path='*' element={<div>없는 페이지요</div>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>}

      


      <button style={{display:'none'}} onClick={()=>{ 
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
