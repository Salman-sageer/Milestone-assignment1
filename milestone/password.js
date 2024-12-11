function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        return console.log("Password Matched. Password validation Successful");
    } else {
        return console.log("Password didn't match. Password validation unsuccessful");
    }
}

validatePassword("12345", "12345");
validatePassword("password", "pass");

