
window.onload = function(){
    validate();

}
function sub(){
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName");
    var mail = document.getElementById("mail");
    var tel = document.getElementById("tel");
    var bDay = document.getElementById("bYear");
    var zip= document.getElementById("zip");
    var soc = document.getElementById("soc");
    var incomeS = document.getElementById("income");
    var income = parseInt(incomeS);
    var x = document.getElementById("sub");
    document.getElementById("leftBox").innerHTML = firstName;
}
function validate(){
    var x = document.getElementById("sub");
    x.addEventListener("click", sub);
}