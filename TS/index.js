var myName = '이름';
var myAge = 29;
var homTown = '대전';
var singer;
singer = { name: '코요테', song: '우리들의꿈' };
var project;
var 회원들 = [1, '2', 3];
var 오브젝트;
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교;
function naming(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function counting(x) {
    return x.toString().length;
}
function congrat(x, y, z) {
    var total = 0;
    if (y) {
        total + 500;
    }
    else {
        total + 0;
    }
    if (z == "상") {
        total + 100;
    }
    else {
        total + 0;
    }
    total + x;
    if (total >= 600) {
        return console.log('결혼가능');
    }
    else {
        return console.log("");
    }
}
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
function 묵찌빠하기(a) {
    return ['가위', '보'];
}
묵찌빠하기('가위');
var 자료 = {
    name: 'kim'
};
function myFunction(a) {
}
myFunction(자료.name);
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
var cutZero = function (x) {
    var result = x.replace('0', '');
    return result;
};
function removeDash(x) {
    var result = x.replace('-', '');
    return parseFloat(result);
}
function callback(x, func1, func2) {
    var result = func1(x);
    var result2 = func2(result);
    console.log(result2);
}
var 제목 = document.querySelector('#title');
if (제목 !== null) {
    제목.innerHTML = '반가워요';
}
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
var 네이버 = document.querySelectorAll('.naver');
if (네이버 instanceof HTMLAnchorElement) {
    네이버.href = 'kakao.com';
}
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a,
            this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
Car.prototype.tax;
var Word = /** @class */ (function () {
    function Word() {
        var par = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            par[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        par.forEach(function (ele) {
            if (typeof ele === 'string') {
                strs.push(ele);
            }
            else if (typeof ele === 'number') {
                nums.push(ele);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
;
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 30 };
var 옵젝 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
var 오브젝트2 = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
function Maxnum() {
    var par = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        par[_i] = arguments[_i];
    }
    par.forEach(function (i) {
        var result = 0;
        if (i >= 0) {
            if (i > result) {
                result = i;
            }
        }
    });
}
function 함수2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(this.user, this.comment, this.admin);
}
function 함수3() {
    var par = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        par[_i] = arguments[_i];
    }
    console.log.apply(console, par);
}
function 함수4(a) {
    if (a && typeof a === 'string') {
    }
}
function 함수5(animal) {
    if ('swim' in animal) { // Fish type인지 아닌지 확인, 속성명 in 오브젝트
        animal.swim;
    }
}
function 함수6(x) {
    if (x.wheel === '4개') {
        console.log(x);
    }
}
function 함수7() {
    throw new Error(); // 강제로 에러 내기
    while (true) { //while 쓰기
    }
}
var User = /** @class */ (function () {
    function User(a) {
        this.name = 'kim';
        this.familyName = 'kim';
        this.name = a;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return User;
}());
var 유저1 = new User('민수');
유저1.이름변경함수();
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.addOne = function (a) {
        return User3.x + a;
    };
    User3.printX = function () {
        console.log(User3.x);
    };
    User3.x = 10;
    User3.y = 20;
    return User3;
}());
User3.addOne(3); //이렇게 하면 x가 3 더해져야함
User3.addOne(4); //이렇게 하면 x가 4 더해져야함
User3.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
export {};
