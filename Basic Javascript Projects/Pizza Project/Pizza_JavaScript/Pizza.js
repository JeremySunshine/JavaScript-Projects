function getReceipt() {
    // THIS INITIALIZES OUR STRING SO IT CAN GET PASSED FROM
    // FUNCTION TO FUNCTION, GROWING LINE BY LINE INTO A FULL RECIPT
    var text1 = "<h3>'You Ordered:</h3>";
    var runningTotal = 0;
    var SizeTotal= 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
       }
    }
    if (selectedSize === "Personal Pizza") {
        SizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        SizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        SizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        SizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        SizeTotal = 16;
    }
    runningTotal = SizeTotal;
    console.log(selectedSize+" = $"+SizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping (runningTotal,text1);
};

    function getTopping(runningTotal,text1) {
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        for (var j = 0; j < toppingArray.length; j++)
        if (toppingArray[j].checked) {
        selectedTopping.push(toppingArray[j].value);
        console.log("selected topping item: ("+toppingArray[j].value+")");
        text1 = text1+toppingArray[j].value+"<br>";
    }



var toppingCount = selectedTopping.length;
if(toppingCount > 1) {
    toppingTotal = (toppingCount - 1);
} else {
    toppingTotal = 0;
}
runningTotal = (runningTotal + toppingTotal);
console.log("Total selected topping items : "+toppingCount); //show toppings price . etc in console log.
console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
console.log("topping text1 : "+text1);
console.log("purchase total: "+"$"+runningTotal+".00");
document.getElementById('showText').innerHTML = "<h3>Total : <strong>$"+runningTotal+".00"+"</strong></h3>";
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; // prints total price
}
