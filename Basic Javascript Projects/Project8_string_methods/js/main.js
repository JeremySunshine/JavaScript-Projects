function slice_Method() { // Slice method //
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function precision_Method() { // precision method //
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

function full_Sentence() { // concat method //
    var part_1 = " I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}