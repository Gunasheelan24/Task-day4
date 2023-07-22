// 1.Print odd numbers in an array ? 

// let OddNumber = ( (oddNum) => {
//    for(let i = 1; i <= oddNum.length; i+=2) { 
//      console.log(i)
//    }
// })
// OddNumber([1,2,3,4,5,6,7,8,9,10])

//2.Convert all the strings to title caps in a string array ? 

//  let title = (() => {
//         let str = "gunasheelan"
//         str = str.toLowerCase().split(' ');
//         for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//         }
//         console.log(str.join(' '));
//         });
// title("gunasheelan");

//3.Print Odd Number ?

// let Oddnumber = (num) => { 
//     let Store = 0;
//     for(i = 0; i <=num.length;i++) { 
//       Store += (i)
//     }
//     console.log("Total:" + "" +Store);
// }
// Oddnumber([1,2,3,4,5,6,7,8])

//4. Remove an Dublicate items in an array 

// let clone = (Value) => { 
//     let FinalValue = [...new Set(Value)]
//     console.log(FinalValue);
// }
// clone([1,2,3,4,5,5,4,3,2,1,'a','b','a','b'])

// 5. palindromes using arrow function 

// let person = ( ([name]) => {
//     let Result = name.split("").reverse().join("");
//      if(name === Result) { 
//      console.log("it's a palindrome");
//     }
//    else { 
//      console.log("it's Not a palindrome");
//    } 
//  });
//  person(['mam']);

// 6.Prime Number in an array 


// let checkPrime = (number) => {
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
//   isPrime = checkPrime(2);
//   console.log(isPrime);

// 7.Rotate an array by k times 

// let RotateArray = (Value, K) => {
//     let Array = Value.splice(Value.length-K);
//     for (let i=0; i < Array.length; i++){
//         Value.splice(i,0,Array[i]);
//     }
//     return Value;
// }
// console.log(RotateArray([2,3,4,5,6],1));

// Median Of A two Sorted Array

const median = (a, b) => {
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half - 1]) / 2;
}
const arr1 = [1, 12, 15,];
const arr2 = [2, 13, 30, 45, 47];
median(arr1, arr2);
