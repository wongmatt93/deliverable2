let total = 0;
let player = prompt("Welcome to GC mini golf! What is your name?");

//Prevents user from moving forward if user cancels or leaves name blank
if (player != null && player != "") {
    
    //Using Number() to ensure that the number input becomes number instead of string
    let game = Number(prompt("Hi, " + player + "! Would you like to play 3 or 6 holes today?"));

    //breakme to break if statement if the user inserts anything other than a number or a "0" for putts.
    //If statement prevents game from proceeding if aything other than 3 or 6 is entered
    breakme: if (game === 3 || game === 6) {
        for (i = 1; i <= game; i++) {
            let putts = Number(prompt("How many putts for hole " + i + "? (Par: 3)"));
            if (isNaN(putts) || putts === 0) { 
                //Explains in console why the game has ended
                console.log("An invalid answer has been provided. Please try again.");
                //breaks if statement when user inserts something that's not a number and 0
                break breakme;
            } else {
                total += putts;
            }     
        }

        //Since par is 3 for each hole, we can take number of holes for each game and multiply by 3 to get total par
        let par = game * 3;
        //After getting total par, we can just subtract it from the total putts from the for loop
        total -= par;
        
        if (total < 0) {
            console.log("Great job, " + player + "! Your total par was: " + total);
        } else if (total > 0) {
            console.log("Nice try, " + player + "... Your total par was: +" + total);
        } else if (total === 0) {
            console.log("Good game, " + player +". Your total par was: 0");
        }
    
    } else {
        //Displays in console when user doesn't select 3 or 6
        console.log("This is not a valid option.");
    }
} else {
    //Displays in console when user doesn't enter name or cancels
    console.log("Please refresh to try again.");
}