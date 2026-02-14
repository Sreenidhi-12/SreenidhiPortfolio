 // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;
        
        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save theme preference
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
        
        // Scroll Spy for Navbar and Scroll Indicator
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollDots = document.querySelectorAll('.scroll-dot');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            // Update navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
            
            // Update scroll indicator
            scrollDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href').substring(1) === current) {
                    dot.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
        
        // Show More/Less functionality for project descriptions
        document.querySelectorAll('.show-more-btn').forEach(button => {
            button.addEventListener('click', function() {
                const projectContent = this.closest('.project-content');
                const shortText = projectContent.querySelector('.short-text');
                const fullText = projectContent.querySelector('.full-text');
                
                if (this.textContent === 'Show More') {
                    shortText.style.display = 'none';
                    fullText.style.display = 'block';
                    this.textContent = 'Show Less';
                } else {
                    shortText.style.display = 'block';
                    fullText.style.display = 'none';
                    this.textContent = 'Show More';
                }
            });
        });
        
        // Load More Projects functionality
        const loadMoreBtn = document.querySelector('.load-more-btn');
        const hiddenProjects = document.querySelectorAll('.project-card.hidden');
        
        loadMoreBtn.addEventListener('click', function() {
            hiddenProjects.forEach(project => {
                project.classList.remove('hidden');
            });
            this.style.display = 'none';
        });
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Particles.js Background Configuration
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00b09b"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#96c93d",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });