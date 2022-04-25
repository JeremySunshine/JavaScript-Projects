function negation_Operator() { //This is a negation operation//
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function multi_Operator() { // this is a multiplication soperation//
    var M = 6 * 8;
    document.getElementById("Multi").innerHTML =  "6 x 8 = " + M;
}

function subtract_Operator() { // Subtraction operation//
    var S = 40 - 20;
    document.getElementById("sub").innerHTML = "40 - 20 = " + S;
}

function divide_Operator() {//divide operation//
    var D = 144 % 12;
    document.getElementById('divi').innerHTML = " 144 / 12 = " + D;
}

function increment_Operator() { //increment operation//
    var i = 5;
    i++;
    document.write(i);
}

function decrement_Operator() { //decrement operation//
    var q = 5;
    q--;
    document.write(q);
}

window.alert(Math.random() * 100); //window alert random math//



