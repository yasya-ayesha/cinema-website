const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let cost = 500;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalActive = schemeSvg.querySelectorAll('.active').length
        totalPrice =  totalActive * cost;
        totalPriceTag.textContent = totalPrice;
    }
})