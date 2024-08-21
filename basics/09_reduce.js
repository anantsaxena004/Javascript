const nums = [1,2,3]

// const total = nums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currVal: ${currval}`);
//     return acc + currval;
    
// })


const total = nums.reduce( (acc,curr) => acc + curr,0 )

console.log(total);
