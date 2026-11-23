/*
Write a function named isEven that accepts one number and checks whether that number is even.
If the number is even, return true.
Otherwise, return false.
*/
/*
what function should do?
function should return true if the number is evn and false if the number is odd

what should function return?
true or false

what are argument need to pass inside the function?
a
*/
 function isEven(a){
    if(a % 2 === 0){
        return true;
    }else{
        return false;
    }
 }

 const a = 55;
 console.log(isEven(a));
 