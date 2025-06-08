document.addEventListener('DOMContentLoaded', () => {
    if (!checkAuth()) {
        window.location.href = 'login.html';
        return;
    }

    loadOrderSummary();
    setupPlaceOrderButton();
});

function loadOrderSummary() {
    const cart = getCart();
    const orderItemsDiv = document.getElementById('order-items');
    const orderTotalAmount = document.getElementById('order-total-amount');
    
    if (!cart || cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    let total = 0;
    orderItemsDiv.innerHTML = cart.map(item => {
        const product = staticProducts.find(p => p.id === item.productId);
        if (!product) return '';
        
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;object-fit:cover;">
                <div class="order-item-details">
                    <h4>${item.name} ${item.size ? `(${item.size})` : ''}</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ₹${product.price.toFixed(2)}</p>
                </div>
                <div class="order-item-total">
                    ₹${itemTotal.toFixed(2)}
                </div>
            </div>
        `;
    }).join('');

    orderTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

function setupPlaceOrderButton() {
    const placeOrderBtn = document.getElementById('place-order-btn');
    const shippingForm = document.getElementById('shipping-form');

    placeOrderBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        if (!shippingForm.checkValidity()) {
            shippingForm.reportValidity();
            return;
        }

        const formData = new FormData(shippingForm);
        const shippingDetails = Object.fromEntries(formData.entries());
        const cart = getCart();

        if (!cart || cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }

        try {
            // Here you would typically send the order to your backend
            // For now, we'll simulate a successful order
            const order = {
                shippingDetails,
                items: cart,
                total: cart.reduce((sum, item) => {
                    const product = staticProducts.find(p => p.id === item.productId);
                    return sum + (product ? product.price * item.quantity : 0);
                }, 0),
                orderDate: new Date().toISOString()
            };

            // Save order to localStorage (in a real app, this would go to a database)
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Clear the cart
            localStorage.removeItem('cart');

            // Show success message
            const toast = document.getElementById('order-success-toast');
            toast.textContent = 'Order placed successfully!';
            toast.className = 'cart-toast success';
            toast.style.display = 'block';

            // Redirect to home page after 2 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);

        } catch (error) {
            showToast('Error placing order. Please try again.', 'error');
        }
    });
} 