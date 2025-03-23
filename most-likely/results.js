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

const question1 = localStorage.getItem("question1")
console.log("data from local storage",question1)
const question1Display = document.getElementById("question1Display")
question1Display.textContent = question1

const question2 = localStorage.getItem("question2")
console.log("data from local storage",question2)
const question2Display = document.getElementById("question2Display")
question2Display.textContent = question2

const question3 = localStorage.getItem("question3")
console.log("data from local storage",question3)
const question3Display = document.getElementById("question3Display")
question3Display.textContent = question3

const question4 = localStorage.getItem("question4")
console.log("data from local storage",question4)
const question4Display = document.getElementById("question4Display")
question4Display.textContent = question4

const question5 = localStorage.getItem("question5")
console.log("data from local storage",question5)
const question5Display = document.getElementById("question5Display")
question5Display.textContent = question5


// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const ctx = document.getElementById('myPieChart').getContext('2d');

    // Pie chart data
    const data = {
        labels: [player1, player2, player3, player4, player5],
        datasets: [{
            data: [name1_count, name2_count, name3_count, name4_count, name5_count], // Values for each segment
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#8E44AD"], // Colors
            hoverOffset: 10
        }]
    };

    // Create the pie chart
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom' // Moves legend below the chart
                }
            }
        }
    });
});