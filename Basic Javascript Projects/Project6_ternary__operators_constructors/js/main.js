function Vote_Function() {
    var age, Can_Vote;
    Height = document.getElementById("age").value;
    Can_Vote = (age < 18) ? "You are too young to vote": "You are old enough to vote";
    document.getElementById("vote").innerHTML = Can_Vote + " Can Vote.";

}