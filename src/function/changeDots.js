/*
function changeDots(slides, dot){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dot.classList.add("active");
}

export default changeDots;
*/

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