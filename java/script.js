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

function linkAtivado(link) {
  const url = location.href;
  if (url.includes(link.href)) {
    link.classList.add("linkAtivo");
  }
}

navMenuLink.forEach(linkAtivado);

//#endregion Nav Menu

//#region Selecao de item orcamento
const parametros = new URLSearchParams(location.search);
console.log(parametros);

function orcamentoEscolha(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(orcamentoEscolha);

//#endregion Selecao de item orcamento
