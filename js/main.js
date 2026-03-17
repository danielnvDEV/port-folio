        // Hamburger
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

        // Scroll reveal — con fallback para que nunca queden ocultos
        const reveals = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        reveals.forEach(el => io.observe(el));

        // Fallback: si tras 1.5s hay elementos todavía ocultos, hacerlos visibles
        setTimeout(() => {
            document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
        }, 1500);

        // Nav activo en scroll
        const sections = document.querySelectorAll('section[id]');
        const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) current = s.id; });
            navAnchors.forEach(a => {
                const isActive = a.getAttribute('href') === '#' + current;
                a.classList.toggle('active', isActive);
            });
        }, { passive: true });

        // Form submit
        async function handleSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type=submit]');

            const payload = {
                nombre:  document.getElementById('nombre').value.trim(),
                email:   document.getElementById('email').value.trim(),
                asunto:  document.getElementById('asunto').value,
                mensaje: document.getElementById('mensaje').value.trim(),
            };

            btn.textContent = 'Enviando...';
            btn.disabled = true;

            try {
                const res = await fetch('/api/contact', {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:    JSON.stringify(payload),
                });

                if (!res.ok) throw new Error();

                btn.textContent = '✅ ¡Mensaje enviado!';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                e.target.reset();
            } catch {
                btn.textContent = '❌ Error al enviar. Inténtalo de nuevo.';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                btn.disabled = false;
            }

            setTimeout(() => {
                btn.textContent = 'Enviar mensaje ✉️';
                btn.style.background = '';
                btn.disabled = false;
            }, 3500);
        }
    