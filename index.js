// function multiply(num1) {
//   return (num2) => num1 * num2;
// }

// [2, -1, 7, 3]

// function multipleNumArr(arr) {
//   let result = [];
//   let x = 0;
//   let pointer = 0;
//   while (pointer < arr.length) {
//     for (let [i, num] of arr.entries()) {
//       if (pointer !== i) {
//         x += num;
//       }
//     }
//     result.push(x);
//     x = 0;
//     pointer++;
//   }

//   return result;
// }

// console.log(multipleNumArr([2, -1, 7, 3]));
//-------------------------------------------------------------------------------
// function myFlat(arr) {
//   const flattenedArray = [];
//   if (!arr.length) return flattenedArray;

//   for (let ele of arr) {
//     if (Array.isArray(ele)) {
//       flattenedArray.push(...myFlat(ele));
//     } else {
//       flattenedArray.push(ele);
//     }
//   }

//   return flattenedArray;
// }

// console.log(myFlat([[[1, 6]], [2], [3], -3, [[[[[[4, [[[5, 3, [[2]]]]]]]]]]]]));

//--------------------------------------------------------------------------------

// function capitalizeWords(arr) {
//   const capitalizeArr = [];

//   if (!arr.length) return capitalizeArr;

//   capitalizeArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
//   return capitalizeArr.concat(capitalizeWords(arr.slice(1))); //["Taco"].concat(["Banana"]);
// }

// console.log(capitalizeWords(["car", "taco", "banana"]));

// function nestedEvenSum(obj) {
//   let evenSum = 0;

//   for (let key in obj) {
//     if (
//       typeof obj[key] !== "object" &&
//       typeof obj[key] === "number" &&
//       obj[key] % 2 === 0
//     ) {
//       evenSum += obj[key];
//     }

//     if (typeof obj[key] === "object") {
//       evenSum = evenSum + nestedEvenSum(obj[key]);
//     }
//   }

//   return evenSum;
// }

// const obj1 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car", aa: { b: { c: { d: 2 } } } },
// };

// console.log(nestedEvenSum(obj1));

// ------------------------------------------------------------------------------------

// function sameVal(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   if (arr1.length === 0 && arr2.length === 0) return true;
//   let getIndex = arr2.indexOf(arr1[0] ** 2);

//   if (getIndex === -1) {
//     return false;
//   }

//   arr1 = arr1.slice(1);
//   arr2.splice(getIndex, 1);
//   return sameVal(arr1, arr2); input -> [2,5], [4, 25] output -> true
// }

// function sameVal(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};

//   for (let key of arr1) {
//     frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
//   }
//   for (let key of arr2) {
//     frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
//   }
//   console.log(frequencyCounter1, frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     console.log(key ** 2);
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(sameVal([4, 4, 6, 5], [16, 36, 1, 25]));

// ------------------------------------------------------------------------------------------

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   if (str1 === "" && str2 === "") return true;
//   const charCounter1 = {};
//   const charCounter2 = {};

//   for (let char of str1) {
//     charCounter1[char] = (charCounter1 || 0) + 1;
//     charCounter2[char] = (charCounter2 || 0) + 1;
//   }

//   for (let key in charCounter1) {
//     if (!(key in charCounter2) || charCounter1[key] !== charCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// ---------------------------Multiple pointer pattern---------------------------------------

// function countUniqueValues(arr) {
//   let track = arr[0];
//   let count = 1;

//   if (!arr.length) return 0;

//   for (let value of arr) {
//     if (track !== value) {
//       track = value;
//       count++;
//     }
//   }

//   return count;
// }

//  [1, 1, 1, 1, 3, 3, 2, 2]

// function averagePair(arr, num) {
//   if (!arr.length || num < 0) return false;
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if (avg > num) end--;
//     else if (avg < num) start++;
//     else return true;
//   }

//   return false;
// }

// function isSubsequence(subStr, str) {
//   // good luck. Add any arguments you deem necessary.
//   let i = 0;
//   let j = 0;
//   while (j < str.length) {
//     if (subStr[i] === str[j]) i++;
//     if (i === subStr.length) return true;
//     j++;
//   }

//   return false;
// }
// isSubsequence('abcba', 'aarbcadabra');

//-----------------------------Sliding window pattern----------------------------------------

// function maxSubarraySum(arr, num) {
//   let start = 0;
//   let end = num;
//   let maxSum = -Infinity;
//   let temSum = 0;

//   if (!arr.length || arr.length < num) return null;

//   while (end <= arr.length) {
//     for (let i = start; i < end; i++) {
//       temSum += arr[i];
//     }

//     if (temSum > maxSum) {
//       maxSum = temSum;
//     }

//     start++;
//     end++;
//     temSum = 0;
//   }

//   return maxSum;
// }

// -------------------------------------------divide and conquer---------------------------------

