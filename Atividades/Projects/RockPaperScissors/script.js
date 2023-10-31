function playRockPaperScissor(player1, player2) {
    let result = '';
    if (player1 === player2) return 'Empate!';
    if (player1 === 'Pedra' && player2 === 'Tesoura') {
        result = 'Jogador 1 venceu!';
    }
    if (player1 === 'Pedra' && player2 === 'Papel') {
        result = 'Jogador 2 venceu!';
    }
    if (player1 === 'Papel' && player2 === 'Pedra') {
        result = 'Jogador 1 venceu!';
    }
    if (player1 === 'Papel' && player2 === 'Tesoura') {
        result = 'Jogador 2 venceu!';
    }
    if (player1 === 'Tesoura' && player2 === 'Papel') {
        result = 'Jogador 1 venceu!';
    }
    if (player2 === 'Pedra' && player1 === 'Tesoura') {
        result = 'Jogador 2 venceu!';
    }
    return result;
    
}
