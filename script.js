AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/40', 'backdrop-blur-sm');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-black/40', 'backdrop-blur-sm');
                navbar.classList.add('bg-transparent');
            }
        });
