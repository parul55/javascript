'use strict'
/*var str="Parul Singh"
alert(str.substring(0,5))
alert("Second string " +str.substring(5,0))
alert("third string "+str.substr(5,3))
alert("fourth string "+str.slice(2,8))
alert("fifth string "+str.slice(8,2))
alert("sixth string "+str.substr(5,-1))*/

/*var str="Hello world bye world"
var x=str.replace(/world/gi,"universe")
alert(x)
alert(x.replace(/bye/gi,"parul"))*/

function fetching(){
var email=document.getElementById("email").value

document.getElementById("emailpart").value=email.substring(0,email.indexOf("@"))

document.getElementById("domainpart").value=email.substring(email.indexOf("@")+1)
document.getElementById("topleveldomain").value=email.substring(email.lastIndexOf("."))
}