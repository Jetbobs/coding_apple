function 함수6(x) {
    if (x.wheel === '4개') {
        console.log(x);
    }
}
var car6 = { wheel: '4개', color: '흰색' };
function 함수(x) {
    console.log(x.length);
}
var data = '{"name" : "dog", "age" : 1 }';
data = JSON.parse(data);
function Animals(data) {
    return data = JSON.parse(data);
}
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var a = new Person('어쩌구');
a.name; //any 타입이 되었넹 
var arr = ['동서녹차', 4000, true];
var arr2 = ['동서녹차', 4000, true, false];
function Tuples(x) {
}
function filters(x) {
    var result = [[], []];
    x.forEach(function (a) {
        if (typeof a == 'string') {
            result[0].push(a);
        }
        else if (typeof a == 'number') {
            result[1].push(a);
        }
    });
    return result;
}
export {};
