var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}



        function setLanguage(lang) {
            const translations = {
                ua: {
                    about: 'Про салон',
                    services: 'Послуги',
                    certificates: 'Сертифікати',
                    contact: 'Контакти',
                    bookOnline: 'Записатись онлайн'
                },
                ru: {
                    about: 'О салоне',
                    services: 'Услуги',
                    certificates: 'Сертификаты',
                    contact: 'Контакты',
                    bookOnline: 'Записаться онлайн'
                },
                en: {
                    about: 'About',
                    services: 'Services',
                    certificates: 'Certificates',
                    contact: 'Contact',
                    bookOnline: 'Book Online'
                }
            };

            const elements = {
                about: document.querySelector("a[href='#about']"),
                services: document.querySelector("a[href='#services']"),
                certificates: document.querySelector("a[href='#certificates']"),
                contact: document.querySelector("a[href='#contact']"),
                bookOnline: document.querySelector(".btn")
            };

            if (translations[lang]) {
                elements.about.textContent = translations[lang].about;
                elements.services.textContent = translations[lang].services;
                elements.certificates.textContent = translations[lang].certificates;
                elements.contact.textContent = translations[lang].contact;
                elements.bookOnline.textContent = translations[lang].bookOnline;
            } else {
                alert('Language not supported');
            }
        }

        const slider = document.getElementById('slider');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let index = 0;

        function showSlide(newIndex) {
            const slides = slider.children.length;
            if (newIndex < 0) {
                index = slides - 1;
            } else if (newIndex >= slides) {
                index = 0;
            } else {
                index = newIndex;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        prev.addEventListener('click', () => showSlide(index - 1));
        next.addEventListener('click', () => showSlide(index + 1));

        setInterval(() => showSlide(index + 1), 5000);


        async function fetchReviews() {
            try {
                const response = await fetch('https://www.google.com/maps/place/Massage+%26+Spa+Save+Body/@42.0230758,-88.1836931,17z/data=!4m8!3m7!1s0x8332fb3fd7c3f129:0x18cd8966a632e065!8m2!3d42.0230758!4d-88.1836931!9m1!1b1!16s%2Fg%2F11vxpnw475?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D');
                const reviews = await response.json();
                // Dynamically populate the review section
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }

        fetchReviews();



        function toggleMenu() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('show'); // Добавляем/удаляем класс "show" для раскрытия меню
        }




        document.addEventListener("DOMContentLoaded", function () {
            const burgerMenu = document.querySelector(".burger-menu");
            const navbar = document.querySelector(".navbar");
    
            burgerMenu.addEventListener("click", () => {
                navbar.classList.toggle("active");
                burgerMenu.classList.toggle("open");
            });
        });


        document.querySelectorAll(".projcard-description").forEach(function(box) {
            $clamp(box, {clamp: 6});
        });
        