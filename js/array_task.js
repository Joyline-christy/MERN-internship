// 1
let fruits1 = ["apple","orange","strawberry","mango","banana"];
fruits1.push("jackfruit");
console.log(fruits1);

// 2
fruits1.pop();
console.log(fruits1);

// 3
fruits1.unshift("peaches");

// 4
fruits1.shift();
console.log(fruits1);

// 5
console.log(fruits1.length);

// 6
let strFruits = fruits1.join(", ");
console.log(strFruits);

// 7
let colors1 = ["red","yellow","orange","green","black"];
console.log(colors1[colors1.length - 1]);

// 8
colors1.push("violet");
colors1.push("blue");
colors1.shift();
console.log(colors1);

// 9
let sentenceArr = ["I","like","apple,","banana,","orange"];
let sentence = sentenceArr.join(" ");
console.log(sentence);

// 10
sentenceArr.push("and mango");
sentenceArr.pop();
console.log(sentenceArr);

// 11
let animals1 = ["dog","cat","cow","monkey","elephant"];
if (animals1.includes("dog")) {
  console.log("dog present");
} else {
  console.log("not present");
}

// 12
console.log(animals1.indexOf("cat"));

// 13
let combinedArr = sentenceArr.concat(animals1);
console.log(combinedArr);

// 14
let boys = ["John", "Raj", "Arun"];
let girls = ["Priya", "Sara", "Lina"];
let students = boys.concat(girls);
console.log(students);

// 15
let animals2 = ["cat", "dog", "elephant"];
if (!animals2.includes("lion")) animals2.push("lion");
console.log(animals2);

// 16
let cities = ["Madurai", "Chennai", "Coimbatore"];
console.log(cities.indexOf("Chennai"));

// 17
let letters1 = ["a", "b"], letters2 = ["c", "d"], letters3 = ["e", "f"];
let mergedLetters = letters1.concat(letters2, letters3);
console.log(mergedLetters);

// 18
let fruits2 = ["apple", "mango", "banana"];
console.log(fruits2.includes("watermelon"));

// 19
let numSet1 = [10, 30], numSet2 = [20, 5];
let sortedNums = numSet1.concat(numSet2).sort((a,b)=>a-b);
console.log(sortedNums);

// 20
let sub1 = ["Math"], sub2 = ["English"], sub3 = ["Science"];
let subjects = sub1.concat(sub2, sub3);
console.log(subjects);

// 21
let numbers1 = [10,20,30,40,50];
console.log(numbers1.slice(1,4));

// 22
let fruits3 = ["apple","banana","cherry"];
fruits3.splice(1,1);
console.log(fruits3);

// 23
let fruits4 = ["apple","cherry"];
fruits4.splice(1,0,"grape");
console.log(fruits4);

// 24
let nums1 = [5,10,15,20,25];
console.log(nums1.slice(0,3));

// 25
let animals3 = ["cat","dog","lion"];
animals3.splice(1,1,"tiger");
console.log(animals3);

// 26
let arrNums = [1,2,3,4,5];
arrNums.splice(1,3);
console.log(arrNums);

// 27
let colors2 = ["red","blue","green"];
colors2.splice(1,0,"yellow","purple");
console.log(colors2);

// 28
let numbers2 = [1,2,3,4,5];
console.log(numbers2.slice(-2));

// 29
let arrOriginal = [10,20,30];
let arrClone = arrOriginal.slice();
console.log(arrClone);

// 30
let oldArray = [100,200,300];
let newArray = oldArray.slice();
newArray.push(400);
console.log("Original:", oldArray);
console.log("New Copy:", newArray);

// 31
let arr1=[10,20,30,40,41,42,43,44,45]
arr1.forEach((num)=>console.log(num)
)
// 32
 arr1.map((num)=>console.log(num*num)
 )
// 33
let arr2=["joy","leena","james","ponmani"]
arr2.map((name)=>console.log(name.toUpperCase())
)
// 34
let res=arr1.filter(num=>{return num%2==0})
console.log(res);

// 35
let arr3=["ajay","bala" ,"anu","deepa","afreen"]
let res3=arr3.filter(name=>{
    return  name.slice(0,1)==="a"})
console.log(res3);
// 36
arr3.forEach(name=>{
    console.log(`student : ${name}`)})

// 37
let arr4 =[2,4,6,8]
let res4=arr4.map(num=>{
  return num*num}) 
console.log(res4);

// 38
let arr5=[-3,4,5,-6,7,-8,-9]
let res5=arr5.filter(num=>{
  return num<0
})
console.log(res5);
// 39
let arr6=["arun","sam","Karthik","mathew"]
let res6=arr6.map(name=>{
  return "mr."+name
})
console.log(res6);
// 40
// 41
let arr7=[5,10,15,20]
let res7=arr7.reduce((i,num)=>i+num
,0);
console.log(res7);
// 42 
let arr8=[5,10,15,20]
let res8=arr8.reduce((i,num)=>i*num
,1);
console.log(res8);
// 43
let arr9=[12,8,3,90,56,1]
console.log(arr9.sort((a,b)=>a-b));

// 44
console.log(arr9.reverse());
// 45
console.log(arr9.find(num=>num>50));
// 46
let arr10=[10,20,30,45,56,67,78,101]
console.log(arr10.some(num=>num>100));
// 47

let arr11=[100,200,300,450,560,670,780,101]
console.log(arr11.every(num=>num>=100));
// 48
let names=["dhivya","anu","ishu","bala","frank"]
console.log(names.sort());

// 49
console.log(names.reverse());
// 50
let arr12=[1,2,3,4,5,6,7,8]
console.log(arr12.filter(num=>num%2==0).reduce((i,num)=>i+num,0))