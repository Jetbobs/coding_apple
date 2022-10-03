import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState  : {name : 'kim', age:20},
    reducers:{
      changeName(state){ // 여기서 state는 기존 state 즉 kim이다
          return state.name = 'park'
      },
      increase(state, a){
          state.age += a.payload;
      }
    }
  })

  export let { changeName, increase} = user.actions; // 디스트력처링 문법, 오른쪽 자료를 변수로 빼는 문법

  export default user;
  