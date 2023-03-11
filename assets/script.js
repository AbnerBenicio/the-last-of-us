const paineis = document.querySelectorAll(".painel");
const botoes = document.querySelectorAll(".botao");
const bAtivo = document.querySelector(".botao.ativo");
const trailer = document.querySelector(".trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.querySelector(".video");

botoes.forEach((botao, idx) => {
  botao.addEventListener("click", () => {
    remove(botoes);
    botao.classList.add("ativo");
    remove(paineis);
    paineis[idx].classList.add("ativo");
  });
});

trailer.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("ativo");
  video.setAttribute("src", "https://www.youtube.com/embed/lW5kiEUVlpo");
});

fecharModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("ativo");
  video.setAttribute("src", "");
});

setInterval(() => {
  setTimeout(() => {
    let pAtivo = document.querySelector(".painel.ativo");
    for (let [key, value] of Object.entries(paineis)) {
      if (value == pAtivo) {
        index = parseInt(key) + 1;
      }
    }

    if (index == paineis.length) {
      remove(botoes);
      remove(paineis);
      botoes[0].classList.add("ativo");
      paineis[0].classList.add("ativo");
    } else {
      botoes[index - 1].classList.remove("ativo");
      botoes[index].classList.add("ativo");
      paineis[index - 1].classList.remove("ativo");
      paineis[index].classList.add("ativo");
    }
  }, 1000);
}, 3000);

function remove(lista) {
  lista.forEach((painel) => {
    painel.classList.remove("ativo");
  });
}

function adiciona(lista) {
  lista.forEach((painel) => {
    painel.classList.add("ativo");
  });
}
