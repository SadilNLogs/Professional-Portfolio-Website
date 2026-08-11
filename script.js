/* ==============================================================
   SADIL NETHWAN PORTFOLIO
   JAVASCRIPT
============================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================================
       1. DARK / LIGHT MODE
    ========================================================== */

    const root =
        document.documentElement;

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        document.getElementById("themeIcon");

    const themeText =
        document.getElementById("themeText");


    /*
       Get previously selected theme
    */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme) {

        root.setAttribute(
            "data-theme",
            savedTheme
        );

    } else {

        /*
           Default = Dark Mode
        */

        root.setAttribute(
            "data-theme",
            "dark"
        );

    }


    function updateThemeButton() {

        const currentTheme =
            root.getAttribute("data-theme");


        if (currentTheme === "dark") {

            themeIcon.className =
                "bi bi-sun-fill";

            themeText.textContent =
                "Light";

        } else {

            themeIcon.className =
                "bi bi-moon-stars-fill";

            themeText.textContent =
                "Dark";

        }

    }


    updateThemeButton();


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                const currentTheme =
                    root.getAttribute(
                        "data-theme"
                    );


                const newTheme =

                    currentTheme === "dark"
                        ? "light"
                        : "dark";


                root.setAttribute(
                    "data-theme",
                    newTheme
                );


                localStorage.setItem(
                    "portfolio-theme",
                    newTheme
                );


                updateThemeButton();

            }
        );

    }



    /* ==========================================================
       2. NAVBAR SCROLL EFFECT
    ========================================================== */

    const navbar =
        document.getElementById(
            "mainNavbar"
        );


    function navbarScroll() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        navbarScroll
    );


    navbarScroll();



    /* ==========================================================
       3. MOBILE NAVIGATION AUTO CLOSE
    ========================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );


    const navbarCollapse =
        document.getElementById(
            "navbarNav"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    navbarCollapse &&
                    navbarCollapse.classList.contains(
                        "show"
                    )
                ) {

                    const collapse =
                        bootstrap.Collapse.getOrCreateInstance(
                            navbarCollapse
                        );


                    collapse.hide();

                }

            }
        );

    });



    /* ==========================================================
       4. ACTIVE NAV LINK
    ========================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function scrollSpy() {

        const scrollPosition =
            window.pageYOffset;


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 160;


                const sectionHeight =
                    section.offsetHeight;


                const sectionID =
                    section.getAttribute("id");


                const link =
                    document.querySelector(
                        `.navbar-nav a[href="#${sectionID}"]`
                    );


                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <
                    sectionTop + sectionHeight
                ) {

                    navLinks.forEach(
                        function (navLink) {

                            navLink.classList.remove(
                                "active"
                            );

                        }
                    );


                    if (link) {

                        link.classList.add(
                            "active"
                        );

                    }

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        scrollSpy
    );



    /* ==========================================================
       5. SCROLL FADE ANIMATION
    ========================================================== */

    const fadeElements =
        document.querySelectorAll(
            ".fade-in"
        );


    const fadeObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("appear");


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {

                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"

            }

        );


    fadeElements.forEach(
        function (element) {

            fadeObserver.observe(
                element
            );

        }
    );



    /* ==========================================================
       6. SKILL PROGRESS ANIMATION
    ========================================================== */

    const progressBars =
        document.querySelectorAll(
            ".progress-value"
        );


    const progressObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            const value =
                                entry.target.dataset.width;


                            entry.target.style.width =
                                value + "%";


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.5
            }

        );


    progressBars.forEach(
        function (bar) {

            progressObserver.observe(
                bar
            );

        }
    );



    /* ==========================================================
       7. CONTACT FORM
    ========================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formFeedback =
        document.getElementById(
            "formFeedback"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (
                    contactForm.checkValidity()
                ) {

                    if (formFeedback) {

                        formFeedback.classList.remove(
                            "d-none"
                        );

                    }


                    contactForm.reset();


                    setTimeout(
                        function () {

                            if (formFeedback) {

                                formFeedback.classList.add(
                                    "d-none"
                                );

                            }

                        },

                        5000
                    );

                } else {

                    contactForm.classList.add(
                        "was-validated"
                    );

                }

            }
        );

    }



    /* ==========================================================
       8. BACK TO TOP
    ========================================================== */

    const backToTop =
        document.getElementById(
            "btnBackToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    backToTop.classList.remove(
                        "d-none"
                    );

                } else {

                    backToTop.classList.add(
                        "d-none"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* ==========================================================
       9. PROFILE PHOTO SMALL 3D MOUSE EFFECT
    ========================================================== */

    const avatar =
        document.getElementById(
            "avatar3D"
        );


    if (avatar) {

        avatar.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    avatar.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (
                        x - centerX
                    ) / 35;


                const rotateX =
                    (
                        centerY - y
                    ) / 35;


                avatar.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        avatar.addEventListener(
            "mouseleave",
            function () {

                avatar.style.transform =
                    "rotateX(0deg) rotateY(0deg)";

            }
        );

    }



    /* ==========================================================
       10. 3D PARTICLE BACKGROUND
    ========================================================== */

    const canvas =
        document.getElementById(
            "threeBg"
        );


    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext(
            "2d"
        );


    let width;

    let height;

    let particles = [];


    let mouse = {

        x: 0,

        y: 0

    };


    const SETTINGS = {

        desktopParticles: 75,

        mobileParticles: 40,

        connectionDistance: 145,

        particleSpeed: 0.25,

        mouseMovement: 18

    };



    /* ==========================================================
       RESIZE CANVAS
    ========================================================== */

    function resizeCanvas() {

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        width =
            window.innerWidth;


        height =
            window.innerHeight;


        canvas.width =
            width * dpr;


        canvas.height =
            height * dpr;


        canvas.style.width =
            width + "px";


        canvas.style.height =
            height + "px";


        ctx.setTransform(

            dpr,

            0,

            0,

            dpr,

            0,

            0

        );


        createParticles();

    }



    /* ==========================================================
       PARTICLE
    ========================================================== */

    class Particle {

        constructor() {

            this.create();

        }


        create() {

            this.x =
                Math.random() * width;


            this.y =
                Math.random() * height;


            this.z =
                Math.random() * 2 + 0.5;


            this.vx =
                (
                    Math.random() - 0.5
                ) *
                SETTINGS.particleSpeed;


            this.vy =
                (
                    Math.random() - 0.5
                ) *
                SETTINGS.particleSpeed;


            this.size =
                Math.random() *
                1.8 +
                0.7;

        }


        update() {

            this.x +=
                this.vx;


            this.y +=
                this.vy;


            if (
                this.x < 0 ||
                this.x > width
            ) {

                this.vx *= -1;

            }


            if (
                this.y < 0 ||
                this.y > height
            ) {

                this.vy *= -1;

            }

        }


        draw() {

            const theme =
                root.getAttribute(
                    "data-theme"
                );


            const alpha =

                theme === "dark"
                    ? 0.55
                    : 0.30;


            const offsetX =

                mouse.x *
                this.z *
                0.015;


            const offsetY =

                mouse.y *
                this.z *
                0.015;


            ctx.beginPath();


            ctx.arc(

                this.x + offsetX,

                this.y + offsetY,

                this.size * this.z,

                0,

                Math.PI * 2

            );


            ctx.fillStyle =

                theme === "dark"

                    ? `rgba(0,230,138,${alpha})`

                    : `rgba(0,135,80,${alpha})`;


            ctx.fill();

        }

    }



    /* ==========================================================
       CREATE PARTICLES
    ========================================================== */

    function createParticles() {

        particles = [];


        const total =

            window.innerWidth < 768

                ? SETTINGS.mobileParticles

                : SETTINGS.desktopParticles;


        for (
            let i = 0;
            i < total;
            i++
        ) {

            particles.push(
                new Particle()
            );

        }

    }



    /* ==========================================================
       CONNECTION LINES
    ========================================================== */

    function connectParticles() {

        const theme =
            root.getAttribute(
                "data-theme"
            );


        for (
            let a = 0;
            a < particles.length;
            a++
        ) {

            for (
                let b = a + 1;
                b < particles.length;
                b++
            ) {

                const dx =
                    particles[a].x -
                    particles[b].x;


                const dy =
                    particles[a].y -
                    particles[b].y;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance <
                    SETTINGS.connectionDistance
                ) {

                    const opacity =

                        1 -

                        distance /
                        SETTINGS.connectionDistance;


                    ctx.beginPath();


                    ctx.moveTo(

                        particles[a].x,

                        particles[a].y

                    );


                    ctx.lineTo(

                        particles[b].x,

                        particles[b].y

                    );


                    if (
                        theme === "dark"
                    ) {

                        ctx.strokeStyle =

                            `rgba(
                                0,
                                230,
                                138,
                                ${opacity * 0.12}
                            )`;

                    } else {

                        ctx.strokeStyle =

                            `rgba(
                                0,
                                115,
                                65,
                                ${opacity * 0.09}
                            )`;

                    }


                    ctx.lineWidth =
                        0.7;


                    ctx.stroke();

                }

            }

        }

    }



    /* ==========================================================
       ANIMATION
    ========================================================== */

    function animate() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            function (particle) {

                particle.update();

                particle.draw();

            }
        );


        connectParticles();


        requestAnimationFrame(
            animate
        );

    }



    /* ==========================================================
       MOUSE MOVEMENT
    ========================================================== */

    window.addEventListener(
        "mousemove",
        function (event) {

            mouse.x =

                (
                    event.clientX -
                    window.innerWidth / 2
                ) /
                SETTINGS.mouseMovement;


            mouse.y =

                (
                    event.clientY -
                    window.innerHeight / 2
                ) /
                SETTINGS.mouseMovement;

        }
    );



    /* ==========================================================
       WINDOW RESIZE
    ========================================================== */

    window.addEventListener(
        "resize",
        resizeCanvas
    );



    /* ==========================================================
       START
    ========================================================== */

    resizeCanvas();

    animate();

});