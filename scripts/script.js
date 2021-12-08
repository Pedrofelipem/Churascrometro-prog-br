let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let inputResultado = document.getElementById('resultado');

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarneTotal = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdLitrosCervejaTotal = litrosCervejaPP(duracao) * adultos;
    let qtdBedidasPP = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    inputResultado.innerHTML = `<p id="textoResultado" style="color:black;">${qtdCarneTotal / 1000} Kg de carne</p>`
    inputResultado.innerHTML += `<p id="textoResultado" style="color:black;">${Math.ceil(qtdLitrosCervejaTotal / 1000)} L de cerveja</P>`
    inputResultado.innerHTML += `<p id="textoResultado" style="color:black;">${Math.ceil(qtdBedidasPP / 1000)} L de bebidas</P>`

}

let carnePP = function(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

let litrosCervejaPP = function(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

let bebidasPP = function(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}