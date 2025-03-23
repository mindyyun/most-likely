
document.addEventListener("DOMContentLoaded", function () {
    const name1 = document.getElementById("name1");
    const name2 = document.getElementById("name2");
    const name3 = document.getElementById("name3");
    const name4 = document.getElementById("name4");

    if (!name1 || !name2 || !name3 || !name4) {
        console.error("One or more name elements not found!");
        return;
    }

    let playerOne = { name: name1.textContent.trim(), questions: [0, 0, 0, 0, 0] };
    let playerTwo = { name: name2.textContent.trim(), questions: [0, 0, 0, 0, 0] };
    let playerThree = { name: name3.textContent.trim(), questions: [0, 0, 0, 0, 0] };
    let playerFour = { name: name4.textContent.trim(), questions: [0, 0, 0, 0, 0] };

    name1.addEventListener("click", function () {
        playerOne.questions[0]++;
        console.log("Updated Player 1:", playerOne);
        localStorage.setItem("player1", JSON.stringify(playerOne));
    });

    name2.addEventListener("click", function () {
        playerTwo.questions[0]++;
        console.log("Updated Player 2:", playerTwo);
        localStorage.setItem("player2", JSON.stringify(playerTwo));
    });

    name3.addEventListener("click", function () {
        playerThree.questions[0]++;
        console.log("Updated Player 3:", playerThree);
        localStorage.setItem("player3", JSON.stringify(playerThree));
    });

    name4.addEventListener("click", function () {
        playerFour.questions[0]++;
        console.log("Updated Player 4:", playerFour);
        localStorage.setItem("player4", JSON.stringify(playerFour));
    });
});



// players = [{ name: "min", questions: [1, 0, 0, 3]}, {name: "bob", upvotes: 0}]

// player.questions[0] ++;


// for player in players: player.questions 




