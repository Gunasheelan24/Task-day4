// 1.Anonymous (Print odd numbers in an array)
// (function (Number) { 
//     for(let a = 0; a < Number.length; a+=2) { 
//     console.log(Number[a]);
//     }
// }
// ([1,2,3,4,5,6,7,8,9]));

// IIFE (Print odd numbers in an array)

// (function () { 
//     let Number = [1,2,3,4,5,6,7,8,9];
//     for(let a = 0; a < Number.length; a+=2) { 
//     console.log(Number[a]);
//     }
// })()

//2. Print Sum of all
//     (function (Number) { 
//     let sum = 0;
//     for(let i = 0; i < Number.length; i++) {
//         sum += Number[i];
//     }
//     console.log(sum)
// }
// ([1,2,3,4,5,6]));

// IIFE sum of all 

// (function () { 
//     let Number = [1,2,3,4,5,6]
//     let sum = 0;
//     for(let i = 0; i < Number.length; i++) {
//     sum += Number[i];
//     }
//     console.log(sum)
//     })();

// 3. Anonymous Remove Dublicate number 
// (function (number) {
//     let FinalResult = [...new Set(number)];
//     console.log(FinalResult);
// }
// ([1,2,3,4,1,2,3,4]));

// IIFE Remove Dublicate number 
// (function () {
//     let number = [1,2,3,4,1,2,3,4];
//     let FinalResult = [...new Set(number)];
//     console.log(FinalResult);
// }());

// 4. IIFE Return all the palindromes in an array 

// (function () {
//     let name = 'mam'
//     let Result = name.split("").reverse().join("");
//      if(name === Result) { 
//      console.log("it's a palindrome");
//     }
//    else { 
//      console.log("it's Not a palindrome");
//    } 
//  })();

// Anonymous Return all the palindromes in an array

// let person = (function () {
//     let name = 'mam'
//     let Result = name.split("").reverse().join("");
//      if(name === Result) { 
//      console.log("it's a palindrome");
//     }
//    else { 
//      console.log("it's Not a palindrome");
//    } 
//  });
//  console.log(person());
 
// 5.Anonymous Convert all the strings to title caps in a string array

// (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     console.log(str.join(' '));
//     }('GUNASHEELAN'));

// 5. IIFE Convert all the strings to title caps in a string array

    // (function () {
    //     let str = 'GUNASHEELAN';
    //     str = str.toLowerCase().split(' ');
    //     for (var i = 0; i < str.length; i++) {
    //     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     console.log(str.join(' '));
    //     })();

// 6.Prime Number in an array  

// let checkPrime = function (number) {
//     if (number <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//   isPrime = checkPrime(0);
//   console.log(isPrime); 


//7.Rotate an array by k times 
// let RotateArray = function(Value, K) {
//     let Array = Value.splice(Value.length-K);
//     for (let i=0; i < Array.length; i++){
//         Value.splice(i,0,Array[i]);
//     }
//     return Value;
// }
// console.log(RotateArray([2,3,4,5,6],1));

//IIF Rotate an array by k times
// let RotateArray = function(Value, K) {
//     let Array = Value.splice(Value.length-K);
//      for (let i=0; i < Array.length; i++){
//          Value.splice(i,0,Array[i]);
//      }
//       console.log(Value);
//   }([2,3,4,5,6],1);


const median = function (a, b) {
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half - 1]) / 2;
}
const arr1 = [1, 12, 15,];
const arr2 = [2, 13, 30, 45];
console.log(median(arr1, arr2));
