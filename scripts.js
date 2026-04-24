// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
// Lógica para o formulário de RSVP
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
        // Feedback visual de "acelerando" no botão de envio
            const submitBtn = rsvpForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'ACELERANDO... 🏎️';
            submitBtn.disabled = true;

            // O formulário será enviado normalmente para o endpoint do Sheet Monkey
           
            
            //  AJAX (Fetch) para evitar recarregar a página
            
            e.preventDefault();
            const formData = new FormData(rsvpForm);
            fetch(rsvpForm.action, {
                method: 'POST',
                body: formData,
            }).then(response => {
                if (response.ok) {
                    alert('Presença confirmada com sucesso! Nos vemos na pista!');
                    rsvpForm.reset();
                } else {
                    alert('Ops! Houve um problema. Tente novamente.');
                }
            }).finally(() => {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            });
            
        });
    }

    // Efeito de Parallax suave no Hero 
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('section#pit-stop');
        if (heroBg) {
            heroBg.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });
});