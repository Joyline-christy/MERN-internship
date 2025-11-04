// print num from 1 to 10
for(let i=1;i<=10;i++){
console.log(i);
}
//print even numbers from 1 and 20

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}
    //print multiplication table of 5
    let b=5;
    for(let i=1;i<=10;i++){
        console.log(`${b}*${i}=${i*b}`);
    }  
    //find sum of num from 1 to 100
    let sum=0;
    for(let i=1;i<=100;i++){
        sum=sum+i
    }
    console.log("sum is",sum);
    // all elements of an array
let arr1=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<=arr1.length-1;i++){
   console.log(arr1[i]);
   
}
//factorial of gn num
let fact=5;
let s=1;
for(let i=1;i<=fact;i++){
  s*=i
}
console.log(s);
// all odd num from 1 t0 50
for(let i=1;i<=50;i++){
    if(i%2!=0){
        console.log(i);
    }
   
    }
// reverse a string
let str1="apple";
let rev=[]
for (let i = str1.length-1; i >=0 ; i--) {
   rev.push(str1[i])   
}console.log("rev",rev);
console.log(rev.join(""));
// count no of vowells in string
let str2="contact";
let arr2=["a","e","i","o","u"]
let count=0;
for(let i=0;i<=str2.length-1;i++){
   if(arr2.includes(str2[i])){
       count=count+1
   }
}

console.log(`couni is ${count}`); 

// square of numbers from 1 to 10
let num=[]
for(let i=1;i<=10;i++){
     num.push(i*i)
}
console.log(`numbers are ${num}`);


// while loops

// 1. Print numbers from 1 to 10
let i1 = 1;
while (i1 <= 10) {
  console.log(i1);
  i1++;
}

// 2. Calculate the sum of digits of a number
let num2 = 1234;
let sum2 = 0;
while (num2 > 0) {
  sum2 += num2 % 10;
  num2 = Math.floor(num2 / 10);
}
console.log("Sum of digits:", sum2);

// 3. Print all numbers divisible by 3 between 1 and 50
let i3 = 1;
while (i3 <= 50) {
  if (i3 % 3 === 0) {
    console.log(i3);
  }
  i3++;
}

// 4. Find the factorial of a number
let num4 = 5;
let fact4 = 1;
while (num4 > 0) {
  fact4 *= num4;
  num4--;
}
console.log("Factorial:", fact4);

// 5. Reverse a number (e.g., 123 → 321)
let num5 = 123;
let rev5 = 0;
while (num5 > 0) {
  rev5 = rev5 * 10 + (num5 % 10);
  num5 = Math.floor(num5 / 10);
}
console.log("Reversed:", rev5);

// 6. Print the Fibonacci series up to 10 terms
let a6 = 0, b6 = 1, i6 = 1;
while (i6 <= 10) {
  console.log(a6);
  let next6 = a6 + b6;
  a6 = b6;
  b6 = next6;
  i6++;
}

// 7. Count how many digits are in a number
let num7 = 98765;
let count7 = 0;
while (num7 > 0) {
  num7 = Math.floor(num7 / 10);
  count7++;
}
console.log("Number of digits:", count7);

// 10. Keep asking for input until the user enters "stop"
let input10;
while (true) {
  input10 = prompt("Enter something (type 'stop' to end):");
  if (input10 === "stop") {
    break;
  }
  console.log("You entered:", input10);
}

//  DO...WHILE

// . Print numbers from 1 to 10
let j1 = 1;
do {
  console.log(j1);
  j1++;
} while (j1 <= 10);

// . Display a menu and repeat until the user chooses "Exit"
let choice2;
do {
  choice2 = prompt("Menu:\n1. Option A\n2. Option B\n3. Exit");
  switch (choice2) {
    case "1":
      console.log("You chose Option A");
      break;
    case "2":
      console.log("You chose Option B");
      break;
    case "3":
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid choice");
  }
} while (choice2 !== "3");

// 3 Print the multiplication table of any given number
let num3 = 5;
let j3 = 1;
do {
  console.log(`${num3} x ${j3} = ${num3 * j3}`);
  j3++;
} while (j3 <= 10);

// . Calculate the sum of natural numbers up to n
let n4 = 10;
let sum4 = 0;
let j4 = 1;
do {
  sum4 += j4;
  j4++;
} while (j4 <= n4);
console.log("Sum:", sum4);

// . Keep asking for a password until the user enters the correct one
let password5;
do {
  password5 = prompt("Enter password:");
} while (password5 !== "1234");
console.log("Access Granted");

// . Print even numbers from 1 to 20
let j6 = 2;
do {
  console.log(j6);
  j6 += 2;
} while (j6 <= 20);

// . Count digits of a number
let num7b = 12345;
let count7b = 0;
do {
  num7b = Math.floor(num7b / 10);
  count7b++;
} while (num7b > 0);
console.log("Number of digits:", count7b);

// . Keep taking numbers until total exceeds 100
let total10 = 0;
let inputNum10;
do {
  inputNum10 = parseInt(prompt("Enter a number:"));
  total10 += inputNum10;
} while (total10 <= 100);
console.log("Total exceeded 100! Final total:", total10);





    
