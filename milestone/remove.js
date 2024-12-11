function removeDuplicates(cart) {
    const uniqueCart = [...new Set(cart)];
    console.log("Cart without duplicates:", uniqueCart);
    return uniqueCart;
}

// Example usage
removeDuplicates(["apple", "banana", "apple", "orange", "banana"]);
