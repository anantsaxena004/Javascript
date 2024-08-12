let a = 10
const b = 20 
var c = 30

a = 100
// b = 200

// console.log(a)
// console.log(b)

function one(){
    const username = "anant"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    //two()

    one.two = two
}
// one()
// one.two()


function addOne(num){
    return num + 1
}

// console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5))


