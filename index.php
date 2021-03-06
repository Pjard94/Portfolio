<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Site identifiers -->
    <title> Peter Jardine's Protfolio</title>
    <link rel="icon" href="assets/favicon.png">
    <!-- allows the jQuery stuff to run -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- the links to the stylesheets -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <!-- font styles links -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>

    <div id="burger-box" class="small-nav">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <div class="menu">Menu</div>
        <span class="close-menu">x</span>
    </div>

    <div id="big-nav" class="big-nav">
        <div class="block-letter"><a href="#" class="menu-link">P</a></div>
        <ul class="big-nav-list">
            <li><a href="#projects" class="currentPage menu-link">My Portfolio</a></li>
            <li><a href="about.html" class="menu-link">About Me</a></li>
            <li><a href="coding.html" class="menu-link">Coding Examples</a></li>
            <li><a href="SCSscheme.html" class="menu-link">SCS Scheme</a></li>
        </ul>
        <a href="#contact-area" class="contact-me-link menu-link">Contact Me</a>
        <div class="social-media">
            <a href="https://www.linkedin.com/in/peter-jardine-1b2045215/" target="_blank" class="social-media-links menu-link"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Pjard94" target="_blank" class="social-media-links menu-link"><i class="fab fa-github"></i></a>
        </div>
    </div>

    <div id="menu-showing" class="main">

        <header>
            <div class="hero-image"></div>
            <div id="introduction">

                <h1 id="me">My Name is Peter Jardine</h1>

                <!-- this area is targeted by my jQuery for the text typewriter effect -->
                <div class="text-typewriter-container">
                    <div id="role" class="text-typewriter-output"></div>
                </div>
            </div>
            <a href="#projects" id="scroll-area">
                <div id="scroll-call">Scroll Down</div>
                <div><i class="fas fa-chevron-down"></i></div>
            </a>
        </header>

        <div class="projects" >

            <div id="projects" class="projects-container">
            
                <!-- add a transition to the project titles and descriptions to move up on hover -->
                <div id="project-one" class="project project-1">
                    <div class="project-background"></div>
                    <div class="project-title project-title-filled">Netmatters Site Fascimilie 
                        <p class="project-description">My copy of the main Netmatters webpage. Primarily using HTML and CSS, I have added Javascript and PHP later.</p>
                    </div>
                    <div class="project-buttons">
                        <a href="http://netmatters.peter-jardine.netmatters-scs.co.uk/" target="_blank" class="project-button">Project</a>
                        <a href="https://github.com/Pjard94/Netmatters" target="_blank" class="project-button">Github</a>
                    </div>
                </div>

                <div id="project-two" class="project project-2">
                    <div class="project-background"></div>
                    <div class="project-title project-title-filled">Axure Shopfront
                        <p class="project-description">Using Axure I made a shop front using conditionals to connect pages and checkout page to hold the items.</p>
                    </div>
                    <div class="project-buttons">
                        <a href="https://ti09vc.axshare.com/" target="_blank" class="project-button">Project</a>
                        <!-- <a href="#projects" target="_blank" class="project-button">Read More</a> -->
                    </div>
                </div>

                <div id="project-three" class="project project-3">
                    <div class="project-background"></div>
                    <div class="project-title">Group project
                        <p class="project-description">I was grouped with some other scions for a project and we made this site.</p>
                    </div>
                    <div class="project-buttons">
                        <a href="http://bakers-dozen.peter-jardine.netmatters-scs.co.uk/" target="_blank" class="project-button">Project</a>
                        <a href="https://github.com/donk3ylee/trifecta-perfecta" target="_blank" class="project-button">Github</a>
                    </div>
                </div>

                <div id="project-four" class="project project-4">
                    <div class="project-background"></div>
                    <div class="project-title">
                        <p class="project-description"></p>
                    </div>
                    <div class="project-buttons">
                        <a href="#projects" target="_blank" class="project-button unconnected">Project</a>
                        <a href="#projects" target="_blank" class="project-button unconnected">Read More</a>
                    </div>
                </div>

                <div id="project-five" class="project project-5">
                    <div class="project-background"></div>
                    <div class="project-title">
                        <p class="project-description"></p>
                    </div>
                    <div class="project-buttons">
                        <a href="#projects" target="_blank" class="project-button unconnected">Project</a>
                        <a href="#projects" target="_blank" class="project-button unconnected">Read More</a>
                    </div>
                </div>

                <div id="project-six" class="project project-6">
                    <div class="project-background"></div>
                    <div class="project-title">
                        <p class="project-description"></p>
                    </div>
                    <div class="project-buttons">
                        <a href="#projects" target="_blank" class="project-button unconnected">Project</a>
                        <a href="#projects" target="_blank" class="project-button unconnected">Read More</a>
                    </div>
                </div>

            </div>

        </div>

        <div id="message-status-area">
            <p id="form-status" class="messageHidden"></p>
        </div>

        <footer id="contact-area">
            <div id="contact--area">
                <div id="contact-area-container">
                    <div>
                        <h2>Get In Touch</h2>
                        <p>You can contact me anywhere using one of the contact links below.</p>
                    </div>
                    <div id="contact-methods">
                        <a id="contact-telephone-link" href="tel:078-718-21096">07871821096</a>
                        <a id="contact-email-link" href="mailto:jardine.peter.94@gmail.com">jardine.peter.94@gmail.com</a>
                    </div>
                    <div>
                        <p> Otherwise you can fill out the form. I will get back to you within 2-3 days,<br> it may take longer if sent on the weekends or bank holidays.</p>
                    </div>
                </div>

                
                <form id="contact-form">
                    <!-- A basic form to contact me -->
                    <input class="contact-form-input" id="contact-form-first" type="text" name="first" placeholder="First Name*" required>
                    <input class="contact-form-input" id="contact-form-last" type="text" name="last" placeholder="Last Name*" required>
                    <input class="contact-form-input" id="client-email" type="email" name="email" placeholder="Email*" required>
                    <input class="contact-form-input" id="email-subject" type="text" name="subject"  placeholder="Subject*" required>
                    <textarea class="contact-form-input" id="message" name="message" placeholder="Message*" required></textarea>
                    <button id="contact-form-submit" class="clickable" >Submit</button>
                </form>
                
                
            </div>
            
        </footer>
        
        <div id="up-div">
            <a id="scroll-up" href="#introduction">
                <div><i class="fas fa-chevron-up"></i></div>
                <div>Back to Top</div>
            </a>
        </div>    

        <div id="menu-overlay"></div>
    </div>

    <!-- these allow for the typewriter to work -->
    <script src="js/better-typewriter/typed.js"></script>
    <script src="js/nav-menu.js"></script>
    <script src="js/form-validation.js"></script>
    <script src="js/typing.js"></script>

</body>
</html>