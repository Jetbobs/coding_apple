import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Detail(props) {

  let [alert, alertSet] = useState(true);
  let { id } = useParams();
  let [textInput, setTextInput] = useState(''); 
  let findId = props.shoes.find(function (x) {
    return x.id == id; //여기서 id는 parameter로 받아온 id이다.
  })

  useEffect(() => { // mount, update시 코드 실행해주는 useEffect
    if (isNaN(textInput) == true){
      window.alert('안됨')
    }
  },[textInput])


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(findId.id) + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <input onChange={function(e){
      setTextInput(e.target.value)
    }}/>
        </div>
      </div>
    </div>
  )
}

export default Detail;