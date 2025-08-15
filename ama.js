// Basic interactivity (if needed)
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for future interactivity
    console.log("Dashboard loaded");
});

let cart = [];
let total = 0;

function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the cart list before updating it
    cart.forEach(item => {
        const li = document.createElement('li');
        // Correct template literal syntax here
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    // Update total price display
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Example usage
const product = { name: 'Product Name 1', price: 19.99 };
addToCart(product);
