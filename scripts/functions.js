function addNum(x,y){
    //console.log(x + y)
    return x +y;
}
console.log("Addtion is : "+typeof(addNum(12)))
console.log("Addtion is : "+addNum(12,12))
console.log("Addtion is : "+addNum(12,"Hello"))
console.log("Addtion is : "+typeof(addNum("HI","Hello")))
console.log("Addition is : "+addNum("HELLO"))
var res=function(){
    console.log("HELLLO...")
}
res();


(function(a,b){
    console.log(a-b)
})(23,4)

console.log("------------------")
var arr=[2,34,5,7];
for(var a in arr){
    console.log(arr[a]);
}

var a1=[]
var a2=new Object([])
console.log(a1)
console.log(a2)
var a3=new Array()
console.log(a3)

console.log("------------------")
function Employee(eid,fname,lname){
    this.eid=eid
    this.fname=fname
    this.lname=lname
    
}

Employee.prototype.age=22;


var e1=new Employee(100,"Parul","Singh")
console.log(e1)
e1.age=23
console.log(e1.age)


