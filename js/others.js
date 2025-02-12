document.querySelectorAll(".wishlist-container").forEach(cart => {
    let counterElement = cart.querySelector(".counter");
    let counterDisplay = cart.querySelector(".counterDisplay");
    let priceCounter = cart.querySelector(".price-counter");
    let minusBtn = cart.querySelector(".minusBtn");
    let plusBtn = cart.querySelector(".plusBtn");

    let count = 1; // Start dynamically from 1 when product is added
    let pricePerItem = parseFloat(priceCounter.getAttribute("data-price")); // Get product price

    function updateDisplay() {
        counterElement.innerText = count;
        counterDisplay.innerText = count;
        priceCounter.innerText = `$${(count * pricePerItem).toFixed(2)}`;
        minusBtn.disabled = count === 0; // Disable minus button at zero
    }

    plusBtn.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    minusBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    });

    updateDisplay(); // Ensure display updates on load
});


document.addEventListener("DOMContentLoaded", () => {
    let cartItems = document.querySelectorAll(".wishlist-container");

    function updateSummary() {
        let summaryContainer = document.querySelector(".cart-right-container");
        let totalAmount = 0;

        // Clear previous summary except the total section
        summaryContainer.innerHTML = `
            <h5>Summary</h5>
            <div class="right-cart-line"></div>
        `;

        cartItems.forEach(cart => {
            let productName = cart.querySelector("h3").innerText;
            let count = parseInt(cart.querySelector(".counterDisplay").innerText);
            let pricePerItem = parseFloat(cart.querySelector(".price-counter").getAttribute("data-price"));
            let totalPrice = count * pricePerItem;
            totalAmount += totalPrice;

            // Only display items in summary if count > 0
            if (count > 0) {
                let summaryItem = `
                    <div class="right-cart-text">
                        <h6>${productName}</h6>
                        <h6>x${count}</h6>
                        <h6>$${totalPrice.toFixed(2)}</h6>
                        <h6>-</h6>
                        <h6>$${totalPrice.toFixed(2)}</h6>
                    </div>
                `;
                summaryContainer.innerHTML += summaryItem;
            }
        });

        // Add the total section
        summaryContainer.innerHTML += `
            <div class="right-cart-line"></div>
            <div class="cart-total">
                <h5>Total</h5>
                <h3>$${totalAmount.toFixed(2)}</h3>
            </div>
            <a href="#">Send Order to Bakery</a>
        `;
    }

    cartItems.forEach(cart => {
        let counterElement = cart.querySelector(".counter");
        let counterDisplay = cart.querySelector(".counterDisplay");
        let priceCounter = cart.querySelector(".price-counter");
        let minusBtn = cart.querySelector(".minusBtn");
        let plusBtn = cart.querySelector(".plusBtn");

        let count = 1; // Start dynamically from 1 when product is added
        let pricePerItem = parseFloat(priceCounter.getAttribute("data-price")); // Get product price

        function updateDisplay() {
            counterElement.innerText = count;
            counterDisplay.innerText = count;
            priceCounter.innerText = `$${(count * pricePerItem).toFixed(2)}`;
            minusBtn.disabled = count === 0; // Disable minus button at zero

            updateSummary(); // Update summary whenever count changes
        }

        plusBtn.addEventListener("click", () => {
            count++;
            updateDisplay();
        });

        minusBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                updateDisplay();
            }
        });

        updateDisplay(); // Ensure display updates on load
    });

    updateSummary(); // Initialize summary on page load
});