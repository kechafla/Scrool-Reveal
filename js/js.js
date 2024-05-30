window.sr = ScrollReveal();
        sr.reveal('.navbar', {
            duration: 2000,
            origin: 'bottom'
        });
        
        /* scroll*/
        sr.reveal('.header-content-left', {
            duration: 2000,
            origin: 'right',
            distance: '300px'
        });
        /* scroll*/
        sr.reveal('.header-btn', {
            duration: 2000,
            origin: 'bottom',
            delay: 1000
        });
        /* scroll*/
        sr.reveal('.header-content-right', {
            duration: 2000,
            origin: 'left',
            distance: '300px'
        });
        
        /* scroll*/
        sr.reveal('#ranking', {
            duration: 2000,
            origin: 'left',
            distance: '300px',
            viewfactor: 'max'
        });

        //Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });