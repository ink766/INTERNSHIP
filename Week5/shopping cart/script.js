// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 }
];

// Cart to store selected products
let cart = [];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    updateCartIcon();
});

// Toggle cart visibility
document.getElementById('toggleCartBtn').addEventListener('click', () => {
    document.getElementById('cartContainer').classList.toggle('d-none');
});

// Show or hide cart on cart icon click
document.getElementById('cartIcon').addEventListener('click', () => {
    document.getElementById('cartContainer').classList.toggle('d-none');
});

// Populate product cards
function populateProducts() {
    const productsList = document.getElementById('productsList');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
    }
    updateCart();
}

// Update cart display
function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalAmount = document.getElementById('totalAmount');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'list-group-item';
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
            <button class="btn btn-sm btn-warning float-right" onclick="removeFromCart(${item.id})">Remove</button>
            <button class="btn btn-sm btn-secondary float-right mr-2" onclick="changeQuantity(${item.id}, -1)">-</button>
            <button class="btn btn-sm btn-secondary float-right" onclick="changeQuantity(${item.id}, 1)">+</button>
        `;
        cartList.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalAmount.textContent = total.toFixed(2);
    updateCartIcon();
}

// Change quantity of an item in the cart
function changeQuantity(productId, delta) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart icon with item count
function updateCartIcon() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

