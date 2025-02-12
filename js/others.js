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