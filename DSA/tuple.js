// Explanation:
// Parsing the String:

// The regex /\((.*?)\)/g extracts substrings inside () brackets.
// Each extracted substring is split by , and converted to a number array.
// Creating the multiply(n) Function:

// The function multiplies the n-th element of each tuple (adjusting for 0-based indexing).
// Uses .reduce() to compute the product.
// If n is out of bounds for a tuple, it defaults to 1 (neutral for multiplication).

// function tuple(str) {
//     // Parse the input string into an array of arrays
//     const tuples = str.match(/\((.*?)\)/g).map(t =>
//         t.slice(1, -1).split(',').map(num => Number(num.trim()))
//     );

//     return {
//         data: tuples,
//         multiply: function (n) {
//             return this.data.reduce((prod, arr) => prod * (arr[n - 1] || 1), 1);
//         }
//     };
// }

// const str = `(1, 2, 3) , (4, 5, 6) ,  (7, 8, 9)`;
// const x = tuple(str);
// console.log(x.multiply(1)); // 2 * 5 * 8 = 80

// Function to multiply elements at a given position in each tuple
function multiple(position) {
    // Get the length of the current array (this refers to the calling array)
    const length = this.length;

    // Check if the array is empty, return 0 if true
    if (length === 0) {
        return 0;
    }

    // Initialize an array to store elements at the specified position
    const collection = [];

    // Iterate over each sub-array (tuple)
    for (let i = 0; i < length; i++) {
        const current = this[i]; // Get the current tuple
        const actualPosition = position - 1; // Convert 1-based position to 0-based index

        // Check if the tuple has the required position (avoiding undefined errors)
        if (Object.prototype.hasOwnProperty.call(current, actualPosition)) {
            collection.push(current[actualPosition]); // Store the element
        }
    }

    // If no valid elements were found at the specified position, return 0
    if (!collection.length) {
        return 0;
    }

    // Multiply all collected elements and return the result
    return collection.reduce((r, j) => r * j, 1);
}

// Function to parse a string into a nested array of numbers (tuple format)
function tuple(input) {
    // Check if input is not a string, throw an error if invalid
    if (typeof input !== 'string') {
        throw new TypeError('Invalid params');
    }

    // If input is an empty or whitespace-only string, return an empty array
    if (input && !input.trim().length) {
        return [];
    }

    // Use a regular expression to extract groups that resemble tuples: (1,2,3), (4,5,6), etc.
    const matchedGroups = input.match(/(\([^\)]+\)?)/g);

    // If no valid groups are found, return an empty array
    if (!matchedGroups) {
        return [];
    }

    // Reduce the matched groups into an array of number arrays (tuples)
    const result = matchedGroups.reduce((rows, group) => {
        // Remove parentheses and extra spaces, then split into individual numbers
        let row = group.replace(/[\(\)\s]/g, '').split(',');

        // Convert string elements into numbers
        row = row.map((el) => Number(el));

        // Add the parsed tuple to the final result array
        rows.push(row);

        return rows;
    }, []);

    return result; // Return the parsed nested array (tuple representation)
}

// Extend the Array prototype to include the multiple function
Array.prototype.multiple = multiple;

const str = `(1, 2, 3), (4, 5, 6), (7, 8, 9)`; // Input string

const tuples = tuple(str); // Convert string to array of tuples
console.log(tuples); // Expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const result = tuples.multiple(2); // Multiply the 2nd item in each tuple: 2 * 5 * 8
console.log(result); // Expected output: 80
