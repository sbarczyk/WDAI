let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
};

prevDom.onclick = function() {
    showSlider('prev');
};

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        // Przeniesienie pierwszego elementu na koniec listy
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        
        // Dodanie klasy do animacji 'next'
        carouselDom.classList.add('next');
    } else {
        // Przeniesienie ostatniego elementu na początek listy
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        
        // Dodanie klasy do animacji 'prev'
        carouselDom.classList.add('prev');
    }

    // Usunięcie klasy po zakończeniu animacji
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev'); 
    }, 500); // Czas trwania animacji
}