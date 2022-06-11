let escolhidoSobre;
let escolhidoPrato;
let escolhidoBebe;

function selecionarPrato(item) {
    escolhidoPrato = document.querySelector(".prato .selecionado");
    if (escolhidoPrato !== null) {
        escolhidoPrato.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    liberaFechar();
}

function selecionarBebe(item) {
    escolhidoBebe = document.querySelector(".bebida .selecionado");
    if (escolhidoBebe !== null) {
        escolhidoBebe.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    liberaFechar();
}

function selecionarSobre(item) {
    escolhidoSobre = document.querySelector(".sobremesa .selecionado")
    if (escolhidoSobre !== null) {
        escolhidoSobre.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    liberaFechar();
}

function liberaFechar() {
    if (escolhidoPrato && escolhidoBebe && escolhidoSobre){
        let bselecionar = document.querySelector(".botao-selecionar");
        let bfechar = document.querySelector(".botao-fechar");
        bfechar.classList.remove("escondido");
        bselecionar.classList.add("escondido");
    }
}