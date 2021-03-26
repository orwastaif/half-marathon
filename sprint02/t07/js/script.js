function sortEvenOdd(arr) {
    arr.sort((a,b) =>{
    return a % 2 - b % 2 || b % 2 - a % 2 || a - b;})
    
}
