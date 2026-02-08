//Lejla Lukacevic
//variables
const birth_year=2002;
let current_age=25;
const year=2030;
let future_age=year-birth_year;
console.log(future_age);
//reassigning the const
//birth_year=2000;//gets an error because you can't reassign a const variable
//data types
//String
let nickname="Lemon";
console.log(typeof nickname);
//Number
let fav_num=42;
console.log(typeof fav_num);
//Boolean
let is_student=true;
console.log(typeof is_student);
//undefined
let games;
console.log(typeof games);
//null
//returns an object
//it's a bug in js because null is not an object  but still returns an object
//let friends=null;
//console.log(typeof friends);
//Arrays
let food=["pizza","fries","chicken","nuggets","chocolate"];
//add new food to the end of the array
food.push("ice cream");
//remove the first food
food.shift();
//find the index of fries
let index_of_fries=food.indexOf("fires");
//use .map to make all the food uppercase
let uppercase_food=food.map(function(item){
    return item.toUpperCase();
});
console.log(uppercase_food);
//objects
//Create a student object with: name, age, courses (array), isEnrolled (boolean)
let student={
    name:"Lejla",
    age:24,
    courses:["Computer Science","Math","English"],
    isEnrolled:true,
//Add a new property for GPA
    GPA:3.0
//Access the second course in the courses array
}
console.log(student.courses[1]);
//Use object destructuring to extract name and age
const {name, age} = student;
console.log(name, age);
//functions
//Write a function that takes two numbers and returns their sum
//function sum(num1,num2){
   // return num1+num2;
//}
//rewrite it as an arrow function
const sum=(num1,num2)=>{
    return num1+num2;
}
//write a function that takes an array and returns the largest number
function findLargest(arr){
    let Largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>Largest){
            Largest=arr[i];
        }
    }
    return Largest;
}
//Write a function that takes a string and returns it reversed
function reverseString(str){
    return str.split("").reverse().join("");
}
//bonus: Browser vs Node.js
 //List 3 differences between running JS in browser vs Node.js
 //Broswer: client-sided,has web api,uses window
 //Node.js: server-sided,system-level api,uses global
 //What is the window object? Is it available in Node?
 //window object is a global object in browser,it represents the browser window. Not aviable in Node.js
 //What is the global object in Node.js?
 //global object is a global variable in Node.js that provides access to global functions and variables. It is similar to the window object in the browser.
 