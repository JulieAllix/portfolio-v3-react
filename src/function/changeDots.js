/*
function changeDots(slides, dot){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dot.classList.add("active");
}

export default changeDots;
*/
import { TweenLite, TimelineMax } from 'gsap';

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
    name.classList.add("active");
}

export const nextSlide = (pages, current, pageNumber) => {
    const nextPage = pages[pageNumber];
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
}