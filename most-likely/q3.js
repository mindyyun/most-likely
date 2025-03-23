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

const question3 = localStorage.getItem("question3")
console.log("data from local storage",question3)
const question3Display = document.getElementById("question3Display")
question3Display.textContent = question3