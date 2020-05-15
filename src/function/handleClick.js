/*
function handleClick() {
    console.log('A cliqué');
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page-name');

    // Tracker
    let current = 0;
    let scrollSlide = 0;

    changeDots(this);
    bold(this);
    //nextSlide(index);
    //scrollSlide = index;

    function changeDots(dot){
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add("active");
    }

    function bold(name){
        pages.forEach(page => {
            page.classList.remove('active');
        });
        name.classList.add("active");
    }
/*
    function nextSlide(pageNumber){
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        console.log(nextPage);
        console.log(currentPage);
    }
    */
}
/*
export default handleClick;