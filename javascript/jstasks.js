section-1

1.Write a JS program to calculate the perimeter of a square (side = 8)


let side=8;
let perimeter=4*side;
console.log("perimeter:",perimeter);


2.Find the cube of a number using **.
let x=3;

let cube=3**3;
console.log("cube" + x, cube);


3.If a shop sells 3 items costing 120, 75, and 90, calculate the total and average cost.
 */
let a=120; b=75; c=90;
let total=a+b+c;
let average=total/3;
console.log(total,average);


4.Convert minutes into seconds (input = 15).
let minutes=15;
let seconds=minutes*60;
console.log(seconds);


5.A person runs 12 km in 1 hour. How many meters per minute is this?
let kilometer=12;
let distance=12*1000;
console.log(distance);


6.Compute ((25 - 5) * 3) / 2.
let Equation=(((25-5)*3)/2);
console.log(Equation);


 7.Given x = 15; y = 4; find:quotient.
let x=15; y=4;
let quotient=15%4;
let remainder=15/4;
console.log(quotient, remainder);


8.Write a program to calculate the volume of a cube using side ** 3.


let side = 5;
let volume = 5 ** 3;

console.log("volume" = volume);


9.Increment a variable by 5 using +=.

let a=10;
 a+=5; 
console.log(a);



10.Decrease a number by 30% using arithmetic operators.

let x=150;
 let decrease=5 * 0.3;
 console.log(decrease);


11.Check if two numbers are equal: num1 = 10, num2 = "10" using == and ===
let a = num1, num2 = "10";
console.log(num1==num2);
console.log(num1===num2);


 12.Check which number is greater: 25 or 19.
let a=25; b=19;

console.log(25 > 19);


13. Write a program to check if a person is eligible to vote (age ≥ 18).
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}


14. Compare two strings: "apple" and "banana" using < operator.
console.log("apple" < "banana"); 



15. Check if a number lies between 50 and 100.
let num = 75;
if (num >= 50 && num <= 100) {
  console.log("Number lies between 50 and 100");
} else {
  console.log("Number does not lie between 50 and 100");
}



16.Compare two variables and print:"Both are same" "Not equal"

let a = 10;
let b = 10;
if (a === b) {
  console.log("Both are same");
} else {
  console.log("Not equal");
}


 17. Check if the length of "hello" is equal to the length of "world".
console.log("hello".length === "world".length); 



18. Check if a number is positive, negative, or zero using comparison operators.
let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}


19. Compare two floating-point numbers: 3.14 and 3.140.
console.log(3.14 === 3.140);


31. Perform bitwise AND on 6 & 3.
console.log(6 & 3);



32. Perform bitwise OR on 10 | 4
console.log(10 | 4);


33. Compute ~7 (bitwise NOT)
console.log(~7);


 34. Evaluate 12 ^ 5 (XOR).
console.log(12 ^ 5);


40. Calculate ((7 & 3) | (5 ^ 2)).

console.log((7 & 3) | (5 ^ 2));



41)A phone originally costs 12,000. A store gives a 22% discount. Find the finalprice.

let originalCost = 12000;
let discount = 22;
let finalPrice = 12000 * (1 - discount / 100);

console.log("final price"= finalPrice);


42)A student's attendance Total classes = 200, attended = 156 Check if percentage ≥ 75%.

let totalClasses = 200;
let attendedClasses = 156;
let percentage = (attendedClasses / totalClasses) * 100;

if (percentage >= 75) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}



 43)Electricity bill:Units = 350 Rate = 6.5 per unit. Calculate total.

let units = 350;
let rate = 6.5;
let total = units * rate;
console.log(total); 



44. Salary = 25,000
Bonus = 15%
Tax = 5%
Find the net salary.













45. Determine if the year entered is a leap year using comparison + logical operators.















46. A car rental costs:
Base = 1500 per day
Fine if late = 200
Calculate total if rented for 3 days and returned late.


















47. Check if a password is strong:
Length ≥ 8 AND contains a number AND contains a special character.



















48. Movie ticket booking:
If age < 10 OR age > 60 → discount = true
Check if discount applies.


















49. Petrol price increases by 6%. If original price = 102, find new price.






















50. A student has scores in 4 subjects. Check if average ≥ 90 to award a scholarship.



















section-2


