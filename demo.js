// function isPrime(num) {
//   if (num <= 0 || typeof num !== "number") return false;
//   if (num === 1) return true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//     }
//   return true;
// }
// 5
// prime is divisible by itself and one
// if I tries to divide by other numbers it will give a reminder
// -----------------------------------------------------------------------

// function maxEl(arr) {
//   let max = -Infinity;
//   let newArr = [];

//   if (!arr.length || !Array.isArray(arr)) return undefined;

//   for (let subArr of arr) {
//     newArr.push(...subArr);
//   }

//   for (let el of newArr) {
//     max = Math.max(max, el);
//   }
//   return max;
// }

// [[1, 4, 6, -1], [34, 23, 11]]

// -----------------------------------------------------------------

// function uniqueWords(str) {
//   const myArr = str.split(" ");
//   let myObj = {};
//   let result = [];

//   for (let word of myArr) {
//     myObj[word] = (myObj[word] || 0) + 1;
//   }

//   for (let word in myObj) {
//     if (myObj[word] === 1) result.push(word);
//   }

//   return false;
// }

// Java is great.Python is also great.
