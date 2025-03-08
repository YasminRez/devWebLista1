function triangulo() {
    const linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));
    
    if (isNaN(linhas) || linhas <= 0) {
        console.log("Por favor, digite um número válido e maior que zero.");
        return;
    }
    
    let triangulo = "";
    for (let i = 1; i <= linhas; i++) {
        triangulo += "*".repeat(i) + "\n";
    }
    console.log(triangulo);
}

triangulo();