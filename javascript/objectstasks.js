// FOR…IN LOOP — Questions Only

// Print all keys of an object using for…in.
// 
// let obj={
    
// name:"John",
// age:5,
// class:"LKG",
// };
// for(let key in obj){
//     console.log(key);
// }




// Print all values of an object using for…in.

// let obj={
    
// name:"John",
// age:5,
// class:"LKG",
// };
// for(let key in obj){
//     console.log( obj[key]);
// }



// Count how many properties an object has.



// let obj={
    
// name:"John",
// age:5,
// class:"LKG",
// };

// for(let count in obj){
//     count++;
//     console.log(count);
// }





// Find whether a given key exists in an object.


// let obj={
    
// name:"John",
// age:5,
// class:"LKG",
// };
// let key='age';
// for(let key in obj){
//     if("name=John"){
//         console.log('key exists'); 
//     }
// }




// Print all indexes of an array using for…in.


// let obj={
    
// name:"John",
// age:5,
// class:"LKG",
// };
// for(let key in obj){
//     console.log( index );
// }





// Find the sum of values of an object (numeric values only).

// let person = { age:22, height:182, weight:90 };
// let sum=0;

// for(let key in person){

//     if(typeof person[key] === 'number'){

//     }
// }




// Print only the string values from an object.

// let person = { name: 'gody', age: 21, place: 'kochi' };

// for(let key in person){

//     if(typeof person[key] === 'string'){
// console.log(person[key]);
//     }
// }


// Convert all object keys to uppercase and print them.



// let person = { name: 'gody', height:16, place: 'kochi' };

// for(let key in person){

// console.log(key.toLocaleUpperCase());
//     }




// // Find the longest key name in an object.


let obj = {'name', 'age', 'house'};

console.log(str.length);




// Copy properties from one object to another using for…in.














// 🔄 FOR…OF LOOP — Questions Only

// Print all elements of an array using for…of.





// let colors = [red, green, yellow];

// for(let color of colors){
//     console.log(color);
// }




// // Find the sum of all even numbers in an array.



// let numbers=[1,2,3,4,5];

// let sum = 0;
// for(let num of numbers ){
// if(num % 2 === 0){
//     sum +=sum;
// }
// }
// console.log(sum);



// // Count how many negative numbers are in an array.


// let numbers = [-1, -2, -3, -4, -5];

// let count = 0;

// for(let num of numbers){
// if(num < 0){
// count++;

// }

// }








// // Find the smallest number in an array.


// let numbers = [5, 2, 8, 1, 9];
// let smallest = numbers[0];

// for(let num of numbers){
// if(num < smallest){
//     smallest=num;
// }
// }





// // Print only duplicate elements from an array.



















// // Reverse a string using for…of.


// let str = 'hello';
// let reversed = '';

// for(let char of str){
// reversed = char + reversed;

// }

// console.log(reversed);




// // Count the number of vowels in a string.


// let str = 'hello world';

// let vowels = 0;

// for(let char of str){

//     if('aeiou'.includes(char)){
//         vowels++;
//     }
// }





// // Find the longest word in an array of strings.




// let words = ['hello', 'world', 'javascript', 'programming'];

// let longest = words[0];

// for(let word of words){
// if(word.length > longest.length){
// longest = word;
// }

// }






// // Check whether a string contains only alphabets.

















// Merge two arrays using for…of (without built-in methods).


let arr1 = [1, 2, 3];
let arr1 = [4, 5, 6];

let merged = [];
for (let num of arr1){
    merged.push(num);
}
for (let num of arr2){
    merged.push(num);
}
console.log(merged);




// 1. Write a for loop to print numbers from 1 to 10 in the console.



// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }





// // 2. Use a for loop to print all odd numbers between 1 and 20.


// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);




// // 3. Given const colors = ['red', 'green', 'blue'], use a for loop to print each color.



// let colors = ['red', 'green', 'blue'];
// for (let i = 0; i < colors; i++) {
//   console.log(colors[i]);
// }





// // 4. Write a while loop to calculate the sum of numbers from 1 to 50.



// let sum = 0;
// let i = 1;
// while (i <= 50) {
//   sum += i;
//   i++;
// }
// console.log(sum);





// // 5. Use a do...while loop to print numbers from 10 down to 1.



// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);



// // 6. Given const numbers = [1, 2, 3, 4, 5], use a loop to print the elements in reverse order.


// let numbers = [1, 2, 3, 4, 5];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }




// // 7. Use a for loop to calculate the total of all numbers in const items = [10, 20, 30, 40].


let items = [10, 20, 30, 40];











// // 8. Write a loop to find the largest number in const nums = [15, 34, 7, 23, 56].



 let nums = [15, 34, 7, 23, 56]
















// // 9. Given const person = { name: 'John', age: 25, city: 'New York' }, use a for...in loop to print
// // all the keys and their values.




// const person = { name: 'John', age: 25, city: 'New York' };
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }






// // 10. Write a loop to create a new array containing only the even numbers from const arr = [12,
// // 7, 19, 28, 33, 40].













// // 11. Use a nested loop to print a multiplication table for numbers 1 to 5.


// for(let i=1; i<=5; i++){

//     for(let j=1; j<=5; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }





// // 12. Write a loop to create a new array without duplicates from const nums = [4, 5, 4, 6, 7, 6,8].














// // 13. Given const nested = [[1, 2], [3, 4], [5, 6]], use a loop to flatten it into [1, 2, 3, 4, 5, 6].














// // 14. Write a loop to create a new array without duplicates from const nums = [4, 5, 4, 6, 7, 6, 8].










// // 15. Given const sales = { January: 100, February: 200, March: 300 }, write a loop to
// // calculate the total sales


// let sales = { January: 100, February: 200, March: 300 }
// let totalSales = 0;
// for(let month in sales) {

// }







