


const fs = require("fs");

function fileReadCallBack(err, contents) {
    console.log(contents);
}

const contents = fs.readFile("a.txt", "utf-8", fileReadCallBack);
console.log(contents);

let s = 0;
for (let i = 1; i <= 10000000; i++) {
    s += i
}
console.log(s);

const a = 1;
const b = 2;

console.log(a);
console.log(b);

// wait for 1 sec
let beforeTime = Date.now();
for (let i = 0; i < 10000000; i++) {
    let currentTime = Date.now();
    if (currentTime - beforeTime >= 10000) {
        break;
    }
}
console.log(a + b);








