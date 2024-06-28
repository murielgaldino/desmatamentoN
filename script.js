document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = document.querySelectorAll('.slider-container img');

    let index = 0;

    nextBtn.addEventListener('click', function() {
        index = (index + 1) % images.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', function() {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    });

    function updateSlider() {
        const slideWidth = images[index].clientWidth;
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
});

