function a() {
    console.log('a')
}
console.log('hi') // 1.
setTimeout(a, 3000) // 3.
console.log('bye') // 2.



function printHello() {
    console.log('Hellooo')
}

function baz() {
    console.log('baz') // 1 
    setTimeout(printHello, 0) // 3, 비동기로 동작하는 함수
    console.log('baz end') // 2
    return 'hi'
}

function bar() {
    return baz()
}

function foo() {
    return bar()
}

foo()
