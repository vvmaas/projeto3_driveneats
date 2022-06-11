let escolhidoSobre = 0;
let escolhidoPrato = 0;
let escolhidoBebe = 0;

function selecionarPrato(item) {
    escolhidoPrato = document.querySelector(".prato .selecionado");
    if (escolhidoPrato !== null) {
        escolhidoPrato.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    escolhidoPrato = 1;
    liberaFechar()
}

function selecionarBebe(item) {
    escolhidoBebe = document.querySelector(".bebida .selecionado");
    if (escolhidoBebe !== null) {
        escolhidoBebe.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    escolhidoBebe = 1;
    liberaFechar()
}

function selecionarSobre(item) {
    escolhidoSobre = document.querySelector(".sobremesa .selecionado")
    if (escolhidoSobre !== null) {
        escolhidoSobre.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    escolhidoSobre = 1;
    liberaFechar()
   
}

function liberaFechar() {
        let bselecionar = document.querySelector(".botao-selecionar");
        let bfechar = document.querySelector(".botao-fechar");
    if (escolhidoPrato > 0 && escolhidoBebe > 0 && escolhidoSobre > 0){
        bfechar.classList.remove("escondido");
        bselecionar.classList.add("escondido"); 
    }
}

function msgWpp() {
    let pratoNome = document.querySelector(".prato .selecionado .nome-item").innerHTML;
    let bebeNome = document.querySelector(".bebida .selecionado .nome-item").innerHTML;
    let sobreNome = document.querySelector(".sobremesa .selecionado .nome-item").innerHTML;

    let pratoPreco = document.querySelector(".prato .selecionado .valor").innerHTML;
    let bebePreco = document.querySelector(".bebida .selecionado .valor").innerHTML;
    let sobrePreco = document.querySelector(".sobremesa .selecionado .valor").innerHTML;

    let mensagemWpp = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoNome}
    - Bebida: ${bebeNome}
    - Sobremesa: ${sobreNome}
    Total: R$ ${(Number(pratoPreco) + Number(bebePreco) + Number(sobrePreco)).toPrecision(2)}`

    document.querySelector(".botao-fechar").href = document.querySelector(".botao-fechar").href + encodeURIComponent(mensagemWpp);
}