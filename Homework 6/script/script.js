//1.

// function getEvenOdd(a,b){
//     if(a%2==0 && b%2==0){
//         return a*b;
//     } else if(a%2==1 && b%2==1){
//         return a+b;
//      }else if(a%2==1 && b%2==0){
//         return a;
//      }else{
//         return b;
//      }
    
// }
// console.log(getEvenOdd(8,3));
// console.log(getEvenOdd(8,8));

//== 2.


function getSecDay() {
    let x = prompt('Enter seconds');
    const secInDay = 86400;
    let days = x / secInDay;
    return days;
}
 let result = getSecDay();
console.log(result);

//==3.
//Написать функцию isPrime, которая принимает число и возвращает true,
// если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

// let n = prompt('Enter number');
// function isPrime(n){
//   if(n<2){
//     return false;
//   }
//   for(let i=2; i<=n/2; i++){
//     if(n % i ===0){
//         return false;
//     }
//   }
//   return true;
// }
// let result = isPrime(n)
// console.log(result);
// ==4.

// function getMin(a,b){
//     if(a<b){
//         return a;
//     }
//     return b;
// }
// console.log(getMin(25,14));

// function getArr(x,y){
//     let min;
//     let max;
//     let newArr=[];
//     if(x>y){
//         max = x;
//         min = y;
//     }else if (x<y){
//         max = y;
//         min = x;  
//     }else{
//         return 0;
//     }
//     for( let i = min; i<max; i++){
//         newArr.push(i);
//     }
//     return newArr;
// }
// console.log(getArr(50,15));
