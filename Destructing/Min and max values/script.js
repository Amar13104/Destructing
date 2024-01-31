function minmax(arr) {
    return{
        min : Math.min(...arr),
        max : Math.max(...arr),
    }
}

const arr = [1,2,3,4,5,6]
console.log(minmax(arr));