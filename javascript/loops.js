

// for loop

// for(let i=1; i<=10; i++){
// console.log("count: ", i);

// }




// let i=1;
// while(i<=10) {
// console.log(i);
// i++;
// }



// let i=1;
// do {
// console.log(i);
// i++;
// } while(i<=10);



// even numbers

// let i;
// for (i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log("Even : ", i);
//   }
// }

// odd numbers
// for (i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd : ", i);
//   }
// }



// multiplication table of 5

// let num=5;

// for(i=1; i<=10; i++) {

//     console.log(`${num} x ${i} = ${num * i}`);

// }



// Find the sum of numbers from 1 to 100.


// let sum=0;
// for(let i=1; i<=100; i++){

// sum=sum + i;
// }
// console.log("sum of numbers from 1 to 100 is: ",sum);




// Print all numbers between 1 and 100 that are divisible by 3.


// for(let i=1; i<=100; i++){
// if(i%3 === 0){
// console.log(i);

// }
// }


// Print the first 10 natural numbers.

// for(let i=1; i<=10; i++){
// console.log(i);
// }


// // Find the sum of all even numbers between 1 and 50.


// let sum=0;
// for(let i=2; i<=50; i+=2)
// sum+=i;


// Find the factorial of a given number.


// let factorial=1;
// let number=3;
// for( let i=1; i<=3; i++ ){
// factorial =factorial * i;
// }
// console.log("Factorial:", factorial);


// let factorial=1;
// let number=10;
// for( let i=1; i<=10; i++ ){
// factorial =factorial * i;
// }
// console.log("Factorial:", factorial);



// Count how many numbers between 1 and 100 are divisible by 5.


// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     count++;
//   }
// }
// console.log(count);





// // Print all factors of a given number.


// function printFactors(n) {
// for(let i=1; i<=n){
// if(n%i===0){
// console.log(i);
// }


// }

// }

// // Reverse a given number using a for loop.



// for(let i=10; i>=1; i--){
// console.log("count: ", i);

// }








// // Check whether a given number is a prime number.


let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not prime");








// // Print all prime numbers between 1 and 50.



for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}





// // Find the sum of digits of a number.


let num = 123;
let sum = 0;

while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log("Sum of digits of 123 is: ", sum);















