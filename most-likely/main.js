let slideIndex = 1;
showSlides(slideIndex);

// Function to handle next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to handle dot navigation
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("themes");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) {
    console.error("One or more name elements not found!");
    return;
  }

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
    const name1 = document.getElementById("name1");
    const name2 = document.getElementById("name2");
    const name3 = document.getElementById("name3");
    const name4 = document.getElementById("name4");

    if (!name1 || !name2 || !name3 || !name4) {
        console.error("One or more name elements not found!");
        return;
    }

    let playerOne = new Map([
        ["name", name1.textContent],
        ["questions", [0,0,0,0,0]]
    ])
    let playerTwo = new Map([
        ["name", name1.textContent],
        ["questions", [0,0,0,0,0]]
    ])
    let playerThree = new Map([
        ["name", name1.textContent],
        ["questions", [0,0,0,0,0]]
    ])
    let playerFour = new Map([
        ["name", name1.textContent],
        ["questions", [0,0,0,0,0]]
    ])

    name1.addEventListener("click", function () {
        playerOne.questions[0]++;
        console.log("Updated Player 1:", playerOne);
        localStorage.setItem("player1", playerOne)
    });

    name2.addEventListener("click", function () {
        playerTwo.questions[0]++;
        console.log("Updated Player 2:", playerTwo);
        localStorage.setItem("player2", playerTwo)
    });

    name3.addEventListener("click", function () {
        playerThree.questions[0]++;
        console.log("Updated Player 3:", playerThree);
        localStorage.setItem("player3", playerThree);
    });

    name4.addEventListener("click", function () {
        playerFour.questions[0]++;
        console.log("Updated Player 4:", playerFour);
        localStorage.setItem("player4", playerFour);
    });
});



// players = [{ name: "min", questions: [1, 0, 0, 3]}, {name: "bob", upvotes: 0}]

// player.questions[0] ++;


// for player in players: player.questions 




