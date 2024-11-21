//convert ts file to js file 
//npm install -g typescript
//tsc product.ts

//Task 4
// Define the Product interface
interface Product {
    name: string;
    price: number;
}

// Function to calculate the total price of all products
function calculateTotalPrice(): void {
    // Create an array of Product objects
    const products: Product[] = [
        { name: "Apple", price: 1.99 },
        { name: "Banana", price: 0.99 },
        { name: "Orange", price: 2.49 },
        { name: "Grapes", price: 3.99 }
    ];

    // Calculate total price using reduce
    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    // Display the result
    const resultElement = document.getElementById('result3');
    if (resultElement) {
        resultElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }
}

// ------------------------------------------------------------------------------------------
//Task 5
// Function to validate email address using regular expressions
function validateEmail(): void {
    // Get the input email value from the user
    const email = (document.getElementById('emailInput') as HTMLInputElement).value;

    // Regular expression for basic email validation (username@domain.com)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate email against the regular expression
    const isValid = emailPattern.test(email);

    // Display the result to the user
    const resultElement = document.getElementById('result4');
    if (resultElement) {
        if (isValid) {
            resultElement.textContent = `The email address "${email}" is valid.`;
            resultElement.classList.remove('invalid');
        } else {
            resultElement.textContent = `The email address "${email}" is invalid.`;
            resultElement.classList.add('invalid');
        }
    }
}

