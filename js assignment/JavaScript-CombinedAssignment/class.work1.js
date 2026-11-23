// function sum(a, b) {
//     return a + b;
// }
// sum = 3 + 5
// console.log(sum);

// let ans = sum(29, 78)
// console.log(ans);

// function sum(n) {
//     ans = 1;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + 1
//     } return ans;

//     const ans = sum(100);
//     console.log(ans);

// }

// gien an array give me back an new array where every value is multiply by 2
// [2,3,4,5,6] ------

// const input = [1, 2, 3, 4, 5];

// const newArray = [];

// for (let i = 0; i <= input.length; i++) {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

//  filtering
//  what if i tell you, give an input array give me back the even values
const arr = [1, 2, 3, 4, 5];
const newArray = [];
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArray.push(arr[i]);
    }
    console.log(newArray);
}


