

// const array  = [1,2,34,5];



// // adding item to array at the last 

// array.push(39 , 30 , 32)

// console.log(array)


// //  adding at the first


// array.unshift('45' ,  '67')

// console.log(array)

//  // checking what will return array.pop
//  // removing item from last
// array.pop()

// console.log('Array pop', array)


// // removing item from first


// array.shift()

// console.log('Array shift', array)





// const sentence = 'Vishal Sharma';

// const arrayData =  sentence.split(' ')

// // console.log(arrayData)


// // const arrayData1 =  sentence.split('')

// // console.log(arrayData1)





// // Spread Operator (...)

// const myNo = [1,2,3,4,5];
// console.log('Spreading array' , ...myNo);

// // Finding maximum number in given array 
// const marks = [90 , 89 , 79 , 60 , 50];

// const maximum  = Math.max(...marks); // here we spread array  and result will be  Math.max(90, 89, 79 , 60 , 50)

// console.log('maximum' , maximum)


// //  Concatenate given two array into single array 

// const ar1 = [3,4,5];

// const arr2 = ['A' , 'B' , 'C']

// const arr3 = [...ar1 , ...arr2]


// console.log('resultant array' , arr3)



// // Rest Operator 



// function genericAdd(a,b , ...restParam) {
//         let sum = a+b;
//         for(let i=0;i<restParam.length ;i++) {
//             sum = sum +restParam[i]
//         }
//         return sum;
// }

// genericAdd(1,2 , 4,5 , 6,7,8,9)




// //  I have given marks of the students in array format , i want to sort that  into ascending order

// const studentMarks =  [10 , 40 , 200 , 100 , 69 , 89];

// studentMarks.sort() //  this will modify original array

// console.log('studentMarks' , studentMarks)



// // // Javascript sort method does not sort number in proper way , it will do wrong sorting 

// // // For number  to sort we need to pass one compare function to the given sort function


// // // // ascending order
// // // function compareFunc(a,b) {
// // //     return a-b
// // // }

// // // // descending order
// // function compareFunc(a,b) {
// //     return b-a
// // }
// // studentMarks.sort(compareFunc)
// // console.log('studentMarks sorted' , studentMarks)

// // // // const func = (a,b)=>{
// // // //     return a-b
// // // // }
// // // // studentMarks.sort(func)
// // // // studentMarks.sort((a,b)=>{
// // // //     return a-b
// // // // })
// // // // 
// // // const aplhabet = ['a' , 'b' , 'c' , 'd'];


// // // console.log(aplhabet.sort())





// // // //  Find method in javascript array .



// // // const array3 = [900 , 600 , 200 , 399];

// // // function checker(elem) {
// // //     console.log(elem)
// // //     return elem%2 !=0
// // // }

// // // const result  = array3.find(checker)
// // // console.log('Result' ,result) //  399 


// // //  // Given a list of adult  age , find the first person which is applicable for the voting in delhi and first time



// //  const adults = [15 , 16 , 17 , 20  , 80 , 18];


// // //  Iterating through given array  , Javascript array higher order functions ;


// // function multiply(elem , idx , array) {
// //     console.log('elem=>' , elem , 'idx=>' , idx ,  'array=>' , array)

// //     console.log('elem*2' ,elem*2)
// // }

// // adults.forEach(multiply)



// // //  Includes 



// const studentsName = ['A' , 'B', 'C' , 'D', 'E'];

// // I want to check whether 'D' EXIST in given array (studentsName)  if exist return true else false
// //  For this scenario we can use includes  whi h check whether given element exist in given array or not

// const check = studentsName.includes('D');

// console.log('Check' , check)



// const data = [1,2,3,3 , '4' , 'hello4' , '4444', 'Vishal'];

// // check whether numeric string  '4' exist in given array or not 




// // Given numbers please find the square of each numbers


// const arrayN = [4,5,6,7,8,8,9];


// function square(element , index) {
//     //  element*element;
//     console.log(element*element)
// }

// const result =  arrayN.map(square);


// console.log('Result' , result)



