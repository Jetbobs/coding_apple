import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/useSlice'


let stock = createSlice({
    name : 'stock',
    initialState: [10,11,12]
})

let cartProducts = createSlice({
    name: 'cartProducts',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] ,
      reducers :{
        addCount(state,action){
           state[action.payload].count++;
        }
      }
})
export let {addCount} = cartProducts.actions;





export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartProducts : cartProducts.reducer
  }
}) 