Array.prototype.bubbleSort = function() {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                sorted = false
                let temp = this[i]
                this[i] = this[i + 1]
                this[i + 1] = temp
            }
        }
    }
    console.log(this)
}

String.prototype.substrings = function() {
    let a = []

    for(let i = 0; i < this.length; i++) {
        for(let j = i+1; j<=this.length; j++) {
            a.push(this.slice(i,j))
        }

    }
    return a

}