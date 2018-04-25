//first kata
function add(a, b){
    return a + b;
}
console.log(add(2,4))


// second kata
function multiply(a, b) {
    let count= 0;
    for (let i = 0; i < a; i++) {
        count= add(count,b)
    }
    return count;
}
console.log(multiply(6,8))

// third kata
function power(a, b) {
    let count = 1;
    for (let i = 0; i < b; i++){
        count =multiply(count,a);
     }
     return count;
}
console.log(power(3,4))

// fourth kata
function factorial(a){
  if (a < 0)
    return -1;
    else if (a == 0)
        return 1;
    else {
        return multiply(a , factorial(a - 1));
    }
}
console.log(factorial(4))

// fifth kata
function fibinocci(a){
    let sequence = [0, 1];

    for (let i = 2; i < a; i++) {
        sequence[i] = add(sequence[i-1], sequence[i-2]);
    }
    return sequence [add(a, -1)];
}
console.log(fibinocci(8))
