import { gsap } from 'gsap';

export const changeDots = (slides, dot) => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    return dot.classList.add("active");
}

export const bold = (pages, name) => {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    return name.classList.add("active");
}

// Detects the scroll
export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

export const nextSlide = (pages, current, pageNumber, slides) => {
    
    const backgrounds = [
        `radial-gradient(#4B4B4B, #0B1023)`,
        `radial-gradient(#225D94, #0B1023)`,
        `radial-gradient(#4D0E30, #0B1023)`,
        `radial-gradient(#1E6176, #0B1023)`
    ];

    const nextPage = pages[pageNumber];
    console.log(nextPage);
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector('.hero .photo-left');
    const nextRight = nextPage.querySelector('.hero .photo-right');
    const currentLeft = currentPage.querySelector('.hero .photo-left');
    const currentRight = currentPage.querySelector('.hero .photo-right');
    const currentText = currentPage.querySelector('.detail');
    const nextText = nextPage.querySelector('.detail');
    const currentProjects = currentPage.querySelector('.projects');
    const nextProjects = nextPage.querySelector('.projects');
    const portfolio = document.querySelector('.portfolio');
    
    const tl = gsap.timeline({
        // You cannot click on the nav buttons until the animation finishes
        onStart: function(){
            slides.forEach(slide => {
                slide.style.pointerEvents = 'none';
            })
        },
        onComplete: function(){
            slides.forEach(slide => {
                slide.style.pointerEvents = 'all';
            })
        }
    });

    if (currentProjects == null && nextProjects != null){
        tl.fromTo(currentText, 0.2, {opacity: 1, y: 0}, {opacity: 0, y: -30})
        .fromTo(currentLeft, 0.3, {y: '-5%'}, {y: '-100%'}, '-=0.2') // currentLeft dissappears
        .fromTo(currentRight, 0.3, {y: '5%'}, {y: '-100%'}, '-=0.2')
        .to(portfolio, 0.3, { backgroundImage: backgrounds[pageNumber] }) // update bg
        .fromTo(currentPage, 0.2, {opacity: 1, pointerEvents: 'all'}, {opacity: 0, pointerEvents: 'none'}) // current page disappears
        .fromTo(currentPage, 0.1, {display: 'grid'}, {display: 'none'}) // current page's display changes
        .fromTo(nextPage, 0.1, {display: 'none'}, {display: 'grid'}) // next page's display changes
        .fromTo(nextPage, 0.2, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'}, "-=0.1") // next page appears
        .fromTo(nextLeft, 0.2, {y: '-100%'}, {y: '-5%'}, '-=0.1') // currentLeft appears
        .fromTo(nextRight, 0.2, {y: '-100%'}, {y: '5%'}, '-=0.1')
        .fromTo(nextText, 0.3, {opacity: 0, y: -30}, {opacity: 1, y: 0}, '-=0.2') //next text appears
        .fromTo(nextProjects, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0})
        .set(nextLeft, {clearProps: 'all'})
        .set(nextRight, {clearProps: 'all'});
        } else if (currentProjects != null && nextProjects == null){
            tl.fromTo(currentText, 0.2, {opacity: 1, y: 0}, {opacity: 0, y: -30})
            .fromTo(currentProjects, 0.2, {opacity: 1, y: 0}, {opacity: 0, y: 30}, '-=0.2')
            .fromTo(currentLeft, 0.3, {y: '-5%'}, {y: '-100%'}, '-=0.2') // currentLeft dissappears
            .fromTo(currentRight, 0.3, {y: '5%'}, {y: '-100%'}, '-=0.2')
            .to(portfolio, 0.3, { backgroundImage: backgrounds[pageNumber] }) // update bg
            .fromTo(currentPage, 0.2, {opacity: 1, pointerEvents: 'all'}, {opacity:0, pointerEvents: 'none'}) // current page disappears
            .fromTo(currentPage, 0.1, {display: 'grid'}, {display: 'none'}) // current page's display changes
            .fromTo(nextPage, 0.1, {display: 'none'}, {display: 'grid'}) // next page's display changes
            .fromTo(nextPage, 0.2, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'}, "-=0.15") // next page appears
            .fromTo(nextLeft, 0.2, {y: '-100%'}, {y: '-5%'}, '-=0.1') // currentLeft appears
            .fromTo(nextRight, 0.2, {y: '-100%'}, {y: '5%'}, '-=0.1')
            .fromTo(nextText, 0.3, {opacity: 0, y: -30}, {opacity: 1, y: 0}) //next text appears
            .set(nextLeft, {clearProps: 'all'})
            .set(nextRight, {clearProps: 'all'});
        }
        else {
            tl.fromTo(currentText, 0.2, {opacity: 1, y: 0}, {opacity: 0, y: -30})
            .fromTo(currentLeft, 0.3, {y: '-5%'}, {y: '-100%'}, '-=0.2') // currentLeft dissappears
            .fromTo(currentRight, 0.3, {y: '5%'}, {y: '-100%'}, '-=0.2')
            .to(portfolio, 0.3, { backgroundImage: backgrounds[pageNumber] }) // update bg
            .fromTo(currentPage, 0.2, {opacity: 1, pointerEvents: 'all'}, {opacity: 0, pointerEvents: 'none'}) // current page disappears
            .fromTo(currentPage, 0.1, {display: 'grid'}, {display: 'none'}) // current page's display changes
            .fromTo(nextPage, 0.1, {display: 'none'}, {display: 'grid'}) // next page's display changes
            .fromTo(nextPage, 0.2, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents: 'all'}, "-=0.1") // next page appears
            .fromTo(nextLeft, 0.2, {y: '-100%'}, {y: '-5%'}, '-=0.1') // currentLeft appears
            .fromTo(nextRight, 0.2, {y: '-100%'}, {y: '5%'}, '-=0.1')
            .fromTo(nextText, 0.3, {opacity: 0, y: -30}, {opacity: 1, y: 0}) //next text appears
            .set(nextLeft, {clearProps: 'all'})
            .set(nextRight, {clearProps: 'all'});
        }
        return current = pageNumber;

}