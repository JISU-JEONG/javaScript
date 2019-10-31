/*
    Array helper methods
*/
/*
    Array.forEach
*/
let numbers = [1,2,3]

// 1. 반복문 (for)
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
// 2. 반복문 (for..of))
for (let number of numbers){
    console.log(number)
}

// 3. forEach
numbers.forEach(function(num){
    console.log(num)
})

// 4. 실습
const images =[
    {height:30, width:20},
    {height:100, width:100},
    {height:10, width:5},
]
// let areas = [600, 10000, 50]
let areas = []
images.forEach(function(image,idx){
    console.log(idx)
    areas.push(image.width*image.height)
})
console.log(areas)

/*
    map
*/

let doubleNumbers = numbers.map(function(number){
    return number*2
})
console.log(doubleNumbers)

let doubleNumbers2 = numbers.map(number => number*2)
console.log(doubleNumbers2)

// 실습 images -> map
// let areas2 = images.map(function(image){
//     return images.height*image.width
// })
let areas2 = images.map(image => image.width*image.height)
console.log(areas2)

/*
    filter!
*/
// images의 높이가 100보다 작은 object만 담은 배열
let images_100 = []
images.forEach(function(image,idx){
    if (image.height<100){
        images_100.push(image)
    }
})
// myImage = images.filter(function(image){
//     return image.height<100
// })
myImage = images.filter(image => image.height <100)

let products = [
    {name:'banana',type:'fruit'},
    {name:'tomato',type:'vegetable'},
    {name:'apple',type:'fruit'},
    {name:'cucumber', type:'vegetable'}
]

bag = products.filter(product => product.type==='fruit')
bag = products.filter(function(product){
    return product.type === 'fruit'
})
console.log(bag)

/*
    reduce
*/
let mySsafy = [100,100,95,97]
// total = 0
// mySsafy.forEach(function(num){
//     total += num
// })
let totalScore = mySsafy.reduce(function(total,score){
    console.log(score) // 원소
    console.log(total) // 누적
    return total += score
},100) // 초기값
mySsafy.reduce((total, score) => total + score,100)

/*
    find : 일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score === 2
})

let heros = [
    {name:'헐크', age:100},
    {name:'아이런맨',age:50},
    {name:'스파이더맨',age:30}
]
idx = heros.find(hero => hero.age===30)

/*
    some : 조건에 만족하는것이 있으면 true 없으면 false 
    every : 조건에 모두 만족하면 true 없으면 false
*/
myNumbers = [1,2,3,4]
myNumbers.some(function(number){
    return number%2 === 0
})
myNumbers = [3,5]
myNumbers.every(function(number){
    return number%2 !== 0
})
