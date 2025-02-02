document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".shopping-card-container");
    const totalPriceElement = document.querySelector(".total-price span");

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".card").forEach(card => {
            const price = parseFloat(card.dataset.price);
            const quantity = parseInt(card.querySelector(".quantity").textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    cartContainer.addEventListener("click", function (event) {
        const target = event.target;
        const card = target.closest(".card");

        if (!card) return;

        if (target.classList.contains("fa-plus")) {
            let quantityElement = card.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
        }

        if (target.classList.contains("fa-minus")) {
            let quantityElement = card.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
            }
        }

        if (target.classList.contains("fa-trash-alt")) {
            card.remove();
        }

        if (target.classList.contains("fa-heart")) {
            target.classList.toggle("liked");
            target.style.color = target.classList.contains("liked") ? "red" : "black";
        }

        updateTotal();
    });

    updateTotal();
});
