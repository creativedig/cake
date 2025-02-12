let count = 0;
        const counterElement = document.getElementById("counter");
        const minusBtn = document.getElementById("minusBtn");

        function increase() {
            count++;
            counterElement.innerText = count;
            minusBtn.disabled = false; // Enable minus button when number increases
        }

        function decrease() {
            if (count > 0) {
                count--;
                counterElement.innerText = count;
                if (count === 0) {
                    minusBtn.disabled = true; // Disable minus button when count reaches 0
                }
            }
        }



            document.addEventListener("DOMContentLoaded", function () {
                const cartItems = document.querySelectorAll(".wishlist-container");
                const totalElement = document.querySelector(".cart-total h3");
                
                function updateTotal() {
                    let total = 0;
                    document.querySelectorAll(".wishlist-container").forEach(item => {
                        const quantity = parseInt(item.querySelector(".counter").innerText);
                        const priceRange = item.querySelector("h2").innerText.match(/\d+/g);
                        const price = parseInt(priceRange[0]); // Assuming min price for calculation
                        total += quantity * price;
                    });
                    totalElement.innerText = `$${total.toFixed(2)}`;
                }
            
                cartItems.forEach(item => {
                    const counterElement = item.querySelector(".counter");
                    const increaseBtn = item.querySelector("button:last-child");
                    const decreaseBtn = item.querySelector("button:first-child");
                    
                    increaseBtn.addEventListener("click", function () {
                        let count = parseInt(counterElement.innerText);
                        count++;
                        counterElement.innerText = count;
                        decreaseBtn.disabled = false;
                        updateTotal();
                    });
                    
                    decreaseBtn.addEventListener("click", function () {
                        let count = parseInt(counterElement.innerText);
                        if (count > 1) {
                            count--;
                            counterElement.innerText = count;
                        } else {
                            decreaseBtn.disabled = true;
                        }
                        updateTotal();
                    });
                });
            
                updateTotal(); // Initialize total calculation
            });