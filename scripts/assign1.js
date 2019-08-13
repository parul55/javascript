'use script'
var arr=new Array()
console.log(arr)
var brr=new Object([])
console.log(brr)
arr=[1,2,3,4,5,7,56,12,23]
console.log(arr)
console.log("----1----")
console.log(arr.pop()) 
console.log("----2----")//1st function
console.log(arr.reverse()) 
console.log("----3----")//2nd function
console.log(arr.copyWithin(-3))
console.log("----4----")//3rd function
console.log(arr.concat(90,4))    
console.log("----5----")//4th function---concat stores temp result
console.log(arr.push(21))   
console.log("----6----")//5th function
console.log(arr.sort())      
console.log("----7----")//6th function
console.log(arr.valueOf(5))                 //7th function
console.log("----8----")
console.log(arr.includes(45))
console.log(arr.includes(7))
console.log("----9----")
console.log(arr.join("--"))
console.log("----10----")
console.log(arr.keys())
console.log("-------")
console.log(arr.toString())