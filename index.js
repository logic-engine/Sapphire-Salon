        // Initialize Icons
        lucide.createIcons();

        // Navbar Interaction
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('nav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Scroll Reveal
        window.addEventListener('scroll', () => {
            let reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint = 150;
                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                }
            }
        });

        // Form Submission
        document.getElementById('reservationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            btn.innerHTML = 'PROCESSING...';
            btn.style.opacity = '0.5';
            
            setTimeout(() => {
                alert('RESERVATION LOGGED. We will verify your slot shortly via call.');
                btn.innerHTML = 'AUTHORIZE BOOKING';
                btn.style.opacity = '1';
                this.reset();
            }, 1500);
        });
