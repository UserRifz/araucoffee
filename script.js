
let cart = []; 

function addToCart() {
    const coffeeType = document.getElementById('coffeeType').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!isNaN(quantity) && quantity > 0) {
        cart.push({ coffeeType, quantity });

        alert(`Item added to cart:\n\nCoffee Type: ${coffeeType}\nQuantity: ${quantity}`);

        console.log("Cart:", cart);
    } else {
        alert("Please enter a valid quantity.");
    }
}
