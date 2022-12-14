const fibonacci = function(fib) {
    if(fib < 0) return "OOPS";
    if(fib == 0) return 0;
    let a = 1;
    let b = 1;
    for(i = 2; i < fib; i++){
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
