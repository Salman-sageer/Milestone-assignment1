function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log("Result:", result);
}

// Example usage
calculator(10, 5, '+');
calculator(10, 5, '-');
calculator(10, 5, '*');
calculator(10, 5, '/');
calculator(10, 5, '%');
