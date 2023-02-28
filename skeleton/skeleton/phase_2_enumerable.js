Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

Array.prototype.myEach = function(callback) {
    for (let ele of this) {
        callback(ele)
    }
}

Array.prototype.myMap = function(callback) {
    let a = []

    this.myEach(ele => a.push(callback(ele)))
    return a; 
}

// [1,2,3].myMap( ele => {
//     return ele*2

// [1,2,3]myMap( ele => (
//     ele*2
// ));
// These are the same result


Array.prototype.myReduce = function(callback, initialValue=this[0]) {
    
    acc = this.myEach(ele => {
        return callback(acc, ele)
    })

    return acc
}