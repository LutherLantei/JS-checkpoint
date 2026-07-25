// ==========================================
// STRING MANIPULATION FUNCTIONS
// ==========================================

/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
const reverseString = (str) => str.split('').reverse().join('');

/**
 * Counts the number of characters in a string.
 * @param {string} str - The string to measure.
 * @returns {number} The total character count.
 */
const countCharacters = (str) => str.length;

/**
 * Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence - The sentence to format.
 * @returns {string} The capitalized sentence.
 */
const capitalizeWords = (sentence) => {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};


// ==========================================
// ARRAY FUNCTIONS
// ==========================================

/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The highest number.
 */
const findMax = (arr) => Math.max(...arr);

/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The lowest number.
 */
const findMin = (arr) => Math.min(...arr);

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The total sum.
 */
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

/**
 * Filters out elements from an array based on a given condition.
 * @param {Array} arr - The array to filter.
 * @param {Function} conditionFn - The callback function that returns a boolean.
 * @returns {Array} The filtered array.
 */
const filterArray = (arr, conditionFn) => arr.filter(conditionFn);


// ==========================================
// MATHEMATICAL FUNCTIONS
// ==========================================

/**
 * Calculates the factorial of a given number.
 * @param {number} n - The target integer.
 * @returns {number|undefined} The factorial value, or undefined for negative inputs.
 */
const factorial = (n) => {
    if (n < 0) return undefined;
    return n <= 1 ? 1 : n * factorial(n - 1);
};

/**
 * Checks if a number is prime or not.
 * @param {number} num - The number to test.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * @param {number} terms - The number of terms to generate.
 * @returns {number[]} The generated sequence array.
 */
const generateFibonacci = (terms) => {
    if (terms <= 0) return [];
    if (terms === 1) return;
    
    const sequence =;
    while (sequence.length < terms) {
        const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNum);
    }
    return sequence;
};
