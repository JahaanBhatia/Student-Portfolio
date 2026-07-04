/* ==========================================================
   JAHAAN BHATIA PORTFOLIO
   JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Typing Animation
    ========================================== */

    const typingElement = document.getElementById("typing");

    const words = [
        "B.Tech Cybersecurity Student",
        "Networking Enthusiast",
        "Aspiring Cybersecurity Professional",
        "Continuous Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

                charIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 55 : 90);

    }

    typeEffect();



    /* ==========================================
       Scroll Reveal
    ========================================== */

    const fadeElements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.18

    });

    fadeElements.forEach(section => {

        observer.observe(section);

    });



    /* ==========================================
       Progress Bars
    ========================================== */

    const progressBars = document.querySelectorAll(".progress-bar");

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.width = entry.target.dataset.width;

            }

        });

    }, {

        threshold: 0.3

    });

    progressBars.forEach(bar => {

        skillObserver.observe(bar);

    });



    /* ==========================================
       Back To Top Button
    ========================================== */

    const topButton = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.style.display = "block";

        }

        else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    /* ==========================================
       Active Navigation Highlight
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.style.color = "white";

            if (link.getAttribute("href") === "#" + current) {

                link.style.color = "#d5ccff";

            }

        });

    });



    /* ==========================================
       Smooth Card Hover (Optional)
    ========================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

});