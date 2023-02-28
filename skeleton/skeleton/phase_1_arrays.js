Array.prototype.uniq = function() {
    a = []

    for (let ele of this) {
        if (!a.includes(ele)) a.push(ele)
    }
    return a
}

Array.prototype.twoSum = function() {
    a = []

    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) a.push([i,j])

        }
    }

    return a
}

Array.prototype.transpose = function () {
    a = []

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {

        }
    }
}



Array.prototype.transpose = function () {
    a = []

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {

        }
    }
}