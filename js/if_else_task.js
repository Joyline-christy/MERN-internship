1. 
let number1 = -3;
if (number1 > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

2. 
let number2 = 9;
if (number2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

3. 
let userAge = 20;
if (userAge >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible");
}

4. 
let dataValue = "hello";
if (typeof dataValue === "number") {
  console.log("Number");
} else if (typeof dataValue === "string") {
  console.log("String");
} else if (typeof dataValue === "boolean") {
  console.log("Boolean");
} else {
  console.log("Other Type");
}

5. 
let numA = 14, numB = 8;
if (numA > numB) {
  console.log(numA + " is greater");
} else {
  console.log(numB + " is greater");
}

6. 
let text1 = "Apple", text2 = "apple";
if (text1 === text2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

7. 
let number3 = 50;
if (number3 % 5 === 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not Multiple of 5");
}

8. 
let number4 = 0;
if (number4 === 0) {
  console.log("Zero");
} else {
  console.log("Not Zero");
}

9. 
let studentMarks = 33;
if (studentMarks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

10. 
let temperature = 32;
if (temperature < 20) {
  console.log("Cold");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}

11. 
let numX = 12, numY = 25, numZ = 19;
if (numX > numY && numX > numZ) {
  console.log(numX);
} else if (numY > numZ) {
  console.log(numY);
} else {
  console.log(numZ);
}

12. 
let inputYear = 2028;
if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

13. 
let character = "@";
if ("aeiouAEIOU".includes(character)) {
  console.log("Vowel");
} else if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
  console.log("Consonant");
} else if (!isNaN(character)) {
  console.log("Number");
} else {
  console.log("Special Symbol");
}

14. 
let inputUser = "Admin", inputPass = "1234";
if (inputUser === "admin" && inputPass === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

15. 
let score = 78;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}

16. 
let number5 = -8;
if (number5 > 0 && number5 % 2 === 0) {
  console.log("Positive Even");
} else if (number5 > 0 && number5 % 2 !== 0) {
  console.log("Positive Odd");
} else {
  console.log("Negative Number");
}

17. 
let inputValue = "  ";
if (typeof inputValue === "string" && inputValue.trim() !== "") {
  console.log("Valid String");
} else {
  console.log("Invalid");
}

18. 
let totalPrice = 700;
if (totalPrice > 1000) {
  console.log("20% Discount");
} else if (totalPrice > 500) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

19. 
let numCompare1 = 5, numCompare2 = "5";
if (numCompare1 == numCompare2) {
  console.log("Equal using ==");
}
if (numCompare1 === numCompare2) {
  console.log("Equal using ===");
} else {
  console.log("Not Equal with ===");
}

20. 
let number6 = 12, number7 = 3, operator2 = "/";
if (operator2 === "+") {
  console.log(number6 + number7);
} else if (operator2 === "-") {
  console.log(number6 - number7);
} else if (operator2 === "*") {
  console.log(number6 * number7);
} else if (operator2 === "/") {
  console.log(number6 / number7);
} else {
  console.log("Invalid Operator");
}


// switch
// 1. Check Positive, Negative, or Zero
let num01 = 10;
switch (true) {
  case (num01 > 0):
    console.log("Positive");
    break;
  case (num01 < 0):
    console.log("Negative");
    break;
  default:
    console.log("Zero");
}

// 2. Even or Odd
let num02 = 5;
switch (num02 % 2) {
  case 0:
    console.log("Even");
    break;
  default:
    console.log("Odd");
}

// 3. Voting Eligibility
let ageX = 17;
switch (true) {
  case (ageX >= 18):
    console.log("Eligible to Vote");
    break;
  default:
    console.log("Not Eligible");
}

// 4. Check Data Type
let dataY = true;
switch (typeof dataY) {
  case "number":
    console.log("It's a number");
    break;
  case "string":
    console.log("It's a string");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log("Unknown type");
}

// 5. Greater Number
let val1 = 8, val2 = 12;
switch (true) {
  case (val1 > val2):
    console.log("val1 is greater");
    break;
  case (val2 > val1):
    console.log("val2 is greater");
    break;
  default:
    console.log("Both are equal");
}

// 6. Compare Two Strings
let strX = "hello", strY = "Hello";
switch (strX === strY) {
  case true:
    console.log("Strings are equal");
    break;
  default:
    console.log("Strings are not equal");
}

// 7. Multiple of 5
let numC = 25;
switch (numC % 5) {
  case 0:
    console.log("Multiple of 5");
    break;
  default:
    console.log("Not a multiple of 5");
}

// 8. Check if Zero
let numD = 0;
switch (numD) {
  case 0:
    console.log("Zero");
    break;
  default:
    console.log("Not Zero");
}

// 9. Pass or Fail
let marksX = 32;
switch (true) {
  case (marksX >= 35):
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}

// 10. Temperature Check
let tempX = 28;
switch (true) {
  case (tempX < 20):
    console.log("Cold");
    break;
  case (tempX >= 20 && tempX <= 30):
    console.log("Warm");
    break;
  default:
    console.log("Hot");
}

// 11. Largest of Three Numbers
let a1 = 15, a2 = 20, a3 = 10;
switch (true) {
  case (a1 > a2 && a1 > a3):
    console.log("a1 is largest");
    break;
  case (a2 > a1 && a2 > a3):
    console.log("a2 is largest");
    break;
  default:
    console.log("a3 is largest");
}

// 12. Leap Year Check
let yearX = 2024;
switch (true) {
  case ((yearX % 4 === 0 && yearX % 100 !== 0) || yearX % 400 === 0):
    console.log("Leap Year");
    break;
  default:
    console.log("Not Leap Year");
}

// 13. Character Type
let charX = "a";
switch (true) {
  case ("aeiou".includes(charX.toLowerCase())):
    console.log("Vowel");
    break;
  case (/[a-zA-Z]/.test(charX)):
    console.log("Consonant");
    break;
  case (/[0-9]/.test(charX)):
    console.log("Number");
    break;
  default:
    console.log("Special Symbol");
}

// 14. Login Credentials
let userX = "admin";
let passX = "1234";
switch (true) {
  case (userX === "admin" && passX === "1234"):
    console.log("Login Success");
    break;
  default:
    console.log("Invalid Credentials");
}

// 15. Grade Check
let gradeX = 85;
switch (true) {
  case (gradeX >= 90):
    console.log("A");
    break;
  case (gradeX >= 80):
    console.log("B");
    break;
  case (gradeX >= 70):
    console.log("C");
    break;
  default:
    console.log("Fail");
}

// 16. Number Sign and Parity
let numE = -5;
switch (true) {
  case (numE > 0 && numE % 2 === 0):
    console.log("Positive Even");
    break;
  case (numE > 0 && numE % 2 !== 0):
    console.log("Positive Odd");
    break;
  case (numE < 0):
    console.log("Negative Number");
    break;
  default:
    console.log("Zero");
}

// 17. Data Type and Value
let valX = "Hello";
switch (true) {
  case (typeof valX === "string" && valX !== ""):
    console.log("Valid String");
    break;
  default:
    console.log("Invalid");
}

//  18. Discount Calculation
let priceX = 700;
switch (true) {
  case (priceX > 1000):
    console.log("20% Discount");
    break;
  case (priceX > 500):
    console.log("10% Discount");
    break;
  default:
    console.log("No Discount");
}

//  19. Compare Using == and ===
let numF = "5";
let numG = 5;
switch (true) {
  case (numF === numG):
    console.log("Strictly Equal (value and type)");
    break;
  case (numF == numG):
    console.log("Equal (value only)");
    break;
  default:
    console.log("Not Equal");
}

//  20. Simple Calculator
let calcA = 10, calcB = 5;
let operatorX = "*";

switch (operatorX) {
  case "+":
    console.log(calcA + calcB);
    break;
  case "-":
    console.log(calcA - calcB);
    break;
  case "*":
    console.log(calcA * calcB);
    break;
  case "/":
    console.log(calcA / calcB);
    break;
  default:
    console.log("Invalid Operator");
}