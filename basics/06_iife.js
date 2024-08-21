// immediately invoked function exprsession


// named iife 
(function chai(){
    console.log("connection")
})() ;


// unnamed iife 
( (name) => {
    console.log(`name is ${name}`)
} ) ('anant')