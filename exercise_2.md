Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born. This exercise demonstrates how to interact with users and process simple data.

Steps:

1. Prompt for Name and Age:

   - Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
   - Use prompt() again to ask for the user's age. Store this in a variable named userAge.

2. Calculate Year of Birth:

   - Determine the current year using new Date().getFullYear().
   - Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.

3. Display the Result:

   - Use alert() to show a message to the user that includes their name and the calculated year of birth.
