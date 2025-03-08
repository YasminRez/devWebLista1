function exibirTabuada() {
    const numero = parseInt(prompt("Digite um número para a calcular a tabuada:"));
    
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

exibirTabuada();