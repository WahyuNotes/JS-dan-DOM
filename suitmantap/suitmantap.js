const komputer = document.querySelector(".komputer");
const tombol = document.querySelectorAll("button");
const jumlah = document.querySelector(".jumlah");
const nyerah = document.querySelector("h3");
var counter = 1;

tombol.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (counter >= 4) {
      nyerah.innerHTML = `Yang bener kenapa mencetnya. Tangannya bau kali nih, mending cuci kaki, cuci tangan trus tidur, coba lagi dah sampe menang`;
      nyerah.style.color = "skyblue";
    }
    if (counter >= 6) {
      nyerah.innerHTML = `Abis ini menang pasti`;
      nyerah.style.color = "yellow";
    }
    if (counter >= 7) {
      nyerah.innerHTML = `Main suit aja gak berbakat, mending cuci kaki, cuci tangan trus tidur`;
      nyerah.style.color = "red";
    }
    if (e.target.classList[0] == "gunting") {
      komputer.innerHTML = "Pilihan Komputer adalah batu";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    } else if (e.target.classList[0] == "batu") {
      komputer.innerHTML = "Pilihan Komputer adalah kertas";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    } else if (e.target.classList[0] == "kertas") {
      komputer.innerHTML = "Pilihan Komputer adalah gunting";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    }
  });
});
