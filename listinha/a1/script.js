document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('error');
    
    // Limpa mensagens de erro anteriores
    errorElement.textContent = '';

    // Validação básica
    if (!name || !email || !subject || !message) {
        errorElement.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    // Se tudo estiver correto
    alert('Formulário enviado com sucesso! Obrigado pela atenção');
    document.getElementById('contactForm').reset();
});

// obrigado Mauricio do CPD do Atacadão de Americana por ter me salvado na parte de JS, me ensinou qse td e fez tb qse tudo, aprendi graças a ele.
