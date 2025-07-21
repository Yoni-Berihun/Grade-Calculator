import promptsync = require('prompt-sync');
/*import * as readline from 'prompt-sync';

// console.log("Hello world ");
// const firstName: String = "yoni";
// console.log(firstName);
// //firstName="Abush";
// console.log("the name of the student is : "+firstName );

// let age:number=55;
// console.log("the age of the man is :"+age);

// let scores:number[]=[1,2,55,63,78];
// console.log(scores[1]);

// let names:String[]=["abush","abebe","nati","yoni"];
// console.log(names[2]);
// let z=names.length;
// console.log(z);
// names.push("belachew");
// console.log(names[4]);

// interface User
// {
//     id:number;
//     userName: String;
//     // isPresent:boolean;
//     // isBored: boolean;
// }
// const user: User={
//     id:1,
//     userName:"meow"
// };  
// console.log("hello \n the s of our user is: "+user.id+" and the userName is : "+user.userName);



// Goal: Greet a user and then update their status.
// 
// let user = "Alice";
// console.log(`Welcome, ${user}`);

// user = "Bob"; 
// console.log(`User updated to: ${user}`);
// //since usse is constant it ca't be re initialized

// // Goal: Store a list of student ages.
// let studentAges: number[] = [14, 15, 16];
// studentAges.push(17); 

// console.log(studentAges);

// //it array of numbers element must not be in quotation

// // Goal: Define and create a product object.
// interface Product {
//   name: string;
//   price: number;
// }

// const laptop: Product = {
//   name: "Super Laptop",
//   price: 1200
// };

// console.log(laptop.price); 

//Orice is not defined it have to be small letters to be known

// Goal: Check if a user-entered score is a passing grade.
 import promptSync = require('prompt-sync');
// const prompt = promptSync();
// const userScore = Number( prompt("Please enter the score: "));

// if (userScore >= 60) { 
//   console.log("You passed!");
// } else {
//   console.log("You failed.");
// }

// const promp = promptSync();
// const userName =promp("please enter ur name : ");
// console.log("welll.... your name is "+ userName);

//let mark: number;
//const prompt = promptSync();
const userScore = Number( prompt("Please enter the score: "));
//switch(userScore)
/* {
case 90:
    console.log("Excellent!1");
    break;
case 80:
    console.log("hmmm.... GOood!");
    break;
default:
    console.log("well, u get F!!");


} */ 

    //Home Work 
    console.log("this is SImple student grade calculator");
    const prompt = promptsync();
    const studentName =prompt(" What is your Full name..?  ");
    
    console.log("Okay Dear "+studentName+" I need you to tell me your numeric scores in three subjects.... ")
 const mathScore =Number(prompt("Well now enter your numeric result in Maths Subject  "));
 const scienceScore = Number(prompt("okay now i need you to insert ur numeric result in the Science Subject... "));
const englishScore  =Number (prompt("Now tell me your numeric result in the English subject....... "));
 let studentResult: number  []= [mathScore,scienceScore,englishScore];
let sum:number=0;
 for(let i=0;i<studentResult.length;i++)
{ 
 sum+=studentResult[i]; 
}

let Average:number =0;
Average=sum/3;
let grade:String=" ";
if(Average >=90)
{
    grade="A";
}
else if(Average >=80 && Average<=89.9)
{
    grade="B";
}
else if(Average >=69.9 && Average<=70)
{
    grade = "C";
}
else if(Average >=60 && Average <=69.9)
{
    grade="D";
}
else
    grade="F";

interface Student
{
    Name:String,
    finalGrade:String,
    averageScore:number
}
const Student1 : Student={
 Name:studentName || "hhh.. no name",
 finalGrade:grade,
 averageScore:Average

};
console.log("Student Report For: "+Student1.Name+" --- \n Average score: "+Student1.averageScore+" Final Grade: "+Student1.finalGrade);

