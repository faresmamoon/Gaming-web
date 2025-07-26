 // Set the date we're counting down to (1 month from now)
const countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
countDownDate;
 const UNIT_PRICE = 555.55;

  function updatePrice(button, quantity) {
    const cardBody = button.closest(".card-body");
    const priceTag = cardBody.querySelector(".price");
    priceTag.innerText = `$${(UNIT_PRICE * quantity).toFixed(2)}`;
  }

  function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    let value = parseInt(numberInput.innerText, 10);
    if (isNaN(value)) value = 0;
    if (limit && value >= limit) return;
    value += 1;
    numberInput.innerText = value;
    updatePrice(button, value);
  }

  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    let value = parseInt(numberInput.innerText, 10);
    if (isNaN(value)) value = 0;
    if (value < 1) return;
    value -= 1;
    numberInput.innerText = value;
    updatePrice(button, value);
  }

 document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
        star.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    