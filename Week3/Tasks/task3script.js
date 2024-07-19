// Function to calculate the perimeter of a rectangle
function calcPerimeter(length, width) {
    var perimeter = 2 * (length + width);
    console.log(`The perimeter is ${perimeter}`);
}

// Function to calculate the area of a rectangle
function calcArea(length, width) {
    var area = length * width;
    console.log(`The area is ${area}`);
}

// Example usage:
calcPerimeter(5, 3); // Outputs: The perimeter is 16
calcArea(5, 3);      // Outputs: The area is 15
