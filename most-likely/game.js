document.addEventListener("DOMContentLoaded", function () {
    // Retrieve names from localStorage
    const player1 = localStorage.getItem("player1") || "Player 1";
    const player2 = localStorage.getItem("player2") || "Player 2";
    const player3 = localStorage.getItem("player3") || "Player 3";
    const player4 = localStorage.getItem("player4") || "Player 4";

    // Display names in the buttons
    document.getElementById("name1").textContent = player1;
    document.getElementById("name2").textContent = player2;
    document.getElementById("name3").textContent = player3;
    document.getElementById("name4").textContent = player4;

    // Optional: Update other buttons
    const buttons = document.querySelectorAll(".name-button");
    if (buttons.length > 1) {
        buttons[1].textContent = player2;
    }
});

const name1 = localStorage.getItem("question1")
console.log("data from local storage",name1)

const question1Display = document.getElementById("question1Display")
question1Display.textContent = name1


