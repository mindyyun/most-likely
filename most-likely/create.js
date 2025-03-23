const freaky=document.getElementById("neovim")

freaky.addEventListener("click", function() {
    const question1 = document.getElementById("question1") //find the element by id question 1
    const question1Data = question1.value //getting the text from the input
    localStorage.setItem("question1", question1Data) //saving it

    const question2 = document.getElementById("question2") //find the element by id question 1
    const question2Data = question2.value
    localStorage.setItem("question2", question2Data)
    window.location.href="/most-likely/game.html"
})