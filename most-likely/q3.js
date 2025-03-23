document.addEventListener("DOMContentLoaded", function () {
    // Retrieve names from localStorage
    const player1 = localStorage.getItem("player1") || "Player 1";
    const player2 = localStorage.getItem("player2") || "Player 2";
    const player3 = localStorage.getItem("player3") || "Player 3";
    const player4 = localStorage.getItem("player4") || "Player 4";

    // Display names in the buttons

    let playerOneMap = new Map(JSON.parse(localStorage.getItem("player1")))
    let playerTwoMap = new Map(JSON.parse(localStorage.getItem("player2")))
    let playerThreeMap = new Map(JSON.parse(localStorage.getItem("player3")))
    let playerFourMap = new Map(JSON.parse(localStorage.getItem("player4")))

    // Optional: Update other buttons
    const buttons = document.querySelectorAll(".name-button");
        buttons[0].textContent=playerOneMap.get("name")
        buttons[0].addEventListener("click", function() {
            let p1Arr = playerOneMap.get("questions");
            p1Arr[2]++;
            playerOneMap.set("questions", p1Arr);
            localStorage.setItem("player1", JSON.stringify(Array.from(playerOneMap)));
        })
        buttons[1].textContent=playerTwoMap.get("name")
        buttons[1].addEventListener("click", function() {
            let p2Arr = playerOneMap.get("questions");
            p2Arr[2]++;
            playerTwoMap.set("questions", p2Arr);
            localStorage.setItem("player2", JSON.stringify(Array.from(playerTwoMap)));
        })
        buttons[2].textContent=playerThreeMap.get("name")
        buttons[2].addEventListener("click", function() {
            let p3Arr = playerThreeMap.get("questions");
            p3Arr[2]++;
            playerThreeMap.set("questions", p3Arr);
            localStorage.setItem("player3", JSON.stringify(Array.from(playerThreeMap)));
        })
        buttons[3].textContent=playerFourMap.get("name")
        buttons[3].addEventListener("click", function() {
            let p4Arr = playerFourMap.get("questions");
            p4Arr[2]++;
            playerFourMap.set("questions", p4Arr);
            localStorage.setItem("player4", JSON.stringify(Array.from(playerFourMap)));
        })
});

const question3 = localStorage.getItem("question3")
console.log("data from local storage",question3)
const question3Display = document.getElementById("question3Display")
question3Display.textContent = question3 



