Array.prototype.uniq = function() {
    let a = []
    for (let ele of this) {
        if (!a.includes(ele)) a.push(ele)
    }
    return a
}

Array.prototype.twoSum = function() {
    let a = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) a.push([i, j])
        }
    }
    return a
}

Array.prototype.transpose = function () {
    let a = []
    for (let j = 0; j < this[0].length; j++) {
        let b = []
        for (let i = 0; i < this.length; i++) {
            b.push(this[i][j])
        }
        a.push(b)
    }
    return a
}