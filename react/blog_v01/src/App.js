import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');
  function thumbsUp(){

  }
  function titleChange(){
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }
  function titleSort(){
    let copy = [...글제목];
    copy.sort(function(a,b){
      if(a>b){
        return 1;
      } else if(a<b){
        return -1;
      }
    })
    글제목변경(copy);
  }

  return (
    <div className="App" id='app'>
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {
        글제목.map(function(e,i){
          return(
            <div className="list" key={i}>
            <h4>{글제목[i]} <span onClick={()=>{
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy);
            }}>👍</span> {따봉[i]} </h4>
            <p  onClick={function(){
              setModal(!modal);
              setTitle(i);
            }}>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}>삭제</button>
          </div>
          )

        })
      } 
      {
        modal == true ? <Modal 글제목={글제목} titleChange={titleChange} title={title}></Modal> : null
        
      }
      <input type="text" onChange={(e)=>{ 입력값변경(e.target.value) }} />
      <button onClick={()=>{
        let copy = [...글제목];
        copy.push(입력값);
        글제목변경(copy);
        let copy1 = [...따봉];
        copy1.push(0)
        따봉변경(copy1);
      }}>게시물 생성</button>
    </div>
  );
}


function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titleChange}>글수정</button>
    </div>
  )
}
export default App;
