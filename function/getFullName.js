/*
Write a function named getFullName that accepts two parameters:
- firstName
- lastName
The function should combine both names and return the full name with a space between them.

Expected output:
getFullName("Khushi", "Vishwas");

// "Khushi Vishwas"

*/
//------------------------------------------------------------------------------------------------
/*
what should the funtion return
function should return the full name;

what are the argument need to pass?
argumnet must be firstname and lastname

What will be the function name?
fullName

How many parameters will it accept?
2 parameters

Which operator will you use to combine two strings?
i think no operator--> we need the + operator to join two strings.

What will your return statement contain?
full name
*/

function getFullName(firstName, lastName){
   // let fullName = firstName + lastName;
    return (firstName + " "+ lastName);
}

let firstName = "khushi";
let lastName = "vishwas";

console.log(getFullName(firstName,lastName));