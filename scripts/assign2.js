 
    var count=0
    function isNumber(valueToCheck) {
            return !isNaN(valueToCheck)
        }
function isAge(valueToCheck){
    if(valueToCheck<100)
        return false
}
 function ValidateNumberOnly(valueToCheck)
{
if ((event.keyCode < 48 || event.keyCode > 57)) 
{
   event.returnValue = false;
}
}
 
        window.onload = function(e){
            var eid = document.getElementById('eid')
            var age=document.getElementById('age')
         
            var submitForm = document.getElementById('submitBtn')
 
            var info = document.getElementById('info')
            var i = 0
 
            eid.onkeydown = function(evt){
                if (!isNumber(String.fromCharCode(evt.which)) && evt.which !== 8) {
                    info.innerHTML = 'Enter Numeric data only'
                    this.style.backgroundColor = 'red'
                    evt.preventDefault()
                }
              
                else{
                    info.innerHTML =''
                    this.style.backgroundColor =  'aqua'
                }
               
              
                }
            
            age.onkeydown = function(evet){
                 if(evet.which !==8 && !isNumber(String.fromCharCode(evet.which)) ){
                    info.innerHTML="Enter a valid age"
                    this.style.backgroundColor='red'
                    evet.preventDefault()
                }
                else{
                    count=count+1
                    if(count>2){
                    info.innerHTML="NO! Enter valid age"
                    this.style.background='red'
                        if(evet.which!==8 && !isNaN(String.fromCharCode(evet.which))){
                        evet.preventDefault()
                    }}
                    info.innerHTML=''
                    this.style.backgroundColor='aqua'
                    
                }
            }
            }