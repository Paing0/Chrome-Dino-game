let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let h2 = document.querySelector("#game-over");
let retryText = document.querySelector("#retry");
let score = document.querySelector("#score");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(() => {
  // get dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // get cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  //detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    gameOver();
    retry();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    jump();
  }
});

const gameOver = () => {
  h2.textContent = "Game Over!";
  retryText.textContent = "Press space to retry";
  cactus.style.animation = "0";
  dino.style.backgroundImage = "url('img/dino-lose.png')";
};

const retry = () => {
  document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
      dino.style.backgroundImage = "url('img/dino.png')";
      h2.textContent = "";
      retryText.textContent = "";
      cactus.style.animation = "block 1.5s linear infinite";
    }
  });
};
