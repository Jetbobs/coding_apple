for(let i = 0; i < document.getElementsByClassName('tab-button').length; i++){
    document.getElementsByClassName('tab-button')[i].addEventListener('click',function(){
        removeOrange();
        addOrange(i);
        removeShow();
        addShow(i);
    })
}
function removeOrange(){
    let tabButton = document.getElementsByClassName('tab-button');
    for(let i = 0 ; i < tabButton.length; i++){
        tabButton[i].classList.remove('orange');
    }
}
function addOrange(n){
    document.getElementsByClassName('tab-button')[n].classList.add('orange');
}
function removeShow(){
    let tabContent = document.getElementsByClassName('tab-content');
    for(let i = 0  ; i < tabContent.length ; i ++){
        tabContent[i].classList.remove('show');
    }
}
function addShow(n){
    document.getElementsByClassName('tab-content')[n].classList.add('show');
}
// 버튼 0 누르면 
// 탭버튼에 오렌지색 생기고 기존의 탭 오렌지색은 사라진다 (클래스명 추가 및 기존 클래스명 제거)
// 해당 탭 컨텐츠가 보여지고, 기존의 탭 컨테츠는 안보인다 (클래스명 추가 및 기존 클래스명 제거)