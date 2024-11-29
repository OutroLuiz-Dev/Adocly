// index.js
document.getElementById('formEmail').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega o valor do input de email
    const email = document.getElementById('email').value;

    // Redireciona para sobre.html, passando o valor de email como parâmetro
    window.location.href = `sobre.html?email=${encodeURIComponent(email)}`;
});
