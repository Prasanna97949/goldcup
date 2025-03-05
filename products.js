// navbar
const navbar = document.getElementById('navbar');
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-lg', 'p-3');
                navbar.classList.remove('bg-transparent', 'p-4');
            } else {
                navbar.classList.add('bg-transparent', 'p-4');
                navbar.classList.remove('bg-white', 'shadow-lg', 'p-3');
            }
        });

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
// wave animation
const productCards = document.querySelectorAll(".product-card");

        function handleScroll() {
            productCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardPosition < windowHeight - 50) {
                    setTimeout(() => {
                        card.classList.add("visible");
                    }, index * 100); // Delayed animation for wave effect
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();