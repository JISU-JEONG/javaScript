function sum (x, callbackfn) {
    setTimeout(callbackfn, 1000, x+1) //argument
}

var result = 0

sum(2, function(x) {
    result = x
    console.log(result) // 3
})

console.log(result) // 0

articles = Article.objects.all()
context = {
    ''
}