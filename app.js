let numerosSorteados = [];

function gerarListaNumerosAleatorios(quantidadeNumeros, limiteInferior, limiteSuperior) {
    numerosSorteados = [];

    while (numerosSorteados.length < quantidadeNumeros) {
        let numeroAleatorio = parseInt(Math.random() * limiteSuperior) + parseInt(limiteInferior);
        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }
    return "Os números sorteados são " + numerosSorteados.toString();
}

function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroLimiteMenor = parseInt(document.getElementById("de").value);
    let numeroLimiteMaior = parseInt(document.getElementById("ate").value);

    console.log(quantidadeDeNumeros, numeroLimiteMenor, numeroLimiteMaior);
    

    if ((numeroLimiteMaior - numeroLimiteMenor + 1 ) < quantidadeDeNumeros || quantidadeDeNumeros.valueOf == NaN) {
        mostrarResultado("resultado", "Digite uma quantidade válida!");
    } else {
        let texto = gerarListaNumerosAleatorios(quantidadeDeNumeros, numeroLimiteMenor, numeroLimiteMaior);
        mostrarResultado("resultado", texto);
        let campo = document.getElementById("btn-reiniciar");
        campo.className = "container__botao";
    }
}

function mostrarResultado(tag, texto) {
    let campo = document.getElementById(tag);
    campo.textContent = texto;
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("btn-reiniciar").className= "container__botao-desabilitado";
    mostrarResultado("resultado","Números sorteados:  nenhum até agora")

}

