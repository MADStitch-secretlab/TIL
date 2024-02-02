/**
 * Object / 객체
 */ let yuJin = {
    name: '안유진',
    dance: function (x,y) {
        return x*y ;
    }
};

console.log(yuJin);
console.log(yuJin.dance(1,5));
let yuJin1 = {
    name: '안유진',
    group : '아이브',
/*    dance: function (who) {
        return who+'이 춤을 춥니다';*/
    }
// console.log(yuJin1.dance(yujin1.name));

/*
* var , let , const -> 변수 선언
*
* function -> 함수 선언
*  1. fuction
*  2. 화살표 함수 (arrow function)
*
* python
* 1. def
* 2. lamda
* */

const a = 1
let b = 2
var c = 3

// 일급 객체 ->

// 회원가입에 대한 페이지

// 1. const, funciton 은 취향차이 (가독성)
// 2. 한 파일 내에서 순환참조하는 경우 호이스팅을 발생 시키기 위해 function 사용
// ***** 3. this

console.log("global.name : ", global.name)
global.name = "이건 글로벌이야"
console.log("global.name : ", global.name)

const o1 = {
    name: "윤석",
    speak : ()=> { console.log(`My name is ${this.name}`) ; }
}

const o2 = {
    name: "윤석",
    speak() { console.log(`My name is ${this.name}`) ; }
}
//
// o1.speak();
// const cloneSpeak = o1.speak
// cloneSpeak()
//
// o2.speak();
// const cloneSpeak2 = o2.speak
// cloneSpeak2()

const o = {
    name: '윤석',
    speak: function () {
        // const self = this
        function getName() {
            return `${this.name}`;
        }
        // const getName = () => this.name
        console.log(`My name is ${getName()}`);
    }
};

o.speak()

fetch("http://localhost:8080/post/5",{
    method : "DELETE"
})