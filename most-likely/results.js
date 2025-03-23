document.addEventListener("DOMContentLoaded", function () {
    // Retrieve player data from localStorage
    let players = [
        new Map(JSON.parse(localStorage.getItem("player1"))),
        new Map(JSON.parse(localStorage.getItem("player2"))),
        new Map(JSON.parse(localStorage.getItem("player3"))),
        new Map(JSON.parse(localStorage.getItem("player4")))
    ];

    // Retrieve questions from localStorage
    let questions = [
        localStorage.getItem("question1"),
        localStorage.getItem("question2"),
        localStorage.getItem("question3"),
        localStorage.getItem("question4"),
        localStorage.getItem("question5")
    ];

    // Create a container div
    const container = document.createElement("div");
    document.body.appendChild(container);

    // Loop through each question
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.style.border = "2px solid black";
        questionDiv.style.padding = "10px";
        questionDiv.style.margin = "10px";
        questionDiv.innerHTML = `<h3>Question ${index + 1}: ${question}</h3>`;

        // Display each player's name and their score for this question
        players.forEach((player, i) => {
            if (player.size > 0) {
                const name = player.get("name"); // Get player name
                const scores = player.get("questions"); // Get score array

                if (scores && scores.length > index) {
                    const playerDiv = document.createElement("p");
                    playerDiv.textContent = `${name}: ${scores[index]}`;
                    questionDiv.appendChild(playerDiv);
                }
            }
        });
        container.appendChild(questionDiv);
    });
});