1. A company decided to give bonus of 5% to employee if his/her year of service is more than
5 years. Ask user for their salary and year of service and print the net bonus amount.









2. Write a program to calculate the electricity bill (accept number of unit from user) according
to the following criteria :
 Unit Price
a. First 100 units no charge
b. Next 100 units Rs 5 per unit
c. After 200 units Rs 10 per unit
(For example if input unit is 350 than total bill amount is Rs2000)






3. Write a program to accept a number from 1 to 7 and display the name of the day like 1 for
Sunday , 2 for Monday and so on.







4. . Accept any city from the user and display monument of that city.
 City Monument
a. Delhi Red Fort
b. Agra Taj Mahal
c. Jaipur Jal Mahal











5. Write a program to check whether the last digit of a number( entered by user ) is divisible
by 3 or not.










6. Write a program to accept the cost price of a bike and display the road tax to be paid
according to the following criteria :
 Cost price (in Rs) Tax
a. > 100000 15 %
b. > 50000 and <= 100000 10%
c. <= 50000 5%











7. Write a program that takes a number as input and checks whether it is:
a. "Even and divisible by 4"
b. "Odd and greater than 10"
c. "Neither of the above"









8. Write a program that checks the total purchase amount and applies discounts:
a. If the amount is greater than $100, log "You get a 20% discount!".
b. If the amount is between $50 and $100 (inclusive), log "You get a 10% discount!".
c. If the amount is less than $50, log "No discount available."

















9. Write a program to calculate the monthly charge for a mobile data plan based on data
usage:
Data Usage Charge
a. Up to 2Gb Rs 200
b. 2-10Gb Rs 200 + Rs 50 per Gb over 2 Gb
c. Above 10 Gb Rs 600 + Rs 50 per Gb over 10 Gb
 Example:If the data usage is 15 GB, calculate the total charge.








10. Write a program to calculate the parking fee based on hours parked:
Hours Parked Charge
a. Upto 1 hour Rs 20
b. 2-5 Hour Rs 20 + Rs 10 per Hour over 1 hour
c. Above 5 Hour Rs 60 + Rs 15 per Hour over 5 Hours
Example: If the parking duration is 8 hours, calculate the total fee













1. Write a program to check if a number is positive, negative, or zero using if–else-if.










2. Ask the user’s age and check using a ternary operator whether they are an adult or minor.














3. Check if a number is divisible by 2 AND 3 using logical operators (&&, ||).














4. Use nested if to check login:
•	If username is "admin"
 Inside check: if password is "1234"
  Print "Login successful"
 Else print "Wrong password".















5. Use switch-case to print the day of the week based on a number (1–7).













6. Check if a given temperature:
•	35 → "Very Hot"
•	25–35 → "Warm"
•	15–25 → "Cool"
•	< 15 → "Cold"
(Use else-if ladder)














7. Using logical operators, check if a user is eligible for a loan:
•	Age ≥ 21
•	Salary ≥ 25000
Both must be true.
















8. Use nested if to check exam result:
•	If marks ≥ 40 → Passed
 Inside check: if marks ≥ 90 → "Excellent"
Else → Failed.
















9. Use a ternary operator to check if a number is even or odd.
10. Use switch-case to evaluate grades:
'A' → Excellent
'B' → Good
'C' → Average
'D' → Poor
Any other input → Invalid grade














11. Check if a number is between 10 and 50 using logical AND.















12. Use nested if to determine movie ticket pricing:
•	If age < 12 → Child ticket
 Inside check: if age < 5 → Free entry
Else if age > 60 → Senior discount
Else → Normal ticket.


















13. Use if-else to check if two strings are equal (case-sensitive).














14. Use switch-case to display month names based on month number.














15. Use nested if to check online shopping order status:
•	If paymentDone is true
 Inside check: if stockAvailable is true → "Order placed"
Else print "Payment pending".
















16. Use a ternary operator to check if a user has enough balance to purchase an item.















17. Using logical OR, check if a number is a weekend day (6 or 7).
















18. Use if-else to check if a given character is a vowel or consonant.
















19. Use switch-case to print traffic signal meaning:
red → Stop
yellow → Ready
green → Go
(default → Invalid signal)
















20. Use nested if to validate ATM withdraw:
•	If accountActive
 Inside check: if balance ≥ amount → "Withdraw successful"
 Else → "Insufficient balance"
Else → "Account inactive"














