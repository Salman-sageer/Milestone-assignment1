function calculateRentalCost(days, carType) {
    let dailyCost;
    switch (carType.toLowerCase()) {
        case 'economy':
            dailyCost = 4000;
            break;
        case 'midsize':
            dailyCost = 10000;
            break;
        case 'luxury':
            dailyCost = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }
    const totalCost = dailyCost * days;
    console.log(`Total rental cost: Rs. ${totalCost}`);
}

// Example usage
calculateRentalCost(3, 'economy'); // Rs. 12000
calculateRentalCost(5, 'luxury');  // Rs. 100000
