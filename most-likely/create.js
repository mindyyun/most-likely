const user_questions=document.getElementById("neovim")

user_questions.addEventListener("click", function() {
    const question1 = document.getElementById("question1") //find the element by id question 1
    const question1Data = question1.value //getting the text from the input
    localStorage.setItem("question1", question1Data) //saving it

    const question2 = document.getElementById("question2") //find the element by id question 1
    const question2Data = question2.value
    localStorage.setItem("question2", question2Data)
    window.location.href="/most-likely/game.html"

    const question3 = document.getElementById("question3") //find the element by id question 1
    const question3Data = question3.value
    localStorage.setItem("question3", question3Data)
    window.location.href="/most-likely/game.html"

    const question4 = document.getElementById("question4") //find the element by id question 1
    const question4Data = question4.value
    localStorage.setItem("question4", question4Data)
    window.location.href="/most-likely/game.html"

    const question5 = document.getElementById("question5") //find the element by id question 1
    const question5Data = question5.value
    localStorage.setItem("question5", question5Data)
    window.location.href="/most-likely/game.html"

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;
    
    localStorage.setItem("player1", name1);
    localStorage.setItem("player2", name2);
    localStorage.setItem("player3", name3);
    localStorage.setItem("player4", name4);

    window.location.href = "game.html";
})