const arr = [1, 2, 2, 3, 4, 4, 5];
// const duplicates = arr.filter((num, index, self) => self.indexOf(num) !== index);
// console.log(duplicates);

function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if the current element already exists in the result array
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If it's not a duplicate, add it to the result array
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    return result;
}

// function removeDuplicates(arr) {
//     const n = arr.length;
//     if (n <= 1)
//         return n;

//     // Start from the second element
//     let idx = 1; 
//     for (let i = 1; i < n; i++) {
//         if (arr[i] !== arr[i - 1]) {
//             arr[idx++] = arr[i];
//         }
//     }

//     return idx;
// }

// Driver code
// const newSize = removeDuplicates(arr);

// console.log(arr.slice(0, newSize).join(' '));

console.log(removeDuplicates(arr));
