var pass = document.getElementById("password");
var msg = document.getElementById("message");
var pass = document.getElementById("password");
pass.addEventListener('input' , () => {
    if(pass.ariaValueMax.length>0){
        msg.style.display="block;"
    }
    else{
        msg.style.display="none";
    }
    
})