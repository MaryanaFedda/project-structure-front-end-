//convert ts file to js file 
//npm install -g typescript
//tsc product.ts
// Function to calculate the total price of all products
function calculateTotalPrice() {
    // Create an array of Product objects
    var products = [
        { name: "Apple", price: 1.99 },
        { name: "Banana", price: 0.99 },
        { name: "Orange", price: 2.49 },
        { name: "Grapes", price: 3.99 }
    ];
    // Calculate total price using reduce
    var totalPrice = products.reduce(function (total, product) { return total + product.price; }, 0);
    // Display the result
    var resultElement = document.getElementById('result3');
    if (resultElement) {
        resultElement.textContent = "Total Price: $".concat(totalPrice.toFixed(2));
    }
}
// ------------------------------------------------------------------------------------------
// Function to validate email address using regular expressions
function validateEmail() {
    // Get the input email value from the user
    var email = document.getElementById('emailInput').value;
    // Regular expression for basic email validation (username@domain.com)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Validate email against the regular expression
    var isValid = emailPattern.test(email);
    // Display the result to the user
    var resultElement = document.getElementById('result4');
    if (resultElement) {
        if (isValid) {
            resultElement.textContent = "The email address \"".concat(email, "\" is valid.");
            resultElement.classList.remove('invalid');
        }
        else {
            resultElement.textContent = "The email address \"".concat(email, "\" is invalid.");
            resultElement.classList.add('invalid');
        }
    }
}
