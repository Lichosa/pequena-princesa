document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggle básico para mobile
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });

    // 2. Animação de Scroll (Intersection Observer)
    const animateElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

    // 3. Validação de Formulário
    const form = document.getElementById('form-contato');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // Validação simples
        if (nome.length < 3) {
            showFeedback('Por favor, insira seu nome completo.', 'red');
            return;
        }

        if (!validateEmail(email)) {
            showFeedback('Por favor, insira um e-mail válido.', 'red');
            return;
        }

        if (telefone.length < 8) {
            showFeedback('Por favor, insira um telefone válido.', 'red');
            return;
        }

        // Simulação de envio
        showFeedback('Obrigado! Mensagem enviada com sucesso. Entraremos em contato em breve.', 'green');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showFeedback(message, color) {
        feedback.textContent = message;
        feedback.style.color = color;
        feedback.style.marginTop = '15px';
        feedback.style.fontWeight = 'bold';
        
        setTimeout(() => {
            feedback.textContent = '';
        }, 5000);
    }
});