function range(start, end) {
    
    if (start === end) return []
    return [start].concat(range(start+1,end))

}

// [1,3]
// [2,3]
// [3,3]


function sumRec(arr) {
    if(arr.length === 0) return 0
    return arr[0]+sumRec(arr.slice(1))
}