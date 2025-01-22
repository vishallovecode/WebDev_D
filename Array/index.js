

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



// // Javascript sort method does not sort number in proper way , it will do wrong sorting 

// // For number  to sort we need to pass one compare function to the given sort function


// // // ascending order
// // function compareFunc(a,b) {
// //     return a-b
// // }

// // // descending order
// function compareFunc(a,b) {
//     return b-a
// }
// studentMarks.sort(compareFunc)
// console.log('studentMarks sorted' , studentMarks)

// // const func = (a,b)=>{
// //     return a-b
// // }
// // studentMarks.sort(func)
// // studentMarks.sort((a,b)=>{
// //     return a-b
// // })
// // 
// const aplhabet = ['a' , 'b' , 'c' , 'd'];


// console.log(aplhabet.sort())





// //  Find method in javascript array .



// const array3 = [900 , 600 , 200 , 399];

// function checker(elem) {
//     console.log(elem)
//     return elem%2 !=0
// }

// const result  = array3.find(checker)
// console.log('Result' ,result) //  399 


//  // Given a list of adult  age , find the first person which is applicable for the voting in delhi and first time



 const adults = [15 , 16 , 17 , 20  , 80 , 18];




//  Iterating through given array  , Javascript array higher order functions ;


function multiply(elem , idx , array) {
    console.log('elem=>' , elem , 'idx=>' , idx ,  'array=>' , array)

    console.log('elem*2' ,elem*2)
}

adults.forEach(multiply)