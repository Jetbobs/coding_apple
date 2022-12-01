import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])
  let [따봉, 따봉변경] = useState(0);

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
      <div className="list">
        <h4 onClick={titleSort}>{글제목[0]} <span onClick={thumbsUp}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]} <span>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
