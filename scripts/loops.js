'use strict'

var user_choice=""

do{
    var user_input=Number(prompt("Enter a number",""));
    var i=1;
    while(i<=user_input){
        document.write(i+"<br>")
        i=i+1;}
    /*if(i>100)
        break;*/
   /* if(i%2===0){
        continue;}*/
    

do{
    user_choice=prompt("Do you want to continue: YES or NO").toUpperCase()
    if(user_choice!=="YES" && user_choice!=="NO"){
    alert("Enter valid choice")}
}
while(user_choice!=="YES" && user_choice!=="NO")
}
while(user_choice==="YES")