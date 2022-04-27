var X = 10; //global//
function Add_numbers_1() {
    document.write(20+ X + "<br>");
}

function Add_numbers_2() {
    document.write( X + 100);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3() { // local//
    var Y = 20;
    document.write(20 + Y + "<br>")
}

function Add_numbers_4() {
    var Y = 20;
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();


function Clock_function() { //clock function//
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

if (10 < 20) { // if function//
    document.write(" The number 10 is less than the number 20 ");
}

function error_Function() { //error for console log//
    var x = 10;
    if (y > 12);
    document.write("10 is less than 12");
}