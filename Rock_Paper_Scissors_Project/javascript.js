function getComputerChoice() {
    let number = Math.floor(Math.random()*3) + 1;
    let choice;

    switch(number){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;

    }

    return choice
}

console.log(getComputerChoice())