// //  Given a array of numbers , return array of 
// // string if number is  even return 'even' else return 'odd'


// const N = [3,4,5,6,7,8];

// //  ['Odd' , 'Even' , 'Odd' , 'Even' ,  'Odd' , 'Even']



// function isEven(elemen) {
//     if(elemen%2===0) {
//         return 'Even'
//     }  else {
//         return 'Odd'
//     }
// }

// const result1 =  N.map(isEven);

// console.log(result1) // 


// const NN = [3,4,5,6,7,8 ,  '10'];
// // From above given array  , return the array of odd number only

// function isOdd(element , index) {
//     return element%2!==0;

// }
// const result3 = NN.filter(isOdd)

// console.log(result3) // [[3,5,7]]



// // Given array of element , first  multiply element by 3 and after that  return the odd number



// const array4= [3,4,5,6,6,7,8,8];

// const multiply  =(elem)=>{
//     return  elem*3
// }
// // const result4 = array4.map(multiply)


// const checkOdd =(elem)=>{
//     return elem%2!==0
// }

// // const res4 = result4.filter(checkOdd)

// // console.log(res4 ,  'res4') 


// const result4 = array4.map(multiply).filter(checkOdd);


// // Reduce method



// const NM =  [2,3,4,5,6,6,6];

// function sum(acc , element  , index) {
// return acc+element;
// }

// const res5 =  NM.reduce(sum , 0)


// console.log(res5) , 'res5'


// //  Given array of element get the result of multiply of all elements using reduce 

// function multiply1 (acc , elem , index) {
//     return acc*elem
// }
// const res6 =  NM.reduce(multiply1 , 1)

// console.log(res6 , 'res6')








const AA= [2,3,4,5,6];

function actionPrint(elem , index) {
  console.log('Hey I am array elem =>' , elem , 'Hey I am array index=> ,' , index)
}

AA.forEach(actionPrint);;








// function forEach(callback , array)  {
//     for(let i=0;i<ArrayBuffer.length;i++) {
//         callback(array[i] , i )
//     }
// }


const rajaji = [3,4,5,6,7,8,9,10];


// Iterate through the array and logged whether element are even or odd

function printLog(elem , index) {
    // const res =  elem%2==0 ? 'Even': 'Odd';
    if(elem %2 ==0 ){
        console.log('even')
    } else {
        console.log('Odd')
    }

}
rajaji.forEach(printLog)





//  Map functions in Javascript\


const MMM = [2,4,5,6,7]

function square(elem , index) {
    return elem*elem
}
const result12  =  MMM.map(square)


console.log(result12) // [4, 16 , 25 , 36 , 49]



function square(elem , index) {
    const data = elem*elem;
}
const result123  =  MMM.map(square)


console.log(result123) // [undefined, undefined , undefined , undefined , undefined]


// dummy code

// function Map (callback , array) {
//     let result  = [];
//     for(let i=0;i<array.length;i++) {
//         const value =  callback(array[i] , i)
//         result.push(value)
//     }
//     return result;
// }




//  Given array of element find return a new array   with string value even and odd 
// if number is even  , then write 'even' , else 'odd'

const arrr = [4,5,5,67,8];

const modifyNumber = (elem , index) => {
    return  elem%2 === 0 ? 'Even' : 'Odd'
}   

const res44 =  arrr.map(modifyNumber);

console.log(res44)


//  Filter method in javascript 





const array33 = [30 , 2 , 40 , 60 , 10 , 15 , 25];

function isValid(elem , index) {
 return elem%2 ==0  && elem%5 == 0;
}
const res33 = array33.filter(isValid);

console.log(res33)



const array333 = [30 , 2 , 40 , 60 , 10 , 15 , 25];
 //Filter all even number from given list of array elements;




 const response4 =  array333.filter((elem , index)=>{
    return elem%2 ==0
 }) 

console.log(response4)





//  Given array of element find sum of given array without using for loop  and forEach 


const values = [3,4,5,6];

function actions (acc , elem , idx) {
    return acc+elem;
}

const res22 =  values.reduce(actions ,  0); // here 0 is initial value

console.log(res22)