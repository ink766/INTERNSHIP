// Function to convert meters to feet
function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet} feet.`);
}

// Function to convert feet to meters
function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters} meters.`);
}

// Example conversions
metersToFeet(10);   // Example 1: Convert 10 meters to feet
feetToMeters(50);   // Example 2: Convert 50 feet to meters
metersToFeet(25.5); // Example 3: Convert 25.5 meters to feet
feetToMeters(100);  // Example 4: Convert 100 feet to meters
