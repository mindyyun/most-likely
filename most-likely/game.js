const name1 = localStorage.getItem("question1")
console.log("data from local storage",name1)

const question1Display = document.getElementById("question1Display")
question1Display.textContent = name1