function Vote_Function() { //Requires input from user to see if they can vote  //
    var age, Can_Vote;
    age = document.getElementById("age").value;
    Can_Vote = (age < 18) ? "You are too young to vote": "You are old enough to vote";
    document.getElementById("vote").innerHTML = Can_Vote + " Can Vote.";

}

function nested_Function() { // Nested Function //
    document.getElementById("nest").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}

function Vehicle(Make, Model, Year, Color) { // constructor function // 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jeremy = new Vehicle("Nissan", "Skyline", "1993", "Green");
var Skyla = new Vehicle("Honda", "Pilot", "2020", "Blue");
var Sloan = new Vehicle("Ford", "Mustang", "2012", "Grey");
function my_Function() {
    document.getElementById("New_and_This").innerHTML = "Jeremy drives a " + Jeremy.Vehicle_Color + "-colored " + Jeremy.Vehicle_Model + " manufactured in " + Jeremy.Vehicle_Year;
}
