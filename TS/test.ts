import {Car2, Bike} from './index'

function 함수6(x :Car2 | Bike){
    if(x.wheel === '4개'){
         console.log(x)
    }
}

let car6 = {wheel: '4개', color: '흰색'}

export type objfunc = (a? :object) => void

function 함수<Type extends string | string[]>(x:Type){
    console.log(x.length)
}

interface Animal {
    name : string; 
    age : number
}

let data = '{"name" : "dog", "age" : 1 }'
data = JSON.parse(data);

function Animals<Type extends Animal>(data:string):Type{
    return data = JSON.parse(data);
}

class Person <Type> {
    name;
    constructor(a:Type){
      this.name = a;
    }
  }
  let a = new Person<string>('어쩌구');
  a.name //any 타입이 되었넹 


  let arr:[string,number, boolean] = ['동서녹차',4000,true]

  let arr2 :[string,number, ...boolean[]] = ['동서녹차',4000, true, false]
  type sn = string | number
  function Tuples(x:[string, boolean,...sn[]]){

  }

  function filters(x:(string|number)[]){

    let result: [string[],number[]] = [[],[]]
    x.forEach((a)=>{
        if(typeof a == 'string'){
            result[0].push(a)
        } else if(typeof a == 'number'){
            result[1].push(a)
        }
    })
    return result;
  }