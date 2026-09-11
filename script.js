function getPilihanComp() {
  let comp = Math.random();
  if (comp < 0.36) return (comp = "jempol");
  if (comp >= 0.36 && comp < 0.47) return (comp = "telunjuk");

  return (comp = "kelingking");
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "jempol") return comp == "telunjuk" ? "MENANG" : "KALAH";
  if (player == "telunjuk") return comp == "kelingking" ? "KALAH" : "MENANG";
  if (player == "kelingking") return comp == "jempol" ? "MENANG" : "KALAH";
}

let playerJempol = document.getElementsByClassName("jempol")[0];
playerJempol.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = playerJempol.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComputer = document.getElementsByClassName("imgComputer")[0];
  imgComputer.setAttribute("src", `img/${pilihanComp}.png`);

  const info = document.getElementsByClassName("info")[0];
  info.innerHTML = hasil;

  // menentukan score
  let totalWin = document.getElementById("totalWin");
  let totalLose = document.getElementById("totalLose");
  if (hasil == "MENANG") {
    totalWin.innerHTML = parseInt(totalWin.innerHTML) + 1;
  } else if (hasil == "KALAH") {
    totalLose.innerHTML = parseInt(totalLose.innerHTML) + 1;
  }
});

let playerTelunjuk = document.getElementsByClassName("telunjuk")[0];
playerTelunjuk.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = playerTelunjuk.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComputer = document.getElementsByClassName("imgComputer")[0];
  imgComputer.setAttribute("src", `img/${pilihanComp}.png`);

  const info = document.getElementsByClassName("info")[0];
  info.innerHTML = hasil;

  // menentukan score
  let totalWin = document.getElementById("totalWin");
  let totalLose = document.getElementById("totalLose");
  if (hasil == "MENANG") {
    totalWin.innerHTML = parseInt(totalWin.innerHTML) + 1;
  } else if (hasil == "KALAH") {
    totalLose.innerHTML = parseInt(totalLose.innerHTML) + 1;
  }
});

let playerKelingking = document.getElementsByClassName("kelingking")[0];
playerKelingking.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = playerKelingking.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComputer = document.getElementsByClassName("imgComputer")[0];
  imgComputer.setAttribute("src", `img/${pilihanComp}.png`);

  const info = document.getElementsByClassName("info")[0];
  info.innerHTML = hasil;

  // menentukan score
  let totalWin = document.getElementById("totalWin");
  let totalLose = document.getElementById("totalLose");
  if (hasil == "MENANG") {
    totalWin.innerHTML = parseInt(totalWin.innerHTML) + 1;
  } else if (hasil == "KALAH") {
    totalLose.innerHTML = parseInt(totalLose.innerHTML) + 1;
  }
});
