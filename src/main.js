window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll(".tablink");
    const contents = document.querySelectorAll(".tabcontent");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", ( event ) => {
    
            let tabsChildren = event.target.parentElement.children;
            for (let t = 0; t < tabsChildren.length; t++) {
                tabsChildren[t].classList.remove("tab--active");
            }
            tabs[i].classList.add("tab--active");
            let tabContentChildren = event.target.parentElement.nextElementSibling.children;
            for (let c = 0; c < tabContentChildren.length; c++) {
                tabContentChildren[c].classList.remove("content--active");
            }
            contents[i].classList.add("content--active");  
        });
    }

    // Mobile Menu

    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-item-link');
    const body = document.querySelector('body');
    
    const toggleMenu = () => {
        const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('overflow-hidden');
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    function hideCloseBtn() {
        openMenuBtn.style.display = 'flex';
        closeMenuBtn.style.display = 'none';
    }
    function showCloseBtn() {
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'flex'; 
    }
    function hideBothBtn() {
        openMenuBtn.style.display = '';
        closeMenuBtn.style.display = '';
    }
    menuLinks.forEach(function(item){
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('is-open');
            body.classList.toggle('overflow-hidden');
            hideBothBtn();
        });
    });
    openMenuBtn.addEventListener('click', () => showCloseBtn());
    closeMenuBtn.addEventListener('click', () => hideCloseBtn());

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        body.classList.remove('overflow-hidden');
        openMenuBtn.setAttribute('aria-expanded', false);
        hideBothBtn();
    });

    // Modals
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
        
    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });

    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

    // Video

    const video = document.querySelector('video');
    const playBtn = document.querySelector('.play-btn');
    const videoSection = document.querySelector('.video__section');

    videoSection.addEventListener('click', function () {
        if (video.paused) { 
            video.play();
            playBtn.classList.add("hidden");
        } else {
            video.pause();
            playBtn.classList.remove("hidden");
        }
    });

});