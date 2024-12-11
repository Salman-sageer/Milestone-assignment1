function correctCartQuantities(cart) {
    return cart.map(quantity => quantity * 2);
}

// Example usage
const correctedCart = correctCartQuantities([1, 2, 3, 4, 5]);
console.log(correctedCart);
