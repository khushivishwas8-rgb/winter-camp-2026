//Write a function that takes a new object as input which has name , 
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function details(name){
console.log("Hi Miss " + user.name, " Your age is " + user.age, "Address is " + user.adddress.city, "Pincode is " + user.adddress.pincode);
console.log("Hi Miss " + user1.name, " Your age is " + user1.age);
console.log("Hi Miss " + user2.name, " Your age is " + user2.age);
console.log("Hi Miss " + user3.name, " Your age is " + user3.age);
}

function isLegal(age){
if(age >= 18){
    console.log( "is eligible to vote");
 }else{
    console.log(" is not eligible to vote");
 }
}

 


let user = {
    name: "khushi",
    age: 2,
    adddress: {
        city: "Rudrapur no1",
        pincode: 263153
    } 
}

let user1 = {
    name: "jug",
    age: 220,
    adddress: "Durgpur"
}

let user2 = {
    name: "Mug",
    age: 200,
    adddress: "Kashipur"
}

let user3 = {
    name: "bottle",
    age: 20,
    adddress: "Rampur"
}

 details()

 isLegal(200)