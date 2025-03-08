function jogar() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaUsuario = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    if (!opcoes.includes(escolhaUsuario)) {
        console.log("Escolha inválida! Tente novamente uma das opções.");
        return;
    }

    console.log(`Usuário escolheu: ${escolhaUsuario}`);
    console.log(`Computador escolheu: ${escolhaComputador}`);

    switch (true) {
        case escolhaUsuario == escolhaComputador:
            console.log("Empate!");
            break;
        case (escolhaUsuario == "pedra" && escolhaComputador == "tesoura"):
        case (escolhaUsuario == "papel" && escolhaComputador == "pedra"):
        case (escolhaUsuario == "tesoura" && escolhaComputador == "papel"):
            console.log("Você venceu!");
            break;
        default:
            console.log("Você perdeu!");
    }
}

jogar();
