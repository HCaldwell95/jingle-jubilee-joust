// Variables to store user and computer choices
var userChoice;
var computerChoice;

// Compares user and computer choices to determine the winner
function compare(comChoice) {
    // Checks for a draw
    if (userChoice === comChoice) {
        return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a draw! :|";
    
    // Checks outcome if user chooses candy cane
    } else if (userChoice === "candy cane") {
        if (comChoice === "star") {
            return "star eradicates candy cane <br> You Lose!";
        } else if (comChoice === "bauble") {
            return "candy cane bursts bauble <br> You Win!";
        } else if (comChoice === "gingerbread") {
            return "candy cane obliterates gingerbread <br> You Win!";
        } else if (comChoice === "jingle") {
            return "jingle shatters candy cane <br> You Lose!";
        }

    // Checks outcome when user chooses bauble
    } else if (userChoice === "bauble") {
        if (comChoice === "star") {
            return "bauble captures star <br> You Win! ";
        } else if (comChoice === "candy cane") {
            return "candy cane crushes bauble <br> You Lose!";
        } else if (comChoice === "gingerbread") {
            return "gingerbread smothers bauble <br> You Lose!";
        } else if (comChoice === "jingle") {
            return "bauble isolates jingle <br> You Win!";
        }
    
    // Checks outcome when user chooses star
    } else if (userChoice === "star") {
        if (comChoice === "gingerbread") {
            return "star evaporates gingerbread <br> You Win! ";
        } else if (comChoice === "candy cane") {
            return "candy cane crushes bauble <br> You Lose!";
        } else if (comChoice === "gingerbread") {
            return "gingerbread smothers bauble <br> You Lose!";
        } else if (comChoice === "jingle") {
            return "bauble isolates jingle <br> You Win!";
        }

    // Checks outcome when user chooses gingerbread
    } else if (userChoice === "gingerbread") {
    if (comChoice === "jingle") {
        return "gingerbread consumes jingle <br> You Win! ";
    } else if (comChoice === "star") {
        return "star evaporates gingerbread <br> You Lose!";
    } else if (comChoice === "candy cane") {
        return "candy cane obliterates gingerbread <br> You Lose!";
    } else if (comChoice === "bauble") {
        return "gingerbread smothers bauble <br> You Win!";
    }

    // Checks outcome when user chooses gingerbread
    } else if (userChoice === "jingle") {
        if (comChoice === "candy cane") {
            return "jingle shatters candy cane <br> You Win! ";
        } else if (comChoice === "bauble") {
            return "bauble isolates jingle <br> You Lose!";
        } else if (comChoice === "gingerbread") {
            return "gingerbread consumes jingle <br> You Lose!";
        } else if (comChoice === "star") {
            return "jingle outshines star <br> You Win!";
        }
    }
};

// jQuery function to be executed when the document is ready
$(document).ready(function(){

    // jQuery function on click
    $("button").click(function(){
        userChoice = this.id;
        computerChoice = Math.floor(Math.random() * 5);
    
        // Convert the random number to a corresponding choice
        switch (computerChoice) {
            case 0: computerChoice = "candy cane";
                break;
            case 1: computerChoice = "bauble";
                break;
            case 2: computerChoice = "star";
                break;
            case 3: computerChoice = "gingerbread";
                break;
            case 4: computerChoice = "jingle";
                break;
        }
    
        // Compare user and computer choices and present result in uppercase
        var result = compare(computerChoice).toUpperCase();

        //Display the result in the HTML element with class "result"
        $(".result").html("<h1>Result:</h1><p>User: " + userChoice.toUpperCase() + "<br>" + 
                            "Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>");
    })
});




