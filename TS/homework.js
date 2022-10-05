var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
function cutZero(x) {
    return x.replace('0', '');
}
var removeDash = function (x) {
    return parseFloat(x.replace('0', ''));
};
function Making(x, func1, func2) {
    var result = func1(x);
    var result2 = func2(result);
    return console.log(result2);
}
function Callme(x) {
    if (typeof x == "string") {
        console.log('안녕하세요! ' + x);
    }
    else if (typeof x == 'undefined') {
        console.log('이름이 없습니다.');
    }
}
Callme();
