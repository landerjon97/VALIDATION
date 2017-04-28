
window.onload = function(){
    validate();

}
function sub(){
    if(document.getElementById("form").checkValidity() == true){
        var firstName = document.getElementById("fName").value;
        var lastName = document.getElementById("lName").value;
        var mail = document.getElementById("mail").value;
        var tel = document.getElementById("tel").value;
        var bDay = document.getElementById("bYear").value;
        var zip= document.getElementById("zip").value;
        var soc = document.getElementById("soc").value;
        var incomeS = document.getElementById("income").value;
        var income = parseInt(incomeS);
        var x = document.getElementById("sub");
        var tax;
        var netIncome;
        if(income <= 20000 && income >= 0){
            tax = income * .1;
            netIncome = income - (income * .1);
        }
        else if(income <= 50000 && income >= 20000.01){
            tax = income * .2 + 2000;
            netIncome = income - (income * .2);
            income += 2000;
        
        }
        else if(income <= 100000 && income >= 50000.01){
            tax = income * .25 +8000;
            netIncome = income - (income * .25);
            income += 8000;
        
        }
        else if(income <= 500000 && income >= 100000.01){
            tax = income*.3 + 21500;
            netIncome = income - (income * .3);
            income += 21500;
        
        }
        document.getElementById("leftBox").innerHTML = "First name: "+firstName +"<br/> Last Name:"
        +lastName + "<br/>E-mail: "+ mail + "<br/>Phone: "+ tel + "<br/>SSN: " + soc + "<br/>YOB: " + bDay + "<br/> Income: "
        + income.toFixed(2) + "<br/>Tax: " + tax.toFixed(2) + "<br/> Net Income: " + netIncome.toFixed(2);
        

        document.getElementById("rightBox").innerHTML = "Tax Rate Calculated from Income: <br/><br/> 1.    10% of amount between $0 - 20,000.00 <br/><br/>2.20% of amount between $20,000.01 - 50,000.00 + 2,000(from line 1)<br/><br/>3.    25% of amount between $50,000.01 - 100,000.00 + 6,000(from line 2)  + 2,000(from line 1)<br/><br/>4.    30% of amount between $100,000.01 - 500,000.00 + 12,500(from line 3) + 6,000(from line 2) + 2,000(from line 1)<br/><br/>If income is over $500,000 = 1% flat rate on all income.  :) The 1%"
    }
}
function clear(){
 document.getElementById("form").reset();
}
function fill(){
        
        var firstName = document.getElementById("fName").value = "Billy";
        var lastName = document.getElementById("lName").value = "Smith";
        var mail = document.getElementById("mail").value = "test@gmail.com";
        var tel = document.getElementById("tel").value = "123-456-7890";
        var bDay = document.getElementById("bYear").value = "1990";
        var zip= document.getElementById("zip").value = "12345";
        var soc = document.getElementById("soc").value = "123-45-6789";
        var incomeS = document.getElementById("income").value = "10000";
}
function validate(){
    var x = document.getElementById("sub");
    x.addEventListener("click", sub);
    var fillform = document.getElementById("fill");
    document.getElementById("clear").addEventListener("click", clear);
    fillform.addEventListener("click", fill);

}
/*jquery
    download jquery
    $sign means jquery
    ex: $(document).ready(function(){
        $('#clear').bind("click",function())
    })
    basic syntacts 
    $ degine access jquery
    a (selector) to query or find html elements
    A jQuery action() to performed on the elements
    +$("#number").val() + is shortcut for parseInt
    $("#showHide").click(function(){
        $(#pic).toggle(4000);
    })
*/