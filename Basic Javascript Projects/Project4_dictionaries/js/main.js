function my_Dictionary() { //My Dictionary Function//
    var Animal = {
        Species: "Cat",
        Color: "Black",
        Breed: "Tabby",
        Age: "4",
        Sound: "Meow"
    };
    delete Animal.Sound; //Deletes key before vaule is displayed//
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //displays Animal Sound//
}