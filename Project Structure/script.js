// Task 2
function calculate() {
    // Get input value from the user
    const input = document.getElementById('numbers').value;

    // Convert the input string into an array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Calculate total sum using reduce
    const sum = numbers.reduce((total, num) => total + num, 0);

    // Calculate average
    const average = numbers.length > 0 ? sum / numbers.length : 0;

    // Display the result
    document.getElementById('result1').textContent = `Total Sum: ${sum}`;
    document.getElementById('average').textContent = `Average: ${average}`;
}

// ------------------------------------------------------------------------------------------
//Task 3
function removeDuplicates() {
    // Get the input value from the user
    const input = document.getElementById('arrayInput').value;

    // Convert the input string into an array of strings
    const array = input.split(',').map(item => item.trim());

    // Use a Set to remove duplicates (Sets automatically store unique values)
    const uniqueArray = [...new Set(array)];

    // Display the unique array
    document.getElementById('result2').textContent = `Unique Array: [${uniqueArray.join(', ')}]`;
}

