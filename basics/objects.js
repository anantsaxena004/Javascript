// objects literals
const jsuser = {
    name: 'anant',
    age : 22,
    location: "bhopal",
    email: "anantsaxena54@gmail.com",
    isLoggedIn : false,
    lastLogInDay: ["Monday","Saturday"]
}

// console.log(jsuser)

// console.log(jsuser.age)
// console.log(jsuser["email"])

jsuser.greeting = function() {
    console.log("Hello js user")
}
jsuser.greetingTwo = function() {
    console.log(`Hello js user , ${this.name}`)
}
console.log(jsuser.greetingTwo())