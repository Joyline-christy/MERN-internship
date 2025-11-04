//arithmetic operator
//1 Write a program to find the sum, difference, product, and quotient of two numbers.
let a=10;
let b=20;
console.log("sum is",a+b,"\ndiffer is",a-b,"\nproduct is",a*b,"\nquotient is",a%b);
//2 Take three numbers and find their average.

let c=30;
console.log("average is  "+(a+b+c)/3);
//3 Calculate the area of a rectangle (length × breadth).
console.log("area of rect  "+a*b);
// 4 Convert temperature from Celsius to Fahrenheit using a formula.
console.log("farenheit",9/5*a+32);

//5 Find the remainder when one number is divided by another.
console.log("remainder "+a/b);

//assignment operator
//6 Assign a number to a variable and then increase it by 10 using the += operator.
a+=10;
console.log("a is",a);
//7 Write a program that multiplies a number by 5 using *=.

a*=5;
console.log("a is",a);
//8 Use -= to decrease the value of a variable by 3.
a-=3;
console.log("a is",a);
//9 Divide a variable by 2 using /= and print the updated result.

a/=2;
console.log();
//10 Combine multiple assignment operators in one example.
let aa=10
let bb=30
let cc=40
let ee=50
let final=aa+bb;
final*=cc;
final-=ee
console.log("result is",final);
//comparision operator

//11 Compare two numbers and print whether they are equal or not.
console.log(a===b);
//12. Check if one number is greater than another.
console.log(a>=b);

//13. Compare two string variables to check if they are the same.
let str1="joy"
let str2="joy"
console.log(str1==str2);

//14. Test whether a number is less than or equal to 100.
console.log(a<=100);

//15. Write a program to check if two numbers are strictly equal (===).
b=48.5
 console.log(a===b);
// 16. Check if a number is between 10 and 50 using logical AND (&&).
console.log(a>10 && a<50);

// 17. Check if a number is less than 10 OR greater than 100 using ||.
console.log(a<10 || a>100);

// 18. Use NOT (!) to invert a Boolean value.
console.log(!true);

// 19. Combine && and || in one statement to test a complex condition.

console.log((a===48.5 && a>90)||(a===48.5 && a<20));

// 20. Check if a student passes (marks ≥ 35) using logical operators.
let mark=49
let marks=35
console.log(mark && 35 )
//21. Create a counter that increases by 1 using ++.
a++
console.log(a)

//22. Write a program that decreases a variable using --.
a--
console.log(a);

// 23. Demonstrate the difference between pre-increment (++x) and post-increment (x++).
let pre=20
let res1=pre++
let res2=++pre
console.log(res1,res2);

// 24. Show how decrement works in a loop from 10 to 1.
for(a=20;a>=10;a--){
    console.log(a);
    
}
// 25. Use ++ and -- in the same expression and observe the result.

a++
console.log(a); //error

// 26. Check if a number is even or odd using the ternary operator.
let res_1=a%2==0 ?"true":"false";
console.log(`result is ${res_1}`);

// 27. Use the ternary operator to find the greater number between two variables.
let res_2=a%2==0 ?"true":"false";
console.log(`result is ${res_2}`);

// 28. Write a one-line ternary statement to check if a person can vote (age ≥ 18).
let res_3=a>18 ?"can vote":"can't vote";
console.log(res_3);


// 29. Use nested ternary to find if a number is positive, negative, or zero.
let res_4=a===0 ? "zero":(a>0 ?"positive":"negative" );
console.log(res_4);


// 30. Check whether a string is empty or not using the ternary operator.
let string1=""

console.log(string1 ? "not empty":"empty");



// 36. Declare variables of different data types (string, number, boolean) and perform operations on them.
let var1="joyline";
let var2=123
let var3=false;
console.log(var1+var2);
console.log(var1*var2);
console.log(var3-var2);

// 37. Write a program that swaps two numbers using arithmetic operators (without third variable).
let num1=10
let num2=20
num2=num1+num2
num1=num2-num1
num2=num2-num1

console.log(num2,num1);

// 38. Use arithmetic + comparison + logical operators together in one example.
let n1 = 10;
let n2 = 5;
let n3 = 15;

// Arithmetic
let sum = a + b;
let diff = c - a;

// Comparison
let isGreater = sum > diff; // 15 > 5 → true

// Logical
if (isGreater && c > 10) {
  console.log("Both conditions are true!");
} else {
  console.log("At least one condition is false.");
}

// 39. Use a ternary operator to display whether a person’s score is “Pass”, “Fail”, or “Excellent”.
let result=mark>35 ? "pass":"fail" 
console.log(result);


// 40. Combine all basic operators in one mini-program (calculator type).

let num_1 = 20;
let num_2 = 10;

console.log("Addition:", num_1 + num_2);
console.log("Subtraction:", num_1 - num_2);
console.log("Multiplication:", num_1 * num_2);
console.log("Division:", num_1 / num_2);
console.log("Modulus (Remainder):", num_1 % num_2);







