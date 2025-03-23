document.addEventListener("DOMContentLoaded", function () {
    const question1 = localStorage.getItem("question1") || "No question found";
    console.log("data from local storage:", question1);
    document.getElementById("question1Display").textContent = question1;

    // Retrieve names and scores from localStorage
    // const player1 = JSON.parse(localStorage.getItem("player1")) || { name: "Player 1", questions: [0, 0, 0, 0, 0] };
    // const player2 = JSON.parse(localStorage.getItem("player2")) || { name: "Player 2", questions: [0, 0, 0, 0, 0] };
    // const player3 = JSON.parse(localStorage.getItem("player3")) || { name: "Player 3", questions: [0, 0, 0, 0, 0] };
    // const player4 = JSON.parse(localStorage.getItem("player4")) || { name: "Player 4", questions: [0, 0, 0, 0, 0] };
    const player1 = JSON.parse(localStorage.getItem("player1")) || { name: "Player 1", questions: [0, 0, 0, 0, 0] };
    const player2 = JSON.parse(localStorage.getItem("player2")) || { name: "Player 2", questions: [0, 0, 0, 0, 0] };
    const player3 = JSON.parse(localStorage.getItem("player3")) || { name: "Player 3", questions: [0, 0, 0, 0, 0] };
    const player4 = JSON.parse(localStorage.getItem("player4")) || { name: "Player 4", questions: [0, 0, 0, 0, 0] };

    // Debugging: Check if data is retrieved correctly
    console.log("Retrieved Players Data:");
    console.log("Player 1:", player1);
    console.log("Player 2:", player2);
    console.log("Player 3:", player3);
    console.log("Player 4:", player4);

    // Ensure canvas exists
    const canvas = document.getElementById('pie1');
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    // Get 2D context for Chart.js
    const ctx = canvas.getContext('2d');

    // Create the pie chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [player1.name, player2.name, player3.name, player4.name],
            datasets: [{
                data: [
                    player1.questions[0], 
                    player2.questions[0], 
                    player3.questions[0], 
                    player4.questions[0]
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});


