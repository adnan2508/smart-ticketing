const allSeat = document.getElementsByClassName("seat-btn");

let seatCount = 0;
let seatLeft = 16;
let seatPrice = 0;
let grandTotal;

for (const seat of allSeat) {
    
        seat.addEventListener("click", function (event) {
            seat.style.backgroundColor = "#1DD100";
            seat.style.color = "white";
            seatCount = seatCount + 1;
            seatLeft = seatLeft - 1;
            seatPrice = seatCount * 550;
            grandTotal = seatPrice;
            document.getElementById("seat-count").innerText = seatCount;
            document.getElementById("seat-left").innerText = seatLeft;
            document.getElementById("seat-price").innerText = seatPrice;
            document.getElementById("grand-total").innerText = grandTotal;

            seat.disabled = true;
            // Disable all other buttons only if 4 seats are selected
            if (seatCount === 4) {
                for (const otherSeat of allSeat) {
                if (otherSeat !== seat) {
                otherSeat.disabled = true;
          }
        }
      }
        
            const seatNo = event.target.innerText;
            const addSeat = document.getElementById("add-seat");

            const p = document.createElement("p");
            p.innerHTML = `<div class="flex justify-between items-center mt-5">
            <p>${seatNo}</p>
            <p>Economy</p>
            <p>550</p>
            </div>`
            addSeat.appendChild(p);
            
          });
}

const couponText = document.getElementById("coupon-text");
couponText.addEventListener("keyup", function (event) {
  const text = event.target.value;
  console.log(text);
  if (text === "NEW15") {
    console.log("Coupon applied");
    const couponCodeBtn = document.getElementById("coupon-code-btn");
    couponCodeBtn.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code");
      couponCode.style.display = "none";
      grandTotal = (seatPrice * 15) / 100;
      document.getElementById("grand-total").innerText = grandTotal;
    });
  } else if (text === "Couple 20") {
    console.log("Coupon applied");
    const couponCodeBtn = document.getElementById("coupon-code-btn");
    couponCodeBtn.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code");
      couponCode.style.display = "none";
      grandTotal = (seatPrice * 20) / 100;
      document.getElementById("grand-total").innerText = grandTotal;
    });
  } else {
    console.log("Wrong coupon");
  }
});

