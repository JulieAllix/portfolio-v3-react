function changeDots(slides, dot){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dot.classList.add("active");
}

export default changeDots;