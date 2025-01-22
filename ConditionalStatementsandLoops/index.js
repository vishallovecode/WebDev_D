
let collegeName;

if(collegeName) {
    console.log('Hey...')
}else {
    console.log('False')
}


const studentName = 'Alex';
if(studentName) {
    console.log('Here is my name:' , studentName)
} else {
    console.log('Student does not exist')
}


let  city = '';

if(city) {
    console.log('City Name:' , city)
} else {
    console.log('Please select a city.')
}

//  0 , undefined , null ,NaN , '' => this all are falsy value.


let percentage = 80;

// converting string numeric value to number parseInt('80') // 80


// if marks  is > 90 ; A+
// percentage >  80 and percentage< 90 ;  A
// percentage >  70 and percentage< 80 ;  B+
// percentage >  60 and percentage< 70 ;  B
// percentage >  50 and percentage< 60 ;  C
// percentage >  40 and percentage< 50 ;  D
// percentage >  33 and percentage< 40 ;  E
// percentage < 33 ; Failed
percentage = parseInt(percentage) // converted string into number

if(percentage > 90) {
    console.log('A+')
} else if (percentage >= 80  && percentage < 90) {
    console.log('A')
} else if(percentage >= 70 && percentage < 80) {
    console.log('B+')
}
else if(percentage >= 60 && percentage < 70) {
    console.log('B')
}
else if(percentage >= 50 && percentage < 60) {
    console.log('C')
}else if(percentage >= 40 && percentage < 50) {
    console.log('D')
}
else if(percentage >= 33 && percentage < 40) {
    console.log('E')
} else {
    console.log('Failed')
}


// Switch Statement finding week of the day

// 1 => Sunday , 2=> Monday

const day = 12;
switch(day) {
    case 1: {
        console.log('Sunday')
        break;
    }
    case 2: {
        console.log('Monday')
        break;
    } case 3: {
        console.log('Tuesday')
        break;
    } case 4: {
        console.log('Wednesday')
        break;
    } case 5: {
        console.log('Thursday')
        break;
    } case 6: {
        console.log('Friday')
        break;
    } case 7: {
        console.log('Saturday')
    }
    default: {
        console.log('Week name does not exist')
    }
}



// Ternary operator;


let  firstName = "Vishal";

if(firstName) {
    firstName =  firstName + ' Sharma'
} else {
    firstName ='Guest'
}


firstName =  firstName ?  firstName + ' Sharma': 'Guest'


const result  =  percentage > 80 ? 'Pass': 'Failed';

const res =  percentage > 90  ||  percentage <=80 ? 'Pass': 'Failed';

console.log('Res' , res);


//  For loop


for(let  i =0; i<5 ; i++) {
        console.log('i:' , i) //  0 , 1,2,3,4
}


// for(const  i =0; i<5 ; i++) {
//     console.log('i:' , i) //  0 , 1,2,3,4
// } // this will throw the error


let count =0;

while(count >0) {
    console.log(count);
    count ++ ;
}


do {
    console.log('Hi here i am running..')
} while(count < 0) ;




// Basic of array and Object

let users = ['Alex' , 'Rim', 'Tom'];



const employee  = {
    name: 'Alex' , 
    lastName: 'Alexander', 
    salary: '3.4',
    city: 'Sonipat'
}

console.log('Employee' , employee)

console.log('users' , users)


// Iteration of objetcts 


for( let  i  in employee) {
    console.log(i) //  'name' , 'lastName' , 'salary' ,'city'
}

for( let  i  in users) {
    console.log(i) // '0' , '1' , '2'
}


 // for ...of  can be use only in array this will give the  value of array


 for (let value of users) {
    console.log(value) //  Alex , Rim , Rom
 }