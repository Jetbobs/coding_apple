let 회원정보 = {
    name : 'kim',
    age : 30,
    plusOne (x:number){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }

  type Mytype = { 
    name :string,
    age : number,
    plutsOne : (x:number, y:number) => number,
    changeName : () =>void
  }

  type Cutting = (x:string) => string;
  type Remove = (x:string) => number;

  function cutZero(x:string):string{
    return x.replace('0','')
  }

  let removeDash :Remove = function(x:string):number{
    return parseFloat(x.replace('0',''));
  }


  function Making (x:string,func1:Cutting,func2:Remove){
    let result = func1(x);
    let result2 = func2(result);
    return console.log(result2)
  }

function Callme(x? :string):void{
    if(typeof x == "string"){
        console.log('안녕하세요' + x)
    } else if(typeof x == 'undefined'){
        console.log('이름이 없습니다.')
    }

}

Callme();


