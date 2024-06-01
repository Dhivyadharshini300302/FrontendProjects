function validate() { 
    let name = 
        document.getElementById("name").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value;  
  
     
let errors = []; 
  
if (name.length < 5) { 
    errors.push("Please Enter a valid Name");} 
if (email.indexOf("@") == -1 || email.length < 6) { 
    errors.push( 
        "Please Enter a valid Email");} 
if (message.length <= 40) { 
    errors.push( 
        "Please Enter More Than 40 Characters");} 
else { 
    console.log("msg sent");
    alert( 
        "Form Submitted Successfully!"); 
    return true;}
}