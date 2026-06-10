// ==========================
// SHOPPING CART
// ==========================

const cartButtons = document.querySelectorAll(".add-cart");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.getElementById("cart-count");
const totalElement = document.getElementById("total");

let count = 0;
let total = 0;

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.parentElement;

    const productName = productCard.querySelector("h3").innerText;

    const productPrice = Number(
      productCard.querySelector("p").innerText.replace("$", ""),
    );

    count++;
    total += productPrice;

    cartCount.innerText = count;
    totalElement.innerText = total;

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `
      <span>${productName}</span>
      <span>$${productPrice}</span>
    `;

    cartItems.appendChild(item);

    button.innerText = "Added ✓";

    setTimeout(() => {
      button.innerText = "Add To Cart";
    }, 1000);
  });
});

// ==========================
// CART SIDEBAR TOGGLE
// ==========================

const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

// ==========================
// PRODUCT SEARCH
// ==========================

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const title = product.querySelector("h3").innerText.toLowerCase();

    if (title.includes(searchValue)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you! Your message has been sent successfully.");

  contactForm.reset();
});

// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));

    link.classList.add("active");
  });
});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(".product-card, .category");

function reveal() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// HERO BUTTON ANIMATION
// ==========================

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("mouseenter", () => {
  heroButton.style.transform = "translateY(-5px) scale(1.05)";
});

heroButton.addEventListener("mouseleave", () => {
  heroButton.style.transform = "translateY(0) scale(1)";
});
