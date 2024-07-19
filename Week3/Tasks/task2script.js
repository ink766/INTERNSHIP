function calculatePetAge(petAge, conversionRate = 7) {
    // Calculate the pet's age in pet years
    var petYears = petAge * conversionRate;
    
    // Display the result using template literals
    console.log(`Your pet is ${petYears} years old in pet years!`);
}

// Call calculatePetAge with different arguments
calculatePetAge(3);  // Assuming default conversion rate for cats (7)
calculatePetAge(5, 5);  // Custom conversion rate for another type of pet
calculatePetAge(2, 10); // Custom conversion rate for another type of pet
