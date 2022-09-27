import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'



function Detail(props) {

  let [alert, alertSet] = useState(true);
  let { id } = useParams();
  let [textInput, setTextInput] = useState('');
  let [tab, setTab] = useState(1);
  let [fade, setFade] = useState();


  let findId = props.shoes.find(function (x) {
    return x.id == id; //여기서 id는 parameter로 받아온 id이다.
  })

  useEffect(() => { // mount, update시 코드 실행해주는 useEffect
    setTimeout(() => {
      setFade('end')
    }, 100);
    return()=>{
      setFade('')
    }
    },[]
  )


  return (
    <div className={`container start ${fade}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(findId.id) + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <input onChange={function (e) {
            setTextInput(e.target.value)
          }} />
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {
            setTab(0);
          }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {
            setTab(1)
          }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {
            setTab(2)
          }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
          <TabContent tab={tab}/> 

    </div>
  )
}

function TabContent({tab}){

  let [fade, setFade] = useState();

  useEffect(()=>{
   let timer= setTimeout(()=>{
      setFade('end');
    }, 100)
    return ()=>{
      clearTimeout(timer);
      setFade('');
    }
  }, [tab])

  // if( tab == 0){
  //  return <div>내용0</div>
  // } else if (tab == 1){
  //   return <div>내용1</div>
  // } else if(tab == 2){
  //   return <div>내용2</div>
  // }
 return (<div className={`start ${fade}`}>
  {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
 </div>)
};

export default Detail;