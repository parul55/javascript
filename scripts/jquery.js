var x=10
let y="hello"
for(let i=0;i<10;i++)
    console.log(i)
var nums=[3,4,5,6,76,7,8]

var res=nums.map(function(a){
                 return a*2;
                 })
console.log(res)
console.log("-------")

var res1=nums.map((a)=>a*2)
console.log(res1)

console.log("--------")
var res2=(x,y)=>x+y
console.log(res2(1,3))
//console.log(i)