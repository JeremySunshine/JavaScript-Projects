function my_Function() {
    document.getElementById("test").innerHTML = 0/0; 
}

console.log(2 + 2);

console.log(19 > 40);// shows false in console log //

document.write(typeof "Word") ;

function not_Function() {
    document.getElementById("not").innerHTML = !(20 > 10 ); // Not Operator //
}

document.write( 5 > 2 && 10 > 4 ) ; 

document.write( 5 > 10 || 10 > 4 ) ; // shows less than //

X = 10; // makes 10 equal X // 
Y = 100; // makes 100 equal Y//
document.write(X === Y);

document.write(3 == 22);// returns false // 

function greater_Than() {
    document.getElementById("greater").innerHTML = (20 < 30);
}

function car_Function() {
    document.getElementById("car").innerHTML = ("Mustang" + 2012);
}