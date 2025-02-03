
// let  smartPhone = {
//     price: 20000,
//     ram: '8gb', 
//     storage:  '128gb',
//     brand: 'Nokia',
//     color: 'black',
//     model: '2010',
//     1: '123',
//     'Company Name': 'Nokia'
// }
// //  dot notatioon 

// // console.log(smartPhone.1);

// // console.log(smartPhone.'Company Name')

// console.log(smartPhone['1']);

// console.log(smartPhone["Company Name"])
// // Dynamic Keys

// const keys = ['price', 'ram' , 'storage', 'brand' , 'color', 'model' , '1' ,'Company Name' ]


// for(let  i =0;i<keys.length;i++) {
//     const key = keys[i]; 
//      console.log(smartPhone[key]) // 

// }

// // iterate through object
// for(let objKey in smartPhone) {
//     console.log('key', objKey ,  smartPhone[objKey])
// }


// //  dynamic value 




// // Object.keys 


// const employee_1  = { 
//     id: 123 ,
//     emp_id: 2345,
//     name: 'Vishal',
//     city : 'Kanpur'
// }
// //  Traversing this object
// // For ... in 
// for(let key  in employee_1) {
//     console.log('value=>' , employee_1[key] ,  'key' , key)
// }

// const key12 =  Object.keys(employee_1); // this will return array of keys 

// for(let i = 0;i<key12.length;i++) {
//     const key =  key12[i];
//      console.log('values' , employee_1[key] ,  'keys=>' , key)
// }



// //  Object.values()

// const values =  Object.values(employee_1);
// console.log('values' , values)





// Students Object


const students = {
    name: 'Alex',
    lastName: 'Verma',
    city: 'Mumbai',
    country: 'India'
}


function modifyObject(obj) {
    obj.name = 'AREEE...' // 
}


modifyObject(students) // arguments


console.log(students)  // 



const object123 = {id : 123}

const obj234 =  object123;


obj234.empl_id = 2345

console.log(object123); // {id: 123, empl_id: 2345}
console.log(obj234) //  {id: 123, empl_id: 2345}


// Creating clone and copy of non-primitive data type is difficult



//  Spread Operator 


const abc = { id : 1234}

const cloneAbc = {...abc} //  

cloneAbc.id = 'Hello'

console.log(cloneAbc , abc)


// Nested object


const aa = {
    name: 'Vishal' ,
    a: {
        id: 'Raj'
    }
}

const cloneAa = {...aa};

 // shallow copy
cloneAa.a.id = "Sab sahi ha.."

cloneAa.name = "Ram bharose"
console.log(aa , cloneAa)



const deepObject = {
    a: {
        b: {
            c:{
                d:{
                    e:123
                }
            }
        }
    }
}


// const shallowCopy   = {...deepObject};

// shallowCopy.a.b.c.d.e = "Hello"

// console.log(shallowCopy , deepObject) 


 
const deepCopy = structuredClone(deepObject);

deepCopy.a.b.c.d.e = 'Hello'

console.log(deepCopy ,  deepObject)



const alternativeDeepCopy = JSON.parse(JSON.stringify(deepObject)); 
alternativeDeepCopy.a.b.c.d.e = 'Ram bharose';

console.log(alternativeDeepCopy , deepObject)

