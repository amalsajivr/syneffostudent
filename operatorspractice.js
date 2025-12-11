let x = 5;
let result = x > 8;
console.log(result);

let text1 = "A";
let text2 = "B";
let result2 = text1 < text2;
console.log(result2);

let text3 = "20";
let text4 = "5";
let result3 = parseInt(text3) < parseInt(text4);
console.log(result3);

let age = 20;
let voteable;
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);



