const paineis = document.querySelectorAll(".painel");
const botoes = document.querySelectorAll(".botao");
const bAtivo = document.querySelector(".botao.ativo");

let index = 2;

botoes.forEach((botao, idx) => {
  botao.addEventListener("click", () => {
    remove(botoes);
    botao.classList.add("ativo");
    remove(paineis);
    paineis[idx].classList.add("ativo");
  });
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
