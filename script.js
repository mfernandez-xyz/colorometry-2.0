let currentCard = 0;

function moveCarousel(num) {
    const cards = document.querySelector('.carousel-cards');
    const totalCards = document.querySelectorAll('.card').length;

    currentCard += num;
    if (currentCard < 0) {
        currentCard = 0;
    } else if (currentCard >= totalCards) {
        currentCard = totalCards - 1;
    }

    cards.style.transform = `translateX(-${currentCard * 300}px)`; // Assumes each card is 300px wide
}
