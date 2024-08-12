const user = {
    username : "anant",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "dev"
// user.welcomeMessage() 
// console.log(this)  

const chai = () => {
    let username = "anant"
    console.log(this)
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username: "anant"})


console.log(addTwo(2,8))