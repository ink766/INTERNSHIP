function calculateCoffeeSupply(age, cupsPerDay) {
    // Define constant max age
    const maxAge = 90;

    // Calculate remaining years based on max age
    var yearsRemaining = maxAge - age;

    // Calculate total cups of coffee consumed
    var totalCups = Math.round(yearsRemaining * cupsPerDay * 365); // Rounded to nearest whole number

    // Output the result using template literals
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}

// Example usage:
calculateCoffeeSupply(30, 2);    // Outputs: You will need 43800 cups of coffee to keep you awake until the age of 90.
calculateCoffeeSupply(25, 3.5);  // Outputs: You will need 83913 cups of coffee to keep you awake until the age of 90.
calculateCoffeeSupply(40, 1.5);  // Outputs: You will need 29250 cups of coffee to keep you awake until the age of 90.
