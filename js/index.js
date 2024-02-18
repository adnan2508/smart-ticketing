const allSeat = document.getElementsByClassName('seat-btn');

let seatCount = 0;
let seatLeft = 16;
let seatPrice = 0;

for(const seat of allSeat) {
    seat.addEventListener('click', function(event) {
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        seatCount = seatCount + 1;
        seatLeft = seatLeft - 1;
        seatPrice = seatCount * 550;
        document.getElementById('seat-count').innerText = seatCount;
        document.getElementById('seat-left').innerText = seatLeft;
        document.getElementById('seat-price').innerText = seatPrice;
        console.log(event.target.innerText)
    })
}