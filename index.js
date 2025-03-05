// navbar
const navbar = document.getElementById('navbar');
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black', 'shadow-lg', 'p-3');
                navbar.classList.remove('bg-transparent', 'p-4');
            } else {
                navbar.classList.add('bg-transparent', 'p-4');
                navbar.classList.remove('bg-black', 'shadow-lg', 'p-3');
            }
        });

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// slider
let slides = document.querySelectorAll(".slide");
        let dots = document.querySelectorAll(".dot");
        let index = 0;
        let interval = setInterval(nextSlide, 3000);

        function updateSlides() {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                dots[i].classList.remove("bg-red-500");
            });

            slides[index].classList.add("active");
            dots[index].classList.add("bg-red-500");
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            updateSlides();
        }

        function jumpToSlide(slideIndex) {
            index = slideIndex;
            updateSlides();
        }

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