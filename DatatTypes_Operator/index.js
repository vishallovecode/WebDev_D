
// String Data Types
// Ways for creating string data types

// Way:1

let collegeName= "Newton School Of Technology"

// Way:2

let studentName = 'Ram Prasad'


// Way:3 Backtick (String template literals)
let friendName= `Yunus`

let language = 'Javascript'

let message= `Hey ${studentName} , Are you learning ${language} ?`

console.log(message)


// Methods of String 


// Accessing character in string

let country  = 'India'; // ['I', 'N', 'D', 'I', 'A']
console.log(country[0])

let course= "Web Application Programming";
// ['W' , 'e', 'b', ' ' ]
console.log(course[3]) //  ' ' 
console.log(course[4])
console.log(course[10])
console.log(course[14])
console.log(course[20])


// Getting length of string 

console.log('Total Characte in course subject:=> ',course.length)
console.log(course[27]) // 



// Checking whether string str1 exist in string str2 (includes)

let str1 = "Kanpur"
let str2 = 'I love Kanpur';

const doesMatch = str2.includes(str1);

console.log('Matching:=>' ,doesMatch)


let str3 = "Kanpur"
let str4 = 'I love kanpur';

const doesMatch1 = str4.includes(str3);

console.log('Matching:=>' ,doesMatch1) // 

// Number 

let age =20;

let percentage = 20.5


// Math.floor , Math.ceil , Math.max ,Math.min
console.log(Math.floor(4.5)) //  4

console.log(Math.ceil(4.5)) //  5

console.log(Math.max(4,5,5,6,1 , 10)) //  10

console.log(Math.min(4.5 , 1,2,3,4)) //  1


// Generating random number  

console.log(Math.random())


const result = Math.random() 



// Generating randowm number 2 To 8

const res = Math.floor(Math.random())*6 +2;

// Boolean  
const check = true ;
const uncheck = false;

// In javascript  '' ,  0 , undefined considered as falsy value;


// Not a Number (NaN)

console.log(4*'y');

console.log(1/0); // Inifinity

console.log(0/1); // 0


// Plus operator 

console.log('4'+2) // 42 (string)

//Minus operator 

console.log('4'-2) // 2


// Equal operators  (==) (===) (strict equal operators)
console.log(2=='2') // true
console.log(2==='2') // false


 //Checking data Types typeof


 let a = '2'+2 //  22
 console.log(typeof a)  // 'string'

 console.log(typeof 2) // 'number'
 console.log(typeof 2.2) // 'number' 