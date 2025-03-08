
function calcularSoma() {
    const termos = parseInt(prompt("Digite um número para a soma:"));
    
    if (isNaN(termos) || termos <= 0) {
        console.log("Por favor, digite um número válido e maior que zero.");
        return;
    }
    
    let numero = 0;
    let soma = 0;
    let serie = "";
    
    for (let i = 1; i <= termos; i++) {
        numero = numero * 10 + 1;
        soma += numero;
        serie += (i === 1) ? `${numero}` : ` + ${numero}`;
    }
    
    console.log(`${serie}`);
    console.log(`A soma é: ${soma}`);
}

calcularSoma();
