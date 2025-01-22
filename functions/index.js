
// // function declaration

// function printHello () {
//     console.log('Hello World !')
// }

// printHello(); //  calling a functions



// // parameters (userName)
// function greetMessage(userName) {
//     const message =    `Hey ${userName} , Aj thandi ha chaye pia ??`;
//     console.log(message)
// }

// const studentsname = ['Ram', 'Shyam' , 'Alex' ,  'Saksham'];


// for(let i =0;i<studentsname.length;i++) {
//     greetMessage (studentsname[i]) // here while calling the function we are passing value that is called arguments

// }




// greetMessage('Saksham')

// // Execution userName ='Saksham'
// function greetMessage(userName) {
//     const message =    `Hey Saksham , Aj thandi ha chaye pia ??`;
//     console.log(message)
// }


// function isCompatible() {
//     // 50  , 100 
//     const value  =  Math.random()*50 + 50;
//     if(value < 70) {
//         console.log('False')
//     } else {
//         console.log('True')
//     }
// }

// isCompatible()
// isCompatible()
// isCompatible()



// //  a,b,c,d parameter

// function multiply(a,b,c,d=1) {
//     const result  = a*b*c*d;
//     console.log(result);
//     return result
// }

// multiply(1,2,3,4) ; // 24

// multiply(1,2,3) ; 


// // function multiply(a,b,c,d) {
//  // a =1
//  // b=2
//  // c=3
//  // d = undefined
// //     const result  = a*b*c*d;
// //     console.log(result);
// // }


// // 




// const result = multiply(1,2,3,4,5);
// console.log(result ,  'result')




function doCode() {
    return  'Every Day 4 hours..'
}



const message = doCode('Debugging is important');
console.log(message)





// let a =20;
// var a =40;
// console.log(a);





// Arrrow functions 

// function getData(a,b) {
//       return a+b

// }
 //

//  const  getData1 = (a,b)=> {
//     console.log(a,b)
//  }


const  getData1 = (a,b)=> a+b;



const result  = getData1(20,30);

console.log('result',result)



// const divide = (a,b)=>{
//     return a/b
// }


const divide = (a,b)=>  a/b;

const failedLog = ()=> {
    console.log('Please try again later...')
}

const successLog = () => {
    console.log('Successfully submitted...')
}

const infoLog = ()=> {
    console.log('Please do not move cursor here..')
}

// type = "Success" , 'Failed' ,  'Info'
const messageGenerator = (type , successCallback , failedCallback ,  infoCallback)=> {
    if(type  === 'Success') {
        successCallback();
    } else if(type === 'Failed') {
        failedCallback()
    } else {
        infoCallback();
    }
}

messageGenerator('Success' , successLog ,failedLog , infoLog )


const sucess = () =>{
    console.log('Hurrah  it done.')
}


messageGenerator('Success' , sucess ,failedLog , infoLog )


// if my cart 

const cartInfo =()=> {
    console.log('Items is out of stock..')
}


const cartError = ()=> {
    console.log('You cannot add more than 20 items.')
}

const cartSuccess = () => {
    console.log('Item addedd in cart successfully')
}

messageGenerator('Success' ,cartSuccess ,cartInfo, cartError )
messageGenerator('Error' ,cartSuccess ,cartInfo, cartError )




const getDetails = (userName)=> {

    const getUserDetails = ()=> {
        console.log(`Hey ${userName}`)
    }

    return getUserDetails;
}


const func =  getDetails('Vishal Sharma')

func();