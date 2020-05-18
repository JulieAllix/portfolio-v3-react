/* To deactivate the scrollChange function when screen is too small */

let widthMatch = window.matchMedia("(min-width: 1450px)");
widthMatch.addEventListener('change', function(mm) {
  console.log('change');
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 1450px
        document.addEventListener('wheel', scrollChange);
    } else {
      document.removeEventListener('wheel', scrollChange);
    }   
});

/* To change slides with scroll */

const scrollChange = (event) => {
    console.log('scroll');
    if (event.deltaY > 0){
      scrollSlide += 1;
    } else {
        scrollSlide -= 1;
    }

    if (scrollSlide > 3){
        scrollSlide = 0;
    }

    if (scrollSlide < 0){
        scrollSlide = 3;
    }
    
    const dot = slides[scrollSlide];
    changeDots(slides, dot);
    nextSlide(pages, current, scrollSlide, slides);
    current = scrollSlide;

  }



/* To remove scroll functionality when user uses tab navigation and set an outline style */

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
      console.log('tab');
      event.preventDefault();
      document.removeEventListener('wheel', scrollChange);
      slides.forEach((slide, index) => {
        slide.style.outline = 'none';
        slide.addEventListener("focus", function () {
          this.style.outline = 'solid';
        })
      });
    };
  });