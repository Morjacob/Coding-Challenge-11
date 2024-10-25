const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

productSelector.addEventListener('product-selector', updatePrice);
quantityInput.addEventListener('quantity', updatePrice);

//will show price when updated
updatePrice();

