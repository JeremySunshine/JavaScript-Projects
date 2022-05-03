// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
 function placeXorO(squareNumber) {
     // This condition enures a square hasn't been selected already.
     // The .some() method is used to check each element of selectedSquare array
     // to see if it containes the square number clicked on.
     if (!selectedSquares.some(element => element.includes(squareNumber))) {
         // This variable retrives the htmk element id that was clicked.
         let select = document.getElementById(squareNumber);
         // This condition check who's tunr it is.
         if (activePlayer === 'X') {
             //If activePlayer is equal to 'X' the x.png is placed in HTML.
             select.style.backgroundImage = 'url("images/x.png")';
             //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
         } else {
             //If activePlayer is equal to 'O', the o.png is placed in HTML.
             select.style.backgroundImage = 'url("images/o.png")';
         }
         //squareNumber and activePlayer are concatenated together and added to a array.
         selectedSquares.push(squareNumber + activePlayer);
         //This calls a function to check for any win conditions.
         checkWinConditions();
         //This condition is for changing the active player.
         if (activePlayer === 'X') {
             //If active player is 'X' change it to 'O'.
             activePlayer = 'O';
             //If active is anything other than 'X'
         } else {
             //change active player to 'X'
             activePlayer = 'X';
         }
         // this function plays placement sounds. 
         audio('./media/place.mp3');
         //This condition checks to see if it is computers turn.
         if(activePlayer === 'O') {
             //this function diables  clicking for computer choice.
             disableClick();
             //This function waits 1 second before computer places image and enables click
             setTimeout(function () { computersTurn(); }, 1000)
         }
         //returning true is needed for our computersTurn() function to work
         return true;

     }
     //This Function results in a random square being selected
     function computersTurn() {
         //this boolean is needed for our while loop
         let success = false;
         //this variable stores a random number 0-8
         let pickASquare;
         //this condition allows our while loop to keep ttrying if a square is selected already
         while(!success) {
             // A random number between 0 and 8 is selected
             pickASquare = String(Math.floor(Math.random() * 9));
             // if the random number evaluated returns true, the square hasn't been selected yet
             if (placeXorO(pickASquare)) {
                 //this line calls the function.
                 placeXorO(pickASquare);
                 //this chnages our boolean and ends the loop
                 success = true;
             };
             
         }
     }


 }

 // this function parses the selectedSquares rray to search for win conditions
 //drawWinline function is called to draw line if condition is met.
 function checkWinConditions() {
     // X 0, 1, 2 condition
     if     (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
     // X 3, 4, 5 condition
     else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
     // X 6, 7, 8 condition.
     else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
     // X 0, 3, 6 
     else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
     // X 1, 4, 7 condition
     else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
     // X 2, 5, 8 condition
     else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
     // X 6, 4, 2 condition
     else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
     //X 0, 4, 8 condition 
     else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
     // O 0, 1, 2 condition
     else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
     // O 3, 4, 5 condition
     else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
     // O 6, 7, 8 condition
     else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
     // O 0, 3, 6 conditon
     else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
     // O 1, 4, 7 condition 
     else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
     // O 2, 5, 8 condtion
     else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
     // O 6, 4, 2 condition
     else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
     // O 0, 4, 8 condition
     else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
     //this condition checkes for a tie. if none of the above conditions register
     // and 9 sqaure are selected this code executes
     else if (selectedSquares.length >= 9) {
         //this function plays tie game sound
         audio('./media/tie.mp3');
         //this function sets a .3 second timer before the resetgame is called
         setTimeout(function () { resetGame(); }, 1000);
     }
     // this function checks if an array includes 3 strings. it is used ti check
     // for win condition
     function arrayIncludes(SquareA, SquareB, SquareC) {
         //These 3 varibales will be used to check for 3 in a row.
         const a = selectedSquares.includes(SquareA)
         const b = selectedSquares.includes(SquareB)
         const c = selectedSquares.includes(SquareC)
         // if these 3 variables we pass are all included in our array is true
         //retuned and our else if condiiton executes the darwWinLine function
         if (a === true && b === true && c === true) { return true}
     }
    }


     //this funtin makes our body element temp unclickable
 function disableClick() {
    // this makes it unclickable
    body.style.pointerEvents = 'none'
    // this makes it clickable after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto' ;}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio() {
    // We create a new auio object and we pass the path as a parameter
    let audio = new  Audio('./media/place.mp3');
    //Play Mehtod plays our audio sound.
    audio.play(); 
}

// uses html canvas to draw line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas
    const canvas = document.getElementById('win-lines')
    // gives acces to methods and properties on canvas
    const c = canvas.getContext('2d');
    // Indicates where the start of lines x axis is
    let x1 = coordX1,
    // Indicates where the start of a lines y axis is
    y1 = coordY1,
    // end x axis
    x2 = coordX2,
    // end of y axis
    y2= coordY2,
    // variable stores temp x axis data we update in our animation loop
    x = x1,
    // stores temp y axis data we update in our animation loop
    y = y1;

    //function that interacts with canvas
    function animateLineDrawing() {
        // creates loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // clears cotent from last loop iteration
        c.clearRect(0, 0, 608, 608)
        // Starts a new path
        c.beginPath();
        // method moves us to starting point for line
        c.moveTo(x1, y1)
        //method indicates end point of line
        c.lineTo(x, y)
        // sets width of line
        c.lineWidth = 10;
        // sets color of line
        c.strokeStyle = 'rgba (70, 225, 33, .8)';
        // draw the line
        c.stroke();
        // check that we have reached end point
        if (x1 <= x2 && y1 <= y2) {
            // condition adds 10 to prev end x point
            if (x < x2) { x += 10; }
            // condition add 10 ti prev y end point
            if ( y < y2) { y += 10; }
            // cancels animation loop if end points reached
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x+= 10; }
            if (y > y2 ) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // clears canvas after win line draws
    function clear() {
        // line starts our animation liio
        const animationLoop = requestAnimationFrame(clear);
        // line clears canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }

    // line diables clicking while win sound is playing
    disableClick();
    // plays win sound
    audio('./media/winGame.mp3');
    // calls main animation loop
    animateLineDrawing();
    // line waits 1 sec then clears canvas, resets game and allows clicking
    setTimeout(function () { clear(); resetGame(); }, 1000);

}
    // this function resets the game in the event in a tie or win
    function resetGame() {
        // this for loop iterates through each htmk square element
        for (let i = 0; i < 9; i++) {
            // this variable gets the html elemnt of i
            let sqaure = document.getElementById(String(i))
            // removes our elements background image
            sqaure.style.backgroundImage = ''
        }
        // resets our array so its empty and we can start over
        selectedSquares = [];
    }





 


 