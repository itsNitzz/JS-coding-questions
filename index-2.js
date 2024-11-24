// function strExist(str, subStr) {
//   let i = 0;
//   let j = 0;
//   let pointer = 0;

//   while (i <= str.length) {
//     if (j === subStr.length) return true;

//     if (str[i] === subStr[j]) {
//       i++;
//       j++;
//     } else {
//       pointer++;
//       i = pointer;
//       j = 0;
//     }
//   }

//   return false;
// }
// str substring

// [1, 2, -3, 1, -1, 2, -2];

// function maxSumZeroSubArray(numArr) {
//   let maxm = -Infinity;
//   let sum = 0;
//   let sumExist = {};

//   for (let [i, value] of numArr.entries()) {
//     sum += value;

//     if (sum === 0) {
//       maxm = i + 1;
//     }

//     if (sumExist[sum]) {
//       maxm = Math.max(maxm, i - sumExist[sum]);
//     } else {
//       sumExist.sum = i;
//     }
//   }

//   return maxm;
// }

// console.log(maxSumZeroSubArray([1, 1, -3,0, 0, 3, -1, 2, -2]));
