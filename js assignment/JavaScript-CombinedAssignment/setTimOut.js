const a = 8;
const b = 12;

console.log(a);
console.log(b);

function callBack() {
    console.log(a + b);
}
setTimeout(callBack, 1000)