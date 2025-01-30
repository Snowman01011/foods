const cartToggle = document.getElementById('cart-toogle');
const cartDisplay = document.getElementById('cart-display');
const closeCart = document.getElementById('close');

const cart = JSON.parse(localStorage.getItem("cart")) || [];


cartToggle.addEventListener('click', () => { 
        cartDisplay.style.visibility = "visible";
        updateCartDisplay()
});

closeCart.addEventListener('click', () => {
        cartDisplay.style.visibility = "hidden";
});

function updateCartDisplay() {
        const cartItemsList = document.getElementById('cart-items');
        // const totalPrice = document.getElementById('total-price');
        const cartTotal = document.getElementById('cart-total');

        cartItemsList.innerHTML = '';

        let total = 0;
        let quantity = 0;

        cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                cartItemsList.appendChild(li);
                total += item.price;
                quantity = cart.length;
                cartTotal.textContent = `${quantity}`;
        });
        
}

function addToCart(name, price) {
        cart.push({ name, price });
        updateCartDisplay();
}
