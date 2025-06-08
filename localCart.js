const staticProducts = [
    // Featured Products
    { id: 'f1', image: 'img/products/f1.jpg', name: 'Cartoon Astronaut T-Shirts', brand: 'Adidas', price: 999, category: 'Featured', stars: 5, description: 'High-quality cotton t-shirt with a unique astronaut design.', images: ['img/products/f1.jpg', 'img/products/f2.jpg', 'img/products/f3.jpg', 'img/products/f4.jpg'] },
    { id: 'f2', image: 'img/products/f2.jpg', name: 'Green leaves Shirt', brand: 'Adidas', price: 1599, category: 'Featured', stars: 5, description: 'Stylish shirt with a vibrant green leaves pattern, perfect for summer.', images: ['img/products/f2.jpg', 'img/products/f3.jpg', 'img/products/f4.jpg', 'img/products/f5.jpg'] },
    { id: 'f3', image: 'img/products/f3.jpg', name: 'Beige Shirt', brand: 'Adidas', price: 1399, category: 'Featured', stars: 5, description: 'Classic beige shirt, versatile for casual and semi-formal occasions.', images: ['img/products/f3.jpg', 'img/products/f4.jpg', 'img/products/f5.jpg', 'img/products/f6.jpg'] },
    { id: 'f4', image: 'img/products/f4.jpg', name: 'White Shirt', brand: 'Peter England', price: 1099, category: 'Featured', stars: 5, description: 'Crisp white shirt from Peter England, a timeless wardrobe essential.', images: ['img/products/f4.jpg', 'img/products/f5.jpg', 'img/products/f6.jpg', 'img/products/f7.jpg'] },
    { id: 'f5', image: 'img/products/f5.jpg', name: 'Dark BLue FLowers Shirt', brand: 'Raymond', price: 1199, category: 'Featured', stars: 5, description: 'Elegant dark blue shirt with subtle floral patterns, ideal for a refined look.', images: ['img/products/f5.jpg', 'img/products/f6.jpg', 'img/products/f7.jpg', 'img/products/f8.jpg'] },
    { id: 'f6', image: 'img/products/f6.jpg', name: 'Denim Shirts', brand: 'DNMX', price: 1899, category: 'Featured', stars: 5, description: 'Durable denim shirt from DNMX, comfortable and stylish for everyday wear.', images: ['img/products/f6.jpg', 'img/products/f7.jpg', 'img/products/f8.jpg', 'img/products/n1.jpg'] },
    { id: 'f7', image: 'img/products/f7.jpg', name: 'Baggy Trouser', brand: 'Arrow', price: 899, category: 'Featured', stars: 4, description: 'Comfortable baggy trousers by Arrow, perfect for a relaxed fit.', images: ['img/products/f7.jpg', 'img/products/f8.jpg', 'img/products/n1.jpg', 'img/products/n2.jpg'] },
    { id: 'f8', image: 'img/products/f8.jpg', name: 'Kurtis 7 Kurtas', brand: 'Biba Kurtis', price: 799, category: 'Featured', stars: 4, description: 'Traditional Kurtis and Kurtas from Biba, suitable for ethnic wear.', images: ['img/products/f8.jpg', 'img/products/n1.jpg', 'img/products/n2.jpg', 'img/products/n3.jpg'] },
    // New Arrivals
    { id: 'n1', image: 'img/products/n1.jpg', name: 'Cotton Light BLue Shirt', brand: 'Adidas', price: 899, category: 'New Arrival', stars: 5, description: 'Light blue cotton shirt, breathable and comfortable for warm weather.', images: ['img/products/n1.jpg', 'img/products/n2.jpg', 'img/products/n3.jpg', 'img/products/n4.jpg'] },
    { id: 'n2', image: 'img/products/n2.jpg', name: 'Lght Grey Shirt', brand: 'Puma', price: 1099, category: 'New Arrival', stars: 5, description: 'Light grey Puma shirt, sleek and modern for athletic or casual style.', images: ['img/products/n2.jpg', 'img/products/n3.jpg', 'img/products/n4.jpg', 'img/products/n5.jpg'] },
    { id: 'n3', image: 'img/products/n3.jpg', name: 'Off WHite Shirt', brand: 'Adidas', price: 1299, category: 'New Arrival', stars: 5, description: 'Off-white Adidas shirt, a versatile addition to any wardrobe.', images: ['img/products/n3.jpg', 'img/products/n4.jpg', 'img/products/n5.jpg', 'img/products/n6.jpg'] },
    { id: 'n4', image: 'img/products/n4.jpg', name: 'Printed Design Shirt', brand: 'Peter England', price: 1199, category: 'New Arrival', stars: 5, description: 'Peter England shirt with a subtle printed design, adding a touch of elegance.', images: ['img/products/n4.jpg', 'img/products/n5.jpg', 'img/products/n6.jpg', 'img/products/n7.jpg'] },
    { id: 'n5', image: 'img/products/n5.jpg', name: 'Daenim Jeans Shirt', brand: 'DNMX', price: 1199, category: 'New Arrival', stars: 5, description: 'Denim jeans shirt from DNMX, trendy and casual for everyday wear.', images: ['img/products/n5.jpg', 'img/products/n6.jpg', 'img/products/n7.jpg', 'img/products/n8.jpg'] },
    { id: 'n6', image: 'img/products/n6.jpg', name: 'Cotton Trouser', brand: 'Arrow', price: 1499, category: 'New Arrival', stars: 5, description: 'Comfortable cotton trousers by Arrow, perfect for a relaxed yet smart look.', images: ['img/products/n6.jpg', 'img/products/n7.jpg', 'img/products/n8.jpg', 'img/products/f1.jpg'] },
    { id: 'n7', image: 'img/products/n7.jpg', name: 'Cream Cotton Shirt', brand: 'Jack & Jones', price: 1899, category: 'New Arrival', stars: 4, description: 'Cream cotton shirt from Jack & Jones, offering comfort and style.', images: ['img/products/n7.jpg', 'img/products/n8.jpg', 'img/products/f1.jpg', 'img/products/f2.jpg'] },
    { id: 'n8', image: 'img/products/n8.jpg', name: 'Pure Linen Black Shirt', brand: 'Netplay', price: 999, category: 'New Arrival', stars: 4, description: 'Pure linen black shirt from Netplay, lightweight and elegant.', images: ['img/products/n8.jpg', 'img/products/f1.jpg', 'img/products/f2.jpg', 'img/products/f3.jpg'] },
];

