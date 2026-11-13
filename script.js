
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.textContent = "☰";
    });

});


// PRODUCT FILTER

const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        const selectedCategory = this.dataset.filter;

        productCards.forEach(card => {

            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// SHOPPING BAG COUNTER

let cartCount = 0;

const cartDisplay = document.getElementById("cartCount");

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        cartCount++;

        cartDisplay.textContent = cartCount;

        const oldText = this.textContent;

        this.textContent = "Added ✓";

        setTimeout(() => {
            this.textContent = oldText;
        }, 1200);

    });

});


// PERSONALIZED GIFT BOX

const giftForm = document.getElementById("giftForm");

giftForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const occasion = document.getElementById("occasion").value;

    const selectedItems = document.querySelectorAll(
        "#giftForm input[type='checkbox']:checked"
    );

    const message = document.getElementById("giftMessage");

    let products = [];

    selectedItems.forEach(item => {
        products.push(item.value);
    });

    if (products.length === 0) {

        message.textContent =
            "Please select at least one product.";

        return;

    }

    message.textContent =
        "Your " + occasion + " gift box includes: " +
        products.join(", ") +
        ". Contact us to arrange your gift!";

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
