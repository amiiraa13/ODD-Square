let score = 1;
let tableColor = [
  "#FB390F",
  "#C6FB0F",
  "#0FFB9B",
  "#0FDBFB",
  "#0F25FB",
  "#8C0FFB",
  "#FB0FBE",
];
let totalSecond = 60;
let affScore = document.querySelector(`#score`);
let affTime = document.querySelector("#temps");
let audio = new Audio("./assets/sounds/bip.wav");

function generCarre(nmbCarre) {
  let colorRandomIntru = "";
  let radom = randomize(0, 2);
  let carreContainer = document.querySelector("#carreContainer");
  let colorRandom = tableColor[randomize(0, tableColor.length - 1)];

  carreContainer.innerHTML = "";
  do {
    colorRandomIntru = tableColor[randomize(0, tableColor.length - 1)];
  } while (colorRandomIntru == colorRandom);
  for (let i = 0; i < nmbCarre; i++) {
    let carre = document.createElement("div");
    if (i == radom) {
      carre.style.backgroundColor = colorRandomIntru;
      carre.classList.add("carreT");
      carre.addEventListener("click", () => {
        audio.play();
        generCarre(3);
        document.querySelector("#score").innerHTML = score;
        score++;
      });
    } else {
      carre.style.backgroundColor = colorRandom;
      audio.play();
      carre.classList.add("carre");
      carre.addEventListener("click", () => {});
    }
    carreContainer.appendChild(carre);
  }
}
timer();
generCarre(3);

function randomize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function timer() {
  let timerInterval = setInterval(() => {
    totalSecond--;
    document.querySelector("#temps").textContent = totalSecond;
    if (totalSecond === 0) {
      clearInterval(timerInterval);
      generCarre(-1);
      affScore.innerHTML = `Votre score est de ${score}`;
      document.querySelector("#rejoue").classList.remove("hidden");
    }
  }, 1000);
}

function replay() {
  score = 0;
  totalSecond = 60;
  affScore.innerHTML = score;
  affTime.innerHTML = totalSecond;
  timer();
  document.querySelector("#rejoue").classList.add("hidden");
  generCarre(3);
}
