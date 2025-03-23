const mindyButton = document.getElementById("demo")
let clickCount = 0

mindyButton.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount)
})

const name1 = document.getElementById("name")
let name1_count = 0

name1.addEventListener("click", function() {
    name1_count++;
    console.log(name1_count)
})