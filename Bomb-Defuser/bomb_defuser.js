let timeLeft = 10;
let timer = document.getElementById("timer");

let timerId = setInterval(() => {
  timeLeft -= 1;
  timer.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerId);
    triggerBlast();
  }
}, 1000);

function defuseBomb() {
  let input = document.getElementById("defuseInput").value.trim();
  if (input === "DEFUSE") {
    clearInterval(timerId);
    alert("✅ Bomb Defused Successfully!");
    timer.style.color = "green";
    timer.textContent = "You Are Safe.";
  } else {
    clearInterval(timerId);
    alert("❌ Incorrect code! Try again!");
    triggerBlast();
  }
}

function triggerBlast() {
    document.getElementById("defuseInput").style.display = "none";
    document.body.classList.add("blast-screen");
    document.getElementById("blastSound").play();
    document.getElementById("explosion").style.display = "flex";
    document.getElementById("explosion").style.alignContent = "center";
    document.getElementById("timer").textContent = "💥 BOOM!";
    document.getElementById("heading").style.display = "none";
    document.getElementById("defuseButton").style.display = "none";
    document.getElementById("code").style.display = "none";
}
