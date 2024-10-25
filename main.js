const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


// Calculate price in real time when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value) || 0 // intialize with empty input;
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updatePrice);
quantityInput.addEventListener('input', updatePrice);

//places order for selected product
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `Placed ordered for ${quantity} ${selectedProduct}. Total price: $${totalPrice}`;

    if (quantity > 0) {
        orderSummary.textContent = `Placed order for ${quantity} ${selectedProduct}. Total price: $${totalPrice}`;
    } else {
        orderSummary.textContent = `Please enter a quantity.`;
    }
});