export {}

let myName :string = '이름';
let myAge :number = 29;
let homTown :string ='대전';

let singer : { name: string, song: string};
singer = {name: '코요테', song: '우리들의꿈'};

let project : {
    member :string[],
    days :number,
    started :boolean
}

let 회원들 : (number | string) [] = [1,'2',3];
let 오브젝트 :{ a : (string | number)}

let user :string = 'kim';
let age : undefined | number = undefined;
let married :boolean = false;
let 철수 :(string | undefined | number | boolean)[] = [user, age, married];

let 학교 : {
    score :(number|boolean)[],
    teacher :string,
    friend :string | string[]
}

function naming(x ?:string){
    if(x){
        console.log('안녕하세요'+ x)
    } else {
        console.log('이름이 없습니다.')
    }
}

function counting(x :number | string) :number{
    return x.toString().length;
}

function congrat(x:number,y:boolean,z:string) :string | void{
    let total = 0;
    if(y){
        total + 500
    } else {
        total + 0
    }
    if(z == "상"){
        total + 100
    } else {
        total + 0
    }
    total + x;

    if(total >=600){
       return console.log('결혼가능')
    } else {
       return console.log("")
    }
}

function 내함수(x: number | string){ // narrowing
    let array :number[] = [];
    if (typeof x === 'number'){
        array[0] = x;
    }
}

function 내함수2(x: number | string){ // assertion
    let array :number[] = [];
        array[0] = x as number;
    
}

type 소녀 = {
    name:string
}

type 소년 = {
    name : string
}

type 인간 = 소녀 & 소년;

type square = {
    color?: string,
    size:number,
    readonly position: number[]
}

type human = {
    name : string,
    phone : number,
    email ? : string | number
}

type agess = {
    name: string,
    phone: number,
    email ?: string,
    over18 : boolean
}

type 묵찌빠= '가위' | '바위' | '보';

function 묵찌빠하기 (a :묵찌빠):('가위'|'바위'|'보')[]{
    return ['가위','보']
}

묵찌빠하기('가위')

let 자료 = {
    name : 'kim'
} as const

function myFunction(a :'kim'){

}

myFunction(자료.name)

type 함수타입 = (a:string) => number;

let 회원정보 = {
    name : 'kim',
    plusOne(a:number):number{
        return a+1
    },
    changeName : ()=> {}
}
type member = {
    name : string,
    age : number,
    plusOne(x:number):number,
    changeName : () => void
}

type Zero = (x:string) => string

let cutZero :Zero = function (x){
    let result = x.replace('0','');
    return result
}

type Dash = (x:string) => number;
function removeDash(x:string):number{
   let result =  x.replace('-','')
   return parseFloat(result)
}

function callback(x:string, func1:Zero, func2: Dash){
   let result = func1(x);
   let result2 = func2(result);
   console.log(result2);

}

let 제목 = document.querySelector('#title') as Element;
if(제목 !== null){
제목.innerHTML = '반가워요';
}

if(제목 instanceof Element){
    제목.innerHTML = '반가워요';
}

if(제목?.innerHTML){
    제목.innerHTML = '반가워요'
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement){
    링크.href = 'kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click',function(){

})

let 이미지 = document.querySelector('#image');
if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg'
}

let 네이버 = document.querySelectorAll('.naver');
if(네이버 instanceof HTMLAnchorElement){
    네이버.href = 'kakao.com'
}

class Car{
    model:string;
    price:number;
    

    constructor(a:string, b:number){
        this.model = a,
        this.price = b
        
    }
    tax():number{
        return this.price / 10
    }
    
}

let car1 = new Car('소나타', 3000);

console.log(car1)
console.log(car1.tax())


Car.prototype.tax;

class Word{
    num;
    str;
    constructor(...par:any){
        let nums:number[] = [];
        let strs:string[] = []; 
        par.forEach((ele:any)=>{
            if(typeof ele === 'string'){
                strs.push(ele);
            } else if (typeof ele === 'number'){
                nums.push(ele);
            }
        })
        this.num = nums;
        this.str = strs;
    }
}

let obj = new Word('kim',3,5,'park')
console.log(obj.num)
console.log(obj.str)

interface student {
    name:string
}
interface teacher extends student {
    age:number
};

let 학생:student = {name : 'kim'};
let 선생:teacher ={name:'kim',age:30}

type Animal = {name:string};
type Cat = {age:number} & Animal

interface product {brand : string, serialNumber : number, model: string[]}

interface Cart{ product:string, price:number}

interface Car1 extends Cart {
    card:boolean
}

interface Babo {
    plus: (a:number,b:number) => number,
    minus: (a:number,b:number) => number
}

let 옵젝 :Babo={
    plus(a,b){
        return a+b;
    },
    minus(a,b){
        return a-b;
    }
}

let 오브젝트2 = {student : true, age:20}

function 함수({student, age}:{student:boolean,age:number}){
	console.log(student,age)
}

함수({student:true, age: 20})

function Maxnum(...par:number[]){
    par.forEach((i)=>{
        let result = 0;
        if(i >= 0){
            if(i > result){
                result = i;
            }
        }
    })
}

function 함수2({user,comment,admin}:{user:string,comment:number[],admin:boolean}):void{
    console.log(this.user,this.comment,this.admin)
}

function 함수3 (...par:string[] | number[] | boolean[]){
    console.log(...par)
}


function 함수4 (a:string |undefined){
    if(a && typeof a === 'string'){

    }
}

type Fish = {swim :string}
type Bird = {fly :string}

function 함수5(animal :Fish|Bird){
    if('swim' in animal){ // Fish type인지 아닌지 확인, 속성명 in 오브젝트
        animal.swim
    }
}

export type Car2 = {
    wheel : '4개',
    color : string
}

export type Bike = {
    wheel : '2개',
    color : string
}

function 함수6(x :Car2 | Bike){
    if(x.wheel === '4개'){
         console.log(x)
    }
}

function 함수7():never { //void와 유사 return이 있으면 안됨, endpoint가 없어야함
    throw new Error() // 강제로 에러 내기
    while(true){ //while 쓰기

    }
}

class User{
    name ='kim';
    private familyName :string = 'kim';
    constructor(a:string){
        this.name = a
    }

    이름변경함수(){
        this.familyName = 'park';
    }
}

let 유저1 = new User('민수')
유저1.이름변경함수()

class User3 {
    private static x = 10;
    public static y = 20;

    static addOne(a:number){
        return User3.x+a
    }
    static printX(){
        console.log(User3.x)
    }
  }
  User3.addOne(3) //이렇게 하면 x가 3 더해져야함
  User3.addOne(4) //이렇게 하면 x가 4 더해져야함
  User3.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

  interface obj1 {
    [key : string] : string | number
  }