// function findIndexVal(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;

//   if (!arr.length) return -1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (arr[middle] === num) return middle;

//     if (arr[middle] > num) {
//       end = middle - 1;
//     }
//     if (arr[middle] < num) {
//       start = middle + 1;
//     }
//   }
//   return -1;
// }

// ---------------------sliding window--------------------------------------------------

// function minSubArrayLen(arr, sum) {
//   let start = 0;
//   let end = 0;
//   let minm = Infinity;
//   let temp = 0;

//   if (!arr.length) return 0;

//   while (start < arr.length) {
//     if (end < arr.length && temp < sum) {
//       temp += arr[end];
//       end++;
//     } else if (temp >= sum) {
//       minm = Math.min(minm, end - start);
//       temp -= sum[start];
//       start++;
//     } else {
//       break;
//     }
//   }

//   return temp === Infinity ? 0 : temp;
// }

// minSubArrayLen([2,3,1,2,4,3], 7) // 2

// console.log(findIndexVal([1, 7, 12, 34, 43, 44, 78, 87, 91], (num = 12)));

// function longestUniqueSubsString(str) {
// let start = 0;
// max = 0;
// let uniqueObj = {};

// if (!str.trim().length) return 0;

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (!uniqueObj[char]) {
//     uniqueObj[char] = i;
//   } else {
//     max = Math.max(max, i - start);
//     start = uniqueObj[char] + 1;
//     uniqueObj[char] = i;
//   }

//   console.log("max", max, "start", start);
// }

// return max;
//------------------------------------------------------

//   let start = 0;
//   let unique = {};
//   let maxm = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (unique[char]) {
//       start = Math.max(start, unique[char]); //6, 8,
//     }

//     maxm = Math.max(maxm, i - start + 1); //7

//     unique[char] = i + 1;
//   }

//   return maxm;
// }
// -
// // findLongestSubstring('longestsubstring') // 6
// start = 7;
// max = 7;

//-----------------------------------------------------------------------------

// function nonRepeat(str) {
//   let unique = {};

//   for (let char of str) {
//     unique[char] = (unique[char] || 0) + 1;
//   }

//   console.log(unique);

//   for (let keys in unique) {
//     if (unique[keys] === 1) return keys;
//   }

//   return false;
// }

// const obj = {
//   x: "foo",
// };
// (function () {
//   delete obj.x;
//   console.log(obj.x);
// })();

//----------------------------------------------------------------

// function findTwoSum(nums, target) {
//   const numMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }

//     numMap.set(nums[i], i);
//   }

//   return null; // If no such pair is found
// }

// var nums = [7, 3, 5, 4, 1, 2, -1]

// var target = 6

// --------------------------------------------------------------

// function printDetails(role) {
//   console.log("role", role);
//   console.log(`Hello, I am ${this.name}, and I am a ${role}`);
// }

// const info = {
//   name: "Nityanand Rai",
//   age: "27",
// };

// printDetails.bind(info, "Frontend developer")();

// ----------------Memoization-------------------------------------------------

// function memoize(func) {
//   let cache = {};

//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (!(key in cache)) {
//       cache[key] = func(args);
//     } else {
//       console.log("memized value");
//       return cache[key];
//     }

//     return func(args);
//   };
// }

// function factorial(value) {
//   if (value === 0) return 1;

//   return value * factorial(value - 1);
// }

// let memoization = memoize(factorial);

// --------------------------------------event bubbling----------------------------------------

// const div = document.querySelector("div").addEventListener("click", (e) => {
//   console.log("div clicked");
// });

// const cta = document.querySelector("button").addEventListener("click", () => {
//   console.log("button clicked");
// });

// document.addEventListener("click", () => {
//   console.log("document");
// });

// window.addEventListener("click", () => {
//   console.log("window");
// });
// ------------------------------------------------------------------------------------

// function lastWordLength(strValue) {
//   let count = 0;
//   if (!strValue.length) return count;

//   for (let word of strValue) {
//     if (word === " ") count = 0;
//     else count++;
//   }

//   return count;
// }

// ----------------------------------------------------------------------------------

// function shiftValueToLast(arr, num) {
//   if (!arr.length) return null;

//   if (arr.indexOf(num) === -1) return null;

//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     if (arr[end] === num) end--;
//     else if (arr[start] === num) {
//       let temp = arr[end];
//       arr[end] = arr[start];
//       arr[start] = temp;
//       end--;
//       start++;
//     } else start++;
//   }

//   return arr;
// }

// // [1, 3, 5, -1, 6, 3, 7, 3, 8]

// -------------------------------------------------------------------------------------

// deep clone

// const p1 = {
//   name: "dexter",
//   phone: "35353434242",
//   address: {
//     houseNo: "123/2",
//     streetName: "adc street",
//   },
// };

// -----------------------------------------------------------------------------
