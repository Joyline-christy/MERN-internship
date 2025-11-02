// palindrome
let str1="liril";
let rev=[]
for (let i = str1.length-1; i >=0 ; i--) {
   rev.push(str1[i])   
}console.log("rev",rev);
let str2=rev.join("")
if(str1===str2){
    console.log("palindrome");    
}else{
    console.log("not a palindrome");
    
}

// first letter of every word uppercase
let str3="tiger is the national animal";

let arr3=str3.split(" ")

console.log(arr3);
for(let i=0;i<arr3.length;i++){
    arr3[i]=arr3[i][0].toUpperCase() + arr3[i].slice(1)
}
let res3=arr3.join(" ")
console.log(res3);

// replace all string spaces to -
let res4=res3.replaceAll(" ","-")
console.log(res4);
// no of times word appear in sentence
let str4="i have a pen which looks like a pen shape,the pen is black in color"
let arr4=str4.split(" ")
for (let i=0;i<arr4.length;i++){
           arr4[i]      
}          
// extract only digits
let str5="ab123cd4569";
let arr5=["0","1","2","3","4","5","6","7","8","9"];
let newarr=[]
for(let i=0;i<str5.length;i++){
    if( arr5.includes(str5[i])){
       newarr.push(str5[i])
    }
}
console.log(newarr);

// string contains another substring
let str6=`abcd"hi"efg`;
let substr6="hi";
if(str6.toLocaleLowerCase().includes(substr6.toLocaleLowerCase()))
{
    console.log("string found");
    
}else{
    console.log("string not found");
}
// trim spaces both ends
let str7="    hello  ";
let str8=str7.trim()
console.log(str8);
// count how many times each character appear in string
let str9="characteristics";
let charcount={}
for(char of str9){

    charcount[char]=(charcount[char] || 0)+1;
    console.log("characters present");
    
console.log(charcount);
}
// find the longest word in sentence
let str10="hi this is max,i love travelling"
let arr10=str10.split(" ")
let longest=""
for(char of arr10){
   if (char.length>longest.length){
       longest=char
   }
}
console.log(longest);
// anagrams of each other
let str12="stop";
let str13="spot";
let count=0;
for (let i = 0; i < str12.length; i++) {
    if(str13.includes(str12[i])) {
        count=count+1
        
    }  
}if(count===str12.length && count===str13.length){
    console.log("anagram");    
}else{
    console.log("not anagram");  
}

let str14="stop"
let str15="spotW"
str14=str14.split("").sort().join("");
str15=str15.split("").sort().join("");
if(str14===str15){
 console.log("ANAGRAM");
 
}else{
    console.log("NOT ANAGRAM");
    
}

// convert string 
let str11="hello_world_program"
let res5=str11.replaceAll("_"," ")
console.log(res5);
// index of second occurance of gn letter
let str18="anagram"
let str19="a"

let first=str18.indexOf(str19)
let second=str18.indexOf(str19,first+1);
console.log(second);

if(second !== -1){
   console.log("sec index is",second);
   
}else{
    console.log("letter does not occur");
    
}
;

// REMOVE DUPLICATE CHAR
let str16="anagram"
let str17=""

for(let i=0;i<str16.length;i++){
     if(!str17.includes(str16[i])){
        str17+=str16[i]
     }
}
console.log(str17);

// math functions
// 1
let rand1 = Math.floor(Math.random() * 100) + 1;
console.log(rand1);

// 2
let num = 12.34567;
console.log(Number(num.toFixed(2)));

// 3
let arr = [5, 10, 2, 8, 20];
console.log(Math.max(...arr), Math.min(...arr));

// 4
let sqrtArr = arr.map(n => Math.sqrt(n));
console.log(sqrtArr);

// 5
let rand2 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
console.log(rand2);

// 6
let a = 10, b = 25;
console.log(Math.abs(a - b));

// 7
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// 8
let p = 1000, r = 5, t = 2;
let ci = p * (Math.pow((1 + r / 100), t)) - p;
console.log(ci);

// 9
let radius = 7;
let area = Math.PI * Math.pow(radius, 2);
console.log(area);

// 10
let n = 49;
console.log(Number.isInteger(Math.sqrt(n)));

// 11
let val = 5.7;
console.log(Math.ceil(val), Math.floor(val));

// 12
console.log(Math.pow(2, 5));

// 13
let nums = Array.from({length:10},()=>Math.floor(Math.random()*100));
let avg = nums.reduce((a,b)=>a+b,0)/nums.length;
console.log(nums, avg);

// 14
let rad = Math.PI / 4;
let deg = rad * (180 / Math.PI);
let toRad = deg * (Math.PI / 180);
console.log(deg, toRad);

// 15
let factNum = 5;
let fact = Array.from({length:factNum},(_,i)=>i+1).reduce((a,b)=>a*b,1);
console.log(fact);

// date 
// 1
let now = new Date();
console.log(now);

// 2
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());

// 3
let endYear = new Date(now.getFullYear(), 11, 31);
let diffDays = Math.ceil((endYear - now) / (1000 * 60 * 60 * 24));
console.log(diffDays);

// 4
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[now.getDay()]);

// 5
let d1 = new Date('2025-01-01');
let d2 = new Date('2025-05-01');
console.log(d1 < d2 ? "d1 is earlier" : "d2 is earlier");

// 6
let add10 = new Date();
add10.setDate(now.getDate() + 10);
console.log(add10);

// 7
let birth = new Date('2000-03-15');
let age = now.getFullYear() - birth.getFullYear();
if (now.getMonth() < birth.getMonth() || 
   (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) age--;
console.log(age);

// 8
let dd = String(now.getDate()).padStart(2, '0');
let mm = String(now.getMonth() + 1).padStart(2, '0');
let yyyy = now.getFullYear();
console.log(`${dd}-${mm}-${yyyy}`);

// 9
let date1 = new Date('2025-01-01');
let date2 = new Date('2025-02-10');
let daysBetween = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
console.log(daysBetween);

// 10
let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log(firstDay, lastDay);

// 11
let hh = String(now.getHours()).padStart(2, '0');
let min = String(now.getMinutes()).padStart(2, '0');
let sec = String(now.getSeconds()).padStart(2, '0');
console.log(`${hh}:${min}:${sec}`);

// 12
let day = now.getDay();
console.log(day === 0 || day === 6 ? "Weekend" : "Weekday");

// 13
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months[now.getMonth()]);

// 14
let future = new Date('2026-01-01');
let countdown = Math.ceil((future - now) / (1000 * 60 * 60 * 24));
console.log(countdown);

// 15
let oneHourLater = new Date(now.getTime() + (60 * 60 * 1000));
console.log(oneHourLater);





