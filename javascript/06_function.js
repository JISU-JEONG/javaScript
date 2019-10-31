/*
    * 함수
*/

console.log(myAdd(1,2))
// console.log(myAdd2(1,2))
// 선언식
function myAdd(a,b){
    return a+b
}

// 표현식

let myAdd2 = function(a,b){
    return a+b
}

/*
    * arrow function
    ES6+
*/
let myFuction = function(a) {
    return(a+1)
}
// 1. funtion 키워드 삭제 후 =>
let myArrowFunction = (a) => {return a+1}
// 1-1. 인자가 하나라면, 소괄호 생략 가능
// 1-2. 문장이 한 줄이고, 리턴이라면 중괄호 및 return 키워드 생략 가능
let myArrowFunction1 = a => a+1

// 제곱의 결과를 나타내는 square 함수를 표현식

let square = function(x){
    return x**2
}
let squareArrow = x => {return x**2}
squareArrow2 = x => x**2

let greeting = function() {
    console.log('happy!')
}

// 1-3 인자가 없는 경우에는 () or _
greeting = () => {console.log('happy!')}
greeting = _ => {console.log('happy!')}

// 1-4. 기본인자
greeting2 = (name='타키') => name

/*
    * 익명함수
*/

(function (a){
    return a*10
}(100))
(a => a*10 (10))

let concat = function(str1, str2){
    return `${str1}-${str2}`
}

let check_long_str = function(string){
    
    if(string.length > 10){
        return true
    }
    else
    {
        return false
    }
}

if (check_long_str(concat('Happy', 'Hacking'))){
    console.log('LONG STRING')
}
else{
    console.log('SHORT STRING')
}