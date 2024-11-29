// sobre.js
window.onload = function() {
    // Função para obter o parâmetro "email" da URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Pega o valor do parâmetro "email" da URL
    const email = getParameterByName('email');

    // Se houver um email, exibimos no modal
    if (email) {
        document.getElementById('emailText').textContent = email; // Exibe o email no modal
        document.getElementById('emailModal').style.display = 'flex'; // Torna o modal visível
    } else {
        alert('Nenhum email fornecido.');
    }

    // Fechar o modal quando o botão for clicado
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('emailModal').style.display = 'none';
    });
};
