'use strict'
function add(){

var firstnumber=(document.getElementById("firstnumber").value)

if(firstnumber===""){
    alert('Enter number in first number....')
    
}
    

var secondnumber=(document.getElementById("secondnumber").value)

if(secondnumber===""){
    alert('Enter number in second number.....')
   
}
var firstnumber=parseFloat(firstnumber)
var secondnumber=parseFloat(secondnumber)

if(isNaN(firstnumber)){
    alert('Please enter a valid number in first number')
    
}
if(isNaN(secondnumber)){
    alert('Please enter a valid number in second number')
    
}



document.getElementById("result").value=firstnumber+secondnumber;
    
    
    
    
var String1="hello.You are \"Welcome\"..."
alert(String1.length)
}