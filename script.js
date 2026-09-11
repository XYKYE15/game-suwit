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

function putar() {
  const imgComputer = document.getElementsByClassName("imgComputer")[0];
  const gambar = ["jempol", "telunjuk", "kelingking"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) return (i = 0);
  }, 100);
}

const pilihanImg = document.querySelectorAll(".imgPlayer img");
pilihanImg.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pilihan.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    putar();

    setTimeout(function () {
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
    }, 1000);
  });
});
