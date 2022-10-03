import { Table } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux'
import {changeName,increase} from '../store/useSlice'
import {addCount} from '../store.js'

function Cart() {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    return (
        <div>
                    {state.user.name}{state.user.age}의 장바구니
                    <button onClick={()=>{
                        dispatch(increase(10));
                    }}>+</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cartProducts.map((a,i)=>
                                <tr key={i}>
                                <td>{state.cartProducts[i].id}</td>
                                <td>{state.cartProducts[i].name}</td>
                                <td>{state.cartProducts[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(i));
                                    }}>+</button>
                                </td>
                            </tr>
                            
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;