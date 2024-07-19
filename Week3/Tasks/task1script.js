// Define the function tellFortune with four parameters
function tellFortune(numChildren, partnerName, location, jobTitle) {
    // Construct the fortune message using template literals
    var fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
    // Display the fortune message on the console
    console.log(fortune);
}

// Call tellFortune three times with different arguments
tellFortune(2, "Sara", "New York", "Software Engineer");
tellFortune(3, "John", "San Francisco", "Graphic Designer");
tellFortune(1, "Sophia", "Los Angeles", "Teacher");
