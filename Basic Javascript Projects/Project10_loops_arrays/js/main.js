// for loop//
var Instruments = [" Guitar", "Drums", "Paino", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


// constant function // 
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"red"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}



var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

var x = return_Function(8, 8);

function return_Function(a, b) {
    return a * b;
}


// LET // 
let car = {
    make: "Dodge ",
    Model: "Viper ",
    year: "2022 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;    
    }
}
document.getElementById("Car_Object").innerHTML = car.description();



// while loop //

function while_Loop() {
    let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("while").innerHTML = text;
}



// ARRAY //
function cat_pics(){
var Cat_Picture = [];
Cat_Picture[0] = "sleeping";
Cat_Picture[1] = "playing";
Cat_Picture[2] = "eating";
Cat_Picture[4] = "purring";
document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}