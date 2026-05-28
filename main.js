/* ==========================================================================
   ARQUIVO PRINCIPAL DE SCRIPT (MAIN.JS) - PROJETO AGRINHO 2026
   ========================================================================== */

// Executa quando a página HTML terminar de carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    console.log("Projeto Agrinho 2026 carregado com sucesso! 🌱");
    // Você pode adicionar outras funções de inicialização aqui, se necessário
});

/**
 * Função que sorteia e exibe uma dica de sustentabilidade no campo.
 * Alinhado ao tema: "Agro forte, Futuro Sustentável"
 */
function mostrarDica() {
    // Lista de dicas e boas práticas agrícolas
    const dicas = [
        "💡 Economia de água: Sistemas de irrigação por gotejamento reduzem o desperdício em até 60%!",
        "🌱 Rotação de culturas: Alternar as espécies plantadas ajuda a manter o solo fértil e evita pragas naturalmente.",
        "☀️ Energia limpa: O uso de painéis solares em propriedades rurais reduz custos e diminui a pegada de carbono.",
        "🚜 Tecnologia no campo: Sensores de umidade no solo ajudam o agricultor a irrigar a plantação apenas quando necessário.",
        "🐝 Preservação de polinizadores: Proteger as abelhas locais garante a polinização e aumenta a produtividade das colheitas.",
        "♻️ Compostagem: Transformar restos orgânicos em adubo natural reduz o uso de fertilizantes químicos."
    ];

    // Seleciona o elemento de texto na página HTML
    const elementoMensagem = document.getElementById('mensagem-js');

    // Sorteia um índice aleatório com base no tamanho da lista de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Guarda a dica sorteada
    const dicaSelecionada = dicas[indiceAleatorio];
    
    // Insere o texto da dica dentro do elemento HTML para o usuário ver
    if (elementoMensagem) {
        elementoMensagem.innerText = dicaSelecionada;
        
        // Efeito visual sutil de piscar ao trocar a dica
        elementoMensagem.style.opacity = 0;
        setTimeout(() => {
            elementoMensagem.style.opacity = 1;
        }, 100);
    }
}