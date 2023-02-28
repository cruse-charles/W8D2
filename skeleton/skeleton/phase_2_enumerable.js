Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

Array.prototype.myMap = function(callback) {
    let a = []
    this.myEach( ele => {
        return a.push(callback(ele))
    })
    return a
}

// [1, 2, 3].myMap( ele => {
//     return ele*2
// })

// [1, 2, 3].myMap( ele => ele*2)

// [1, 2, 3].myMap( ele => (
//     ele*2
// ))

Array.prototype.myReduce = function(callback, acc) {
    let dup = this.slice()
    acc = acc || dup.shift()
    dup.myEach( ele => {
        acc = callback(acc, ele)
    })
    return acc
}