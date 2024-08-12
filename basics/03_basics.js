function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName();

function addTwoNum(num1,num2){
    return num1 + num2;
}

  

// const result = addTwoNum(3,5);

// console.log("result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anant"))

function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,600)) 

const user = {
    username : "Anant",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject({
//     username: "sam", 
//     price: 2000
// })

const myNewArray = [200,600,800,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))