function random(arr) {
    const [first, second, , ,last] = arr;
    return [first,second,last]
}

const arr = [1,2,3,4,5]
console.log(random(arr));