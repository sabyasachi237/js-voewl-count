function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a counter for vowels
    let count = 0;

    // Convert the string to lowercase to handle uppercase vowels as well
    str = str.toLowerCase();

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        // If the current character is a vowel, increment the count
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
