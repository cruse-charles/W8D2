function range(start, end) {
    if (start === end) return []
    return [start].concat(range(start + 1, end))
}

function sumRec(arr) {
    if(arr.length === 0) return 0
    return arr[0] + sumRec(arr.slice(1))
}

function exponent(base, exp) {
    if (exp === 0) return 1
    if (exp > 0) return base * exponent(base, exp - 1)
    if (exp < 0) return (1 / base) * exponent(base, exp + 1) 
}

function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 2) + fib(n - 1)
}
function fibonacci(n) {
    let a = []
    for (let i = 0; i <= n; i++) {
        a.push(fib(i));
    }
    return a
}

function deepDup(arr) {
    let a = []
    arr.forEach( ele => {
        !(ele instanceof Array) ? a.push(ele) : a.push(deepDup(ele)) 
    })
    return a
}