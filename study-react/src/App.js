

import './App.scss';
import { useState } from 'react';

function App() {

  let [post, postSet] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [thumb, thumbSet] = useState([0,0,0]);
  let [modal, modalSet] = useState(false);
  let [count, countSet] = useState(0);
  let [title, titleSet] = useState('');

  function titleChange() {
    let postCopy = [...post];
    postCopy[0] = '여자 코트 추천';
    postSet(postCopy);
  }

  function modalPop() {
    if ((count % 2) == 0) {
      modalSet(true);
      countSet(count += 1);
    } else if ((count % 2) == 1) {
      modalSet(false);
      countSet(count += 1);
    }
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {
        post.map(function (e, i) {
          return (
            <div className="list">
              <h4 onClick={function(){
                modalPop();
                titleSet(post[i]);
              }}>{post[i]}</h4>
              <p>2월 17일 발행 <span onClick={function () {
                let copy = [...thumb];
                copy[i] = copy[i]+1;
                thumbSet(copy);
              }}>❤</span> {thumb[i]}</p>
              <button onClick={titleChange}>버튼</button>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal post={post} titleChange={titleChange} title={title}></Modal> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titleChange}>글수정</button>
    </div>
  )
}

export default App;
