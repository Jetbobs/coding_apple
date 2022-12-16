import {useParams} from 'react-router-dom';
import styled from 'styled-components';


function Detail(props){

    let {id} = useParams();
    let find_i = props.shoes.find(function(x){
        return x.id == id;
    })

    return(
        <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={"https://codingapple1.github.io/shop/shoes"+(find_i.id+1)+".jpg"} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{find_i.title}</h4>
      <p>{find_i.content}</p>
      <p>{find_i.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    )
}

export default Detail;