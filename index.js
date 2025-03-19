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

// slider md
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}
setInterval(nextSlide, 4000); 


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
        // testimonials
        