function showToast(message, type = 'success') {
    const toast = document.getElementById('shop-toast') || document.getElementById('cart-toast');
    if (toast) {
        toast.textContent = message;
        toast.className = 'cart-toast ' + type;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 2000);
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1, size = null) {
    const product = staticProducts.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found!', 'error');
        return;
    }

    if (!checkAuth()) { // Using checkAuth from auth.js
        showToast('Please login to add items to cart', 'error');
        return;
    }

    let cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.productId === productId && item.size === size);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity,
            size: size
        });
    }
    saveCart(cart);
    showToast('Added to cart!');
}

function updateQuantity(productId, newQuantity, size = null) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId && item.size === size);

    if (itemIndex > -1) {
        cart[itemIndex].quantity = parseInt(newQuantity);
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
        }
        saveCart(cart);
        showToast('Quantity updated!');
        if (window.location.pathname.includes('cart.html')) {
            loadCartPage(); // Reload cart page if on cart.html
            updateSubtotal(); // Update subtotal immediately
        }
    }
}

function removeFromCart(productId, size = null) {
    let cart = getCart();
    const initialLength = cart.length;
    cart = cart.filter(item => !(item.productId === productId && item.size === size));
    
    if (cart.length < initialLength) {
        saveCart(cart);
        showToast('Item removed from cart!');
        // Immediately update the cart page
        if (window.location.pathname.includes('cart.html')) {
            loadCartPage();
            // Update subtotal immediately
            updateSubtotal();
        }
    }
}

function updateSubtotal() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => {
        const product = staticProducts.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const cartSubtotalSpan = document.getElementById('cart-subtotal');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartSubtotalSpan) cartSubtotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
    if (cartTotalSpan) cartTotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
    if (checkoutBtn) checkoutBtn.disabled = subtotal === 0;
}

function loadCartPage() {
    const loginRequiredDiv = document.getElementById('login-required');
    const emptyCartDiv = document.getElementById('empty-cart');
    const cartContentDiv = document.getElementById('cart-content');
    const cartItemsTableBody = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!checkAuth()) {
        loginRequiredDiv.style.display = 'block';
        emptyCartDiv.style.display = 'none';
        cartContentDiv.style.display = 'none';
        return;
    }

    const cart = getCart();
    if (!cart || cart.length === 0) {
        emptyCartDiv.style.display = 'block';
        loginRequiredDiv.style.display = 'none';
        cartContentDiv.style.display = 'none';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    cartItemsTableBody.innerHTML = cart.map(item => {
        const product = staticProducts.find(p => p.id === item.productId);
        if (!product) return ''; // Should not happen if data is consistent
        return `
            <tr class="cart-row" tabindex="0">
                <td><a href="#" onclick="event.preventDefault(); removeFromCart('${item.productId}', '${item.size}')" aria-label="Remove ${item.name} from cart"><i class="fas fa-times-circle"></i></a></td>
                <td><img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:cover;"></td>
                <td>${item.name} ${item.size ? `(${item.size})` : ''}</td>
                <td>₹${product.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" aria-label="Quantity for ${item.name}" onchange="updateQuantity('${item.productId}', this.value, '${item.size}')">
                </td>
                <td>₹${(product.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    }).join('');

    updateSubtotal();
    
    loginRequiredDiv.style.display = 'none';
    emptyCartDiv.style.display = 'none';
    cartContentDiv.style.display = 'block';
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('redirectUrl');
    localStorage.removeItem('cart'); // Clear cart on logout
    window.location.href = 'login.html';
}

// This DOMContentLoaded block remains in auth.js to handle the generic navbar logic
// and logout for pages using #logoutBtn (excluding cart.html which has special logic)
document.addEventListener('DOMContentLoaded', () => {
// ... existing code ...
});

// Ensure updateNavigation is called on DOMContentLoaded in HTML files
// Ensure loadCartPage is called on DOMContentLoaded in cart.html
// Ensure loadProducts is called on DOMContentLoaded in shop.html
// Ensure loadProductDetails is called on DOMContentLoaded in sproduct.html for relevant pages 