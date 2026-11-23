 /*
 Write a function named calculate that accepts three arguments:
- a – first number
- b – second number
- callback – another function
The calculate function should pass a and b to the callback function.

Expected example:
function add(a, b) {
    return a + b;
}

// calculate(add) should ultimately produce 30

Your task is to build calculate.

Before coding, tell me:
1. What are the three parameters? 
2. How will you execute the callback?
3. What values should you pass to the callback?
 */

function calculate(callback){ // call back function
    callback();
}

function sum( a , b,){
   return(a+b);
}

console.log(calculate(10, 20));