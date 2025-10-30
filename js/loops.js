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



    
