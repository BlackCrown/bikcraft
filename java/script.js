//#region Mudando Logo
const logo = document.querySelector(".logomarca");
if (document.location.href === "http://127.0.0.1:5500/") {
  logo.src = "../img/bikcraft_amarelo.svg";
} else {
  logo.src = "../img/bikcraft.svg";
}
//#endregion Mudando Logo

//#region Nav Menu
const navMenuLink = document.querySelectorAll(".nav-primaria li a");
console.log(navMenuLink);
navMenuLink.forEach(function (item) {
  item.classList.add("ativarLink");
});

function linkAtivado(event) {
  console.log("clicou em: " + event);
}

navMenuLink.addEventListener("click", linkAtivado);

//#endregion Nav Menu
