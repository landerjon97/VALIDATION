
window.onload = function(){
    var firstName = document.getElementById("fName");
    var lastName = document.getElementById("lName");
    var mail = document.getElementById("mail");
    var tel = document.getElementById("tel");
    var bDay = document.getElementById("bYear");
    var zip= document.getElementById("zip");
    var soc = document.getElementById("soc");
    var incomeS = document.getElementById("income");
    var income = parseInt(incomeS);
    var x = document.getElementById("sub");
    x.addEventListener("click", sub);

}
function sub(){
    
    document.getElementById("leftBox").innerHTML = "First name = ", firstName;
    
}