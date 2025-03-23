const mindyButton = document.getElementById("demo")
let clickCount = 0

mindyButton.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount)
})