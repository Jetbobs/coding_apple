

import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [post1, p1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, l1] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputs, setInputs] = useState('');

  [1, 2, 3].map(function () {

  })

  function likes() {
    l1(like + 1);
  }
  function likesArr() {


  }
  function chP() {
    let pArray = [...post1];
    pArray[0] = '여자코트 추천';
    p1(pArray);
  }
  function ganada(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  }
  function sortArray() {
    let sArray = [...post1];
    sArray.sort(ganada)
    p1(sArray);
  }

  let count = 1;
  function modalPop() {
    count++;
    if (count % 2 == 0) {
      setModal(true);
    } else if (count % 2 == 1) {
      setModal(false);
    }
  }



  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>{post1[0]} <span style={{cursor:'pointer'}} onClick={likes}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{post1[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{post1[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        post1.map(function (a, b) {
          return (
            <div className="list" key={b}>
              <h4 onClick={() => { setModal(!modal); setTitle(b) }}>{post1[b]} <span style={{ cursor: 'pointer' }} onClick={(e) => {
                e.stopPropagation();
                let lArr = [...like];
                lArr[b] = lArr[b] + 1;
                l1(lArr);
              }}>👍</span> {like[b]} </h4>
              <p>2월 17일 발행</p> <button onClick={() => {
                let newPost2 = [...post1]; //현재 게시물을 newPost2에 할당
                newPost2.splice(b, 1);
                p1(newPost2);
              }}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => { setInputs(e.target.value); console.log(e.target.value) }} type="text"></input>
      <button onClick={() => {
        let newPost = [...post1];
        newPost.push(inputs);
        p1(newPost);
      }}>글발행</button>
      {
        modal == true ? <Modal post1={post1} revise={chP} title={title} /> : null
      }
    </div>
  );
}

//component
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.post1[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.revise}>글수정</button>
    </div>
  )
};

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.name}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}>버튼</button>
      </div>

    )
  }
}

export default App;
