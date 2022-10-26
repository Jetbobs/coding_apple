

import './App.scss';
import { useState } from 'react';

function App() {

  let [post,postSet] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [thumb, thumbSet] = useState(0);

  function titleChange(){
    let postCopy = [...post];
     postCopy[0] = '여자 코트 추천';
     postSet(postCopy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>{post[0]}</h4>
        <p>2월 17일 발행 <span onClick={function(){
          thumbSet(thumb + 1)
        }}>❤</span> {thumb}</p>
        <button onClick={titleChange}>버튼</button>
      </div>
        